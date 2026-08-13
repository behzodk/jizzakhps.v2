export interface Post {
  id: string;
  badge: string;
  date: string;
  title: string;
  img: string | null;
  images?: string[];
  body: string;
  views?: string;
}

const cisImg = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2F2026-05-25_17.04.13.jpg?alt=media&token=e12482ec-437b-49cf-9dd4-4432136d0055";
const runforlifeImg = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Frunforlife.jpg?alt=media&token=84404290-a366-49f5-b7c8-4e5c2721a076";
const ms1 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fms1.jpg?alt=media&token=6aa99818-ce22-43c1-a94f-0498f67a44ce";
const ms2 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fms2.jpg?alt=media&token=6fd4e9d4-3174-498f-a4bf-a56315ef2f5d";
const ms3 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fms3.jpg?alt=media&token=d8cd271e-a397-4b1d-a483-38a8941d42d6";
const ms4 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fms4.jpg?alt=media&token=90984cde-8296-4c48-839e-63627d37197d";
const immerse1 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fimmerse1.jpg?alt=media&token=1e374283-fed8-496d-bc4d-484a604f53be";
const immerse2 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fimmerse2.jpg?alt=media&token=7efadc7b-233a-4d61-b185-2b7483be3306";
const immerse3 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fimmerse3.jpg?alt=media&token=ffaed8f7-7855-44bf-b54e-d74f630c7059";
const immerse4 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fimmerse4.jpg?alt=media&token=0ac6dfea-4dc5-4413-a6f8-3dc0aec372e6";
const immerse5 = "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/posts%2Fimmerse5.jpg?alt=media&token=1c32c7a6-b473-4d5d-b3bf-596af29fa847";

export const posts: Post[] = [
  {
    id: 'cis-akkreditatsiya-2026',
    badge: 'Akkreditatsiya',
    date: 'May 25, 2026',
    title: "Xalqaro akkreditatsiyadan o'tgan Prezident maktablari safi kengaymoqda!",
    img: cisImg,
    views: '128',
    body: `Avvalroq, Toshkent, Nukus, Xiva, Namangan, Farg'ona, Andijon, Nurafshon va Buxoro shaharlaridagi Prezident maktablari Xalqaro maktablar kengashi (CIS) a'zoligiga qabul qilingan edi. Endi esa bu ro'yxatga Jizzax shahridagi Prezident maktabi ham qo'shildi!

Bu a'zolik nafaqat ta'lim muassasasining xalqaro miqyosda tan olinganidan darak beradi, balki o'quvchilarimizga chet eldagi TOP universitetlarda to'liq grant yutish imkoniyatini yanada kengaytiradi.`,
  },
  {
    id: 'run-for-life-jizzakh-2026',
    badge: 'Marafon',
    date: 'June 2, 2026',
    title: 'RUN FOR LIFE – JIZZAKH 2026 MARAFONIGA SANOQLI SOATLAR QOLDI!',
    img: runforlifeImg,
    views: '245',
    body: `Ertaga Jizzax ko'chalarida sog'lom turmush tarzi, ezgulik va birdamlik ruhi hukm suradi!

📍 Yig'ilish joyi: Jizzax Prezident maktabi oldi
⏰ Yig'ilish vaqti: 05:00
🚩 Start vaqti: 06:00

Bu nafaqat marafon, balki o'zingizni sinovdan o'tkazish, yangi marralarni zabt etish va xayrli maqsad yo'lida birlashish imkoniyatidir.

Har bir qadam — ezgulik sari qadam! ❤️

Barchangizni start chizig'ida kutamiz! Tayyormisiz? 👟🔥`,
  },
  {
    id: 'immerse-education-2026',
    badge: 'Hamkorlik',
    date: 'May 25, 2026',
    title: "Jizzax shahridagi Prezident maktabi o'quvchilari Immerse Education bilan onlayn uchrashuvda ishtirok etishdi",
    img: immerse1,
    images: [immerse1, immerse2, immerse3, immerse4, immerse5],
    views: '189',
    body: `Jizzax shahridagi Prezident maktabi o'quvchilari nufuzli xalqaro ta'lim platformasi — Immerse Education tomonidan tashkil etilgan onlayn uchrashuvda qatnashdilar.

Uchrashuv davomida o'quvchilarga Immerse Education faoliyati, uning Summer School (yozgi ta'lim dasturi) va Online Research Programme (onlayn tadqiqot dasturi) kabi yo'nalishlari haqida batafsil ma'lumot berildi.

Shuningdek, uchrashuvda Immerse Education'ning maktablararo hamkorlik bo'yicha menejeri bilan suhbat o'tkazildi. O'quvchilar o'zlarini qiziqtirgan savollariga javob olishdi va xorijiy ta'lim dasturlari haqida yanada kengroq tasavvurga ega bo'lishdi.

Uchrashuv o'quvchilarning global ta'lim imkoniyatlari haqidagi bilimlarini kengaytirib, Prezident maktabi va xalqaro ta'lim tashkilotlari o'rtasidagi hamkorlikni mustahkamlashga xizmat qildi.`,
  },
  {
    id: 'mustaqillik-soati-2026',
    badge: 'Tadbir',
    date: 'May 20, 2026',
    title: "\"Mustaqillik soati\" — yoshlarda Vatanga sadoqat ruhini mustahkamlash yo'lida",
    img: ms1,
    images: [ms1, ms2, ms3, ms4],
    views: '164',
    body: `O'zbekiston Respublikasi Prezidentining 2026-yil 1-apreldagi "O'zbekiston Respublikasi davlat mustaqilligining 35 yilligini keng nishonlashga tayyorgarlik ko'rish va uni o'tkazish to'g'risida"gi PQ-120-son qarori ijrosini ta'minlash maqsadida oliy ta'lim muassasalarida "Mustaqillik soati" o'quv jarayonlarini tashkil etish vazifasi belgilangan.

Mazkur topshiriqlar ijrosini samarali tashkil etish maqsadida Respublika Ma'naviyat va ma'rifat markazi Jizzax viloyati bo'limi hamda "Ma'rifat" targ'ibotchilar jamiyati hamkorligida joriy yilning 20-may kunidan boshlab A.Qodiriy nomidagi Jizzax Davlat Pedagogika Universitetida "Mustaqillik soati" o'quv jarayonlari yuqori saviyada tashkil etilmoqda.

Dars mashg'ulotlari Xaydarova Dilorom Akramovna tomonidan olib borilib, yoshlarda Vatanga sadoqat, milliy qadriyatlarga hurmat tuyg'usini mustahkamlashga xizmat qilmoqda.`,
  },
  {
    id: 'loyihalar-2026-04-10',
    badge: 'Tadbir',
    date: 'April 10, 2026',
    title: "Ijodiy yondashuv va o'quvchilarning jamoaviy loyihalari",
    img: null,
    views: '96',
    body: "Hamkorlik, liderlik va muammolarni yechish ko'nikmalarini rivojlantirish bo'yicha o'quvchilar tomonidan taqdim etilgan eng saralangan loyihalar va ularning amaliy natijalari.",
  },
  {
    id: 'qabul-2026-04-05',
    badge: "E'lon",
    date: 'April 05, 2026',
    title: "Qabul jarayoni: hujjatlar ro'yxati va muddatlar",
    img: null,
    views: '310',
    body: "Prezident maktabiga ariza topshirish, talab etiladigan hujjatlar to'plami hamda tanlov imtihonlarining barcha bosqichlari haqida batafsil yo'riqnoma.",
  },
];
