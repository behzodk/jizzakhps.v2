import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env
const envPath = join(__dirname, '..', '.env');
const envContent = readFileSync(envPath, 'utf-8');
envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && !key.startsWith('#')) {
    process.env[key.trim()] = valueParts.join('=').trim();
  }
});

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

console.log('🔥 Initializing Firebase Storage...');
console.log('Project:', firebaseConfig.projectId);

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.webp') return 'image/webp';
  return 'application/octet-stream';
}

async function run() {
  const studentsDir = join(__dirname, '..', 'src', 'assets', 'students');
  const files = readdirSync(studentsDir).filter(f => !f.startsWith('.'));

  console.log(`\n📸 Found ${files.length} student images to upload...\n`);

  const urlMap = {}; // { filename: downloadURL }

  for (let i = 0; i < files.length; i++) {
    const filename = files[i];
    const fullPath = join(studentsDir, filename);
    const fileBuffer = readFileSync(fullPath);
    const storagePath = `students/${filename}`;
    const storageRef = ref(storage, storagePath);

    process.stdout.write(`[${i + 1}/${files.length}] Uploading ${filename} ... `);
    try {
      const snapshot = await uploadBytes(storageRef, fileBuffer, {
        contentType: getMimeType(filename),
      });
      const downloadUrl = await getDownloadURL(snapshot.ref);
      urlMap[filename] = downloadUrl;
      console.log('✅');
    } catch (err) {
      console.log(`❌ Error: ${err.message}`);
    }
  }

  console.log(`\n🎉 Upload completed! Successfully uploaded ${Object.keys(urlMap).length} images.`);

  // Save url map to a json file
  const mapPath = join(__dirname, '..', 'src', 'data', 'students-urls.json');
  writeFileSync(mapPath, JSON.stringify(urlMap, null, 2), 'utf-8');
  console.log(`Saved URL mapping to src/data/students-urls.json`);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
