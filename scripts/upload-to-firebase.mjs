#!/usr/bin/env node

/**
 * Firebase Storage Upload Script
 * --------------------------------
 * public/storage/ papkasidagi barcha fayllarni
 * Firebase Storage ga yuklaydi.
 *
 * Ishlatish:
 *   1. .env faylini to'ldiring (Firebase config)
 *   2. node scripts/upload-to-firebase.mjs
 */

import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// .env faylini o'qish
function loadEnv() {
  try {
    const envPath = join(__dirname, '..', '.env');
    const envContent = readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && !key.startsWith('#')) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    });
  } catch {
    console.error('❌ .env fayli topilmadi! .env.example dan nusxa oling.');
    process.exit(1);
  }
}

loadEnv();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

if (!firebaseConfig.apiKey || firebaseConfig.apiKey === 'your-api-key-here') {
  console.error('❌ .env faylida Firebase config to\'ldirilmagan!');
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// MIME type aniqlash
function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.pdf': 'application/pdf',
    '.json': 'application/json',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'font/eot',
    '.css': 'text/css',
    '.js': 'application/javascript',
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

// Papka ichidagi barcha fayllarni rekursiv topish
function getAllFiles(dirPath, baseDir = dirPath) {
  const files = [];
  try {
    const items = readdirSync(dirPath);
    for (const item of items) {
      const fullPath = join(dirPath, item);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        files.push(...getAllFiles(fullPath, baseDir));
      } else {
        files.push({
          fullPath,
          relativePath: relative(baseDir, fullPath).replace(/\\/g, '/'),
        });
      }
    }
  } catch (err) {
    console.warn(`⚠️  Papkani o'qib bo'lmadi: ${dirPath}`);
  }
  return files;
}

// Bitta faylni yuklash
async function uploadFile(fullPath, storagePath) {
  const fileBuffer = readFileSync(fullPath);
  const fileRef = ref(storage, storagePath);
  const metadata = { contentType: getMimeType(fullPath) };

  const snapshot = await uploadBytes(fileRef, fileBuffer, metadata);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
}

// Asosiy yuklash funksiyasi
async function uploadAll() {
  const storageDir = join(__dirname, '..', 'public', 'storage');

  console.log('🚀 Firebase Storage ga yuklash boshlandi...');
  console.log(`📁 Manba: ${storageDir}`);
  console.log(`🌐 Bucket: ${firebaseConfig.storageBucket}\n`);

  const files = getAllFiles(storageDir);
  console.log(`📊 Jami ${files.length} ta fayl topildi\n`);

  const urlMap = {}; // { localPath: firebaseURL }
  let uploaded = 0;
  let failed = 0;

  for (const { fullPath, relativePath } of files) {
    const storagePath = `storage/${relativePath}`;
    const localKey = `/storage/${relativePath}`;

    try {
      process.stdout.write(`[${uploaded + 1}/${files.length}] ${relativePath} ... `);
      const url = await uploadFile(fullPath, storagePath);
      urlMap[localKey] = url;
      uploaded++;
      console.log('✅');
    } catch (err) {
      failed++;
      console.log(`❌ (${err.message})`);
    }
  }

  // URL map ni JSON faylga saqlash
  const outputPath = join(__dirname, '..', 'src', 'firebase-urls.json');
  writeFileSync(outputPath, JSON.stringify(urlMap, null, 2), 'utf-8');

  console.log(`\n✅ Yuklandi: ${uploaded}/${files.length}`);
  if (failed > 0) console.log(`❌ Xato: ${failed}`);
  console.log(`\n📄 URL lar saqlandi: src/firebase-urls.json`);
  console.log('\n🎉 Tayyor! Endi "node scripts/update-urls.mjs" ni ishga tushiring.');
}

uploadAll().catch(err => {
  console.error('💥 Kritik xato:', err);
  process.exit(1);
});
