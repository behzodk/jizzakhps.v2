import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const urlsMap = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'students-urls.json'), 'utf-8'));
let studentsTs = readFileSync(join(__dirname, '..', 'src', 'data', 'students.ts'), 'utf-8');

const mapping = {
  jumanovaImg: "JumanovaDilro'za.png",
  oralovAsrorImg: "O'rolovAsror.png",
  polatovImg: "Po'latovUyg'un.png",
  turgunboyevImg: "Tur'gunboyevNozimbek.png",
  xolmominovImg: "Xolmo'minovSamandar.png",
  osarovImg: "O'sarovNurbek.png",
  sherqulovImg: "SherqulovUlug'bek.png",
  nematovImg: "Ne'matovHasan.png",
  toshpolatovImg: "Toshpo'latovAbbos.png",
  otkirovImg: "O'tkirovRustam.png",
  oralovOzodbekImg: "O'ralovOzodbek.png",
  abdusamatovaImg: "AbdusamatovaMa'suma.png",
  xolbutayevImg: "Xolbo'tayevAbbosjon.png",
  abduganiyevImg: "Abdug'aniyevAshrafjon.jpg",
  dongiboyevImg: "Do'ngiboyevShaxriyor.jpg",
  xolmuminovNovkarbekImg: "Xolmo'minovNovkarbek.jpg",
};

Object.keys(mapping).forEach(varName => {
  const filename = mapping[varName];
  const url = urlsMap[filename];
  if (url) {
    const regex = new RegExp(`img:\\s*${varName}\\b`, 'g');
    studentsTs = studentsTs.replace(regex, `img: '${url}'`);
  } else {
    console.error(`URL not found for ${filename}`);
  }
});

writeFileSync(join(__dirname, '..', 'src', 'data', 'students.ts'), studentsTs, 'utf-8');
console.log('✅ Replaced remaining image variables in students.ts!');
