import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const urlsMap = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'students-urls.json'), 'utf-8'));
let studentsTs = readFileSync(join(__dirname, '..', 'src', 'data', 'students.ts'), 'utf-8');

// Match all import lines like: import ablaqulovaImg from '../assets/students/AblaqulovaParizoda.png'
const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+['"]\.\.\/assets\/students\/([^'"]+)['"];?/g;

const variableToUrl = {};

let match;
while ((match = importRegex.exec(studentsTs)) !== null) {
  const varName = match[1];
  const filename = match[2];
  if (urlsMap[filename]) {
    variableToUrl[varName] = urlsMap[filename];
  }
}

// Remove all import lines for ../assets/students/
studentsTs = studentsTs.replace(/import\s+[a-zA-Z0-9_]+\s+from\s+['"]\.\.\/assets\/students\/[^'"]+['"];?\n?/g, '');

// Replace variable usages (e.g. img: baxodirovaImg,) with string URLs (e.g. img: 'https://...')
Object.keys(variableToUrl).forEach(varName => {
  const url = variableToUrl[varName];
  const regex = new RegExp(`img:\\s*${varName}\\b`, 'g');
  studentsTs = studentsTs.replace(regex, `img: '${url}'`);
});

writeFileSync(join(__dirname, '..', 'src', 'data', 'students.ts'), studentsTs, 'utf-8');
console.log('✅ Updated src/data/students.ts with direct Firebase Storage URLs!');
