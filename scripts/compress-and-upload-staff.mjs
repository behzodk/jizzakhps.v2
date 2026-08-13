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

console.log('🔥 Initializing Firebase Storage for Staff...');
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const staffDir = join(__dirname, '..', 'src', 'assets', 'psstaff');
const tempDir = join(__dirname, '..', 'src', 'assets', 'temp_staff_compressed');
if (!existsSync(tempDir)) mkdirSync(tempDir, { recursive: true });

const files = readdirSync(staffDir).filter(f => f.endsWith('.png')).sort();

console.log(`\n📦 Found ${files.length} staff images. Starting high-quality compression...\n`);

const uploadedList = [];

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const srcPath = join(staffDir, file);
  const base = basename(file, '.png').replace(/\s+/g, '_');
  const targetJpeg = join(tempDir, `${base}.jpg`);

  // Compress using macOS sips: resize to max 1200px width/height and quality 85
  execSync(`sips -s format jpeg -s formatOptions 85 --resampleWidth 1200 "${srcPath}" --out "${targetJpeg}" 2>/dev/null`);

  const fileBuffer = readFileSync(targetJpeg);
  const origSize = (readFileSync(srcPath).length / (1024 * 1024)).toFixed(1);
  const newSize = (fileBuffer.length / 1024).toFixed(0);

  const storagePath = `staff/${base}.jpg`;
  const storageRef = ref(storage, storagePath);

  process.stdout.write(`[${i + 1}/${files.length}] ${file} (${origSize}MB -> ${newSize}KB) -> Firebase ... `);

  try {
    const snapshot = await uploadBytes(storageRef, fileBuffer, {
      contentType: 'image/jpeg',
    });
    const downloadUrl = await getDownloadURL(snapshot.ref);
    uploadedList.push({
      original: file,
      compressedName: `${base}.jpg`,
      url: downloadUrl,
      sizeKb: parseInt(newSize, 10),
    });
    console.log('✅');
  } catch (err) {
    console.log(`❌ ${err.message}`);
  }
}

console.log(`\n🎉 Uploaded ${uploadedList.length} staff photos successfully!`);
const outJson = join(__dirname, '..', 'src', 'data', 'staff-uploaded.json');
writeFileSync(outJson, JSON.stringify(uploadedList, null, 2), 'utf-8');
console.log(`Saved output to ${outJson}`);
