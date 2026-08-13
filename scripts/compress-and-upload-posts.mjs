import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { readFileSync, readdirSync, mkdirSync, existsSync, writeFileSync } from 'fs';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

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

console.log('🔥 Initializing Firebase Storage for Posts...');
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const postsDir = join(__dirname, '..', 'src', 'assets', 'posts');
const tempDir = join(__dirname, '..', 'src', 'assets', 'temp_posts_compressed');
if (!existsSync(tempDir)) mkdirSync(tempDir, { recursive: true });

const files = readdirSync(postsDir).filter(f => !f.startsWith('.')).sort();

console.log(`\n📰 Found ${files.length} post images. Starting high-quality compression...\n`);

const uploadedMap = {};

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const srcPath = join(postsDir, file);
  const cleanBase = basename(file).replace(/\s+/g, '_');
  const targetJpeg = join(tempDir, cleanBase);

  // Compress using macOS sips: max width 1400px, quality 85 (crystal clear, optimal size)
  execSync(`sips -s format jpeg -s formatOptions 85 --resampleWidth 1400 "${srcPath}" --out "${targetJpeg}" 2>/dev/null`);

  const fileBuffer = readFileSync(targetJpeg);
  const origKb = (readFileSync(srcPath).length / 1024).toFixed(0);
  const newKb = (fileBuffer.length / 1024).toFixed(0);

  const storagePath = `posts/${cleanBase}`;
  const storageRef = ref(storage, storagePath);

  process.stdout.write(`[${i + 1}/${files.length}] ${file} (${origKb}KB -> ${newKb}KB) -> Firebase ... `);

  try {
    const snapshot = await uploadBytes(storageRef, fileBuffer, {
      contentType: 'image/jpeg',
    });
    const downloadUrl = await getDownloadURL(snapshot.ref);
    uploadedMap[file] = downloadUrl;
    console.log('✅');
  } catch (err) {
    console.log(`❌ ${err.message}`);
  }
}

console.log(`\n🎉 Uploaded ${Object.keys(uploadedMap).length} post photos successfully!`);
const outJson = join(__dirname, '..', 'src', 'data', 'posts-urls.json');
writeFileSync(outJson, JSON.stringify(uploadedMap, null, 2), 'utf-8');
console.log(`Saved output map to ${outJson}`);
