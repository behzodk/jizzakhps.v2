export interface Student {
  id: string;
  name: string;
  note: string;
  meta: string;
  country: string;
  img: string | null;
  featured?: boolean;
}

export const students: Student[] = [
  {
    "id": "madina-baxodirova-3",
    "name": "Baxodirova Madina",
    "note": "Colorado State University (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Biochemistry.",
    "meta": "2023",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FBaxodirovaMadina.png?alt=media&token=335ebfb1-e46e-4910-bde1-a5a3c53111d1"
  },
  {
    "id": "dilroza-jumanova-4",
    "name": "Jumanova Dilro'za",
    "note": "University of Pennsylvania (USA, Top 100) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Biochemistry.",
    "meta": "2023",
    "country": "USA",
    "featured": true,
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FJumanovaDilro'za.png?alt=media&token=b40cdde8-7f78-40ae-892b-eb2e4f887261"
  },
  {
    "id": "shaxlo-murodova-5",
    "name": "Murodova Shaxlo",
    "note": "University of Glasgow (UK, Top 100) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Finance and Economics.",
    "meta": "2023",
    "country": "UK",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FMurodovaShaxlo.png?alt=media&token=4ee1a282-a23c-4cc3-bfca-8a155a1dabd7"
  },
  {
    "id": "bahtiyor-muxtorov-6",
    "name": "Muxtorov Bahtiyor",
    "note": "Semyung University (South Korea) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Hotel Management.",
    "meta": "2023",
    "country": "South Korea",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FMuxtorovBahtiyor.png?alt=media&token=164670ed-af94-4d67-b008-c5eab95a64ba"
  },
  {
    "id": "asror-oralov-7",
    "name": "O'ralov Asror",
    "note": "Arizona State University (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Mechanical Engineering.",
    "meta": "2023",
    "country": "USA",
    "featured": true,
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FO'rolovAsror.png?alt=media&token=12cf8ae6-7ef5-4217-b8ce-5fdbafa7ac75"
  },
  {
    "id": "uygun-polatov-8",
    "name": "Po'latov Uyg'un",
    "note": "Colorado State University (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Mechanical Engineering.",
    "meta": "2023",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FPo'latovUyg'un.png?alt=media&token=6d8999c6-a350-48e8-ad0f-c98787a93846"
  },
  {
    "id": "jasurbek-temurbekov-9",
    "name": "Temurbekov Jasurbek",
    "note": "University of Bristol (UK, Top 50) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Mechanical Engineering.",
    "meta": "2023",
    "country": "UK",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FTemurbekovJasurbek.png?alt=media&token=c1c727aa-8e13-45d7-b6ef-b60d9c0c0046"
  },
  {
    "id": "nozimbek-turgunboyev-10",
    "name": "Turg'unboyev Nozimbek",
    "note": "University of Debrecen (Hungary, Top 500) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Economics & Data Science.",
    "meta": "2023",
    "country": "Hungary",
    "featured": true,
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FTur'gunboyevNozimbek.png?alt=media&token=2bc6ad72-ece5-4c81-b0c6-10261a3d16b0"
  },
  {
    "id": "samandar-xolmominov-11",
    "name": "Xolmo'minov Samandar",
    "note": "Arizona State University (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Industrial Management.",
    "meta": "2023",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FXolmo'minovSamandar.png?alt=media&token=c6da5a57-5db2-41a6-9ccc-46c88ef25b27"
  },
  {
    "id": "xumoyun-abulqosimov-14",
    "name": "Abulqosimov Xumoyun",
    "note": "Arizona State University (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Cyber Security.",
    "meta": "2023",
    "country": "USA",
    "featured": true,
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAbulqosimovXumoyun.png?alt=media&token=51ce9be3-5ba0-44b5-8543-76ce6690c15b"
  },
  {
    "id": "ozodbek-axmedov-15",
    "name": "Axmedov Ozodbek",
    "note": "Sejong University (South Korea, Top 500) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Health Administration.",
    "meta": "2023",
    "country": "South Korea",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAxmedovOzodbek.png?alt=media&token=018914fb-d319-4ed8-853c-e027b6c5fde0"
  },
  {
    "id": "behruzjon-meliboyev-16",
    "name": "Meliboyev Behruzjon",
    "note": "University of Minnesota Twin Cities (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Pedagogy.",
    "meta": "2023",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FMeliboyevBehruzjon.png?alt=media&token=80a06d97-6457-4240-a9d1-cb38093fcbc1"
  },
  {
    "id": "mushtariy-muxiddinova-18",
    "name": "Muxiddinova Mushtariy",
    "note": "University of Glasgow (UK, Top 100) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Biochemistry.",
    "meta": "2023",
    "country": "UK",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FMuxiddinovaMushtariy.png?alt=media&token=0bebafed-d861-4492-92f0-811676a328e3"
  },
  {
    "id": "nurbek-osarov-20",
    "name": "O'sarov Nurbek",
    "note": "University of Minnesota Twin Cities (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Mechanical Engineering.",
    "meta": "2023",
    "country": "USA",
    "featured": true,
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FO'sarovNurbek.png?alt=media&token=73d53297-e84e-4278-a5cd-8125d5691cfd"
  },
  {
    "id": "olimjon-uktamov-23",
    "name": "Uktamov Olimjon",
    "note": "University of Birmingham (UK, Top 100) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Law.",
    "meta": "2023",
    "country": "UK",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FUktamovOlimjon.png?alt=media&token=585146cb-604a-4fa5-9324-102cd50af450"
  },
  {
    "id": "otabek-abdukarimov-24",
    "name": "Abdukarimov Otabek",
    "note": "King Fahd University of Petroleum and Minerals (Saudi Arabia, Top 100) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Computer Science.",
    "meta": "2024",
    "country": "Saudi Arabia",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAbdukarimovOtabek.png?alt=media&token=d46acaff-b041-48f2-8719-e3e7ad056833"
  },
  {
    "id": "ahrorbek-berdiyorov-26",
    "name": "Berdiyorov Ahrorbek",
    "note": "University of Minnesota Twin Cities (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Mechanical Engineering.",
    "meta": "2024",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FBerdiyorovAhrorbek.png?alt=media&token=d0fe8bd9-13c2-4d30-98f2-a41fae3511dc"
  },
  {
    "id": "behzod-musurmonqulov-31",
    "name": "Musurmonqulov Behzod",
    "note": "University of Birmingham (UK, Top 100) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Software Engineering.",
    "meta": "2024",
    "country": "UK",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FMusurmonqulovBehzod.png?alt=media&token=1ff25ec2-d078-47f2-8af8-7a00cbbb8dba"
  },
  {
    "id": "jaxongir-orziqulov-34",
    "name": "Orziqulov Jaxongir",
    "note": "Istanbul Technical University (Turkey, Top 500) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Aerospace Engineering.",
    "meta": "2024",
    "country": "Turkey",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FOrziqulovJaxongir.png?alt=media&token=200daf67-5661-47cf-8e40-6f1664a3bd7d"
  },
  {
    "id": "ulugbek-sherqulov-35",
    "name": "Sherqulov Ulug'bek",
    "note": "Arizona State University (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Finance and Economics.",
    "meta": "2024",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FSherqulovUlug'bek.png?alt=media&token=476b3ea3-9d60-4e67-97a1-5ce133beda42"
  },
  {
    "id": "rahimjon-chuliyev-37",
    "name": "Chuliyev Rahimjon",
    "note": "Hanyang University (South Korea, Top 500) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Economics & Data Science.",
    "meta": "2024",
    "country": "South Korea",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FChuliyevRahimjon.png?alt=media&token=5112a97f-c5b2-4f3a-a993-ed1cdb5dcde5"
  },
  {
    "id": "javohir-erkaboyev-39",
    "name": "Erkaboyev Javohir",
    "note": "Arizona State University (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Chemical & Material Engineering.",
    "meta": "2024",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FErkaboyevJavohir.png?alt=media&token=808386ab-9bc3-4092-9fdf-14d3f3d9e10e"
  },
  {
    "id": "shoxjaxon-ilhomov-41",
    "name": "Ilhomov Shoxjaxon",
    "note": "Penn State University (USA, Top 500) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Chemical & Material Engineering.",
    "meta": "2024",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FIlhomovShoxjaxon.png?alt=media&token=1671d756-b29b-41da-89fc-8421c84493e2"
  },
  {
    "id": "azizjon-ilxomov-42",
    "name": "Ilxomov Azizjon",
    "note": "University of Glasgow (UK) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2024",
    "country": "UK",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FIlxomovAzizjon.png?alt=media&token=a0135940-1148-41da-9b21-2c4112a158be"
  },
  {
    "id": "hasan-nematov-43",
    "name": "Ne'matov Hasan",
    "note": "Gyor University (Hungary) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Chemical & Material Engineering.",
    "meta": "2024",
    "country": "Hungary",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FNe'matovHasan.png?alt=media&token=7b360624-2b1a-48f2-a8e8-31d655b865a9"
  },
  {
    "id": "abbos-toshpolatov-45",
    "name": "Toshpo'latov Abbos",
    "note": "University of Debrecen (Hungary) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: International Relations.",
    "meta": "2024",
    "country": "Hungary",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FToshpo'latovAbbos.png?alt=media&token=8604794c-1c41-4e2b-85cc-462ea6c9e723"
  },
  {
    "id": "dovud-abduqodirov-47",
    "name": "Abduqodirov Dovud",
    "note": "Penn State University (USA) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Cybersecurity & Software Engineering.",
    "meta": "2025",
    "country": "USA",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAbduqodirovVohid.jpg?alt=media&token=9cc8bad3-2660-4121-89bf-e394b521fc3d"
  },
  {
    "id": "umida-ergasheva-50",
    "name": "Ergasheva Umida",
    "note": "University of Bristol (UK, Top 51) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Data Science.",
    "meta": "2025",
    "country": "UK",
    "featured": true,
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FErgashevaUmida.jpg?alt=media&token=d693d16b-115f-4208-8f44-69a07e2adc5d"
  },
  {
    "id": "javohir-uralov-52",
    "name": "Uralov Javohir",
    "note": "University of Bristol (UK, Top 51) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Computer Science.",
    "meta": "2025",
    "country": "UK",
    "img": null
  },
  {
    "id": "shukurjon-ozodov-53",
    "name": "Ozodov Shukurjon",
    "note": "University of Debrecen (Hungary) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2025",
    "country": "Hungary",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FOzodovShukurjon.jpg?alt=media&token=ab694b63-d2e8-48bd-a70b-da3836c77e4c"
  },
  {
    "id": "behroz-toyirov-58",
    "name": "To'yirov Behro'z",
    "note": "Purdue University (USA, Top 88) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Data Science.",
    "meta": "2025",
    "country": "USA",
    "img": null
  },
  {
    "id": "samandar-mominov-64",
    "name": "Mo'minov Samandar",
    "note": "Szegad University (Hungary) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Agriculture and Business.",
    "meta": "2025",
    "country": "Hungary",
    "img": null
  },
  {
    "id": "behzod-shoraimov-65",
    "name": "Shoraimov Behzod",
    "note": "University of Debrecen (Hungary) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2025",
    "country": "Hungary",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FShoraimovBehzod.jpg?alt=media&token=fc3aea79-b21c-460b-9f14-688965078ee3"
  },
  {
    "id": "gulshan-tursunboyeva-67",
    "name": "Tursunboyeva Gulshan",
    "note": "Hanyang University (South Korea, Top 251) ga muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Computer Science.",
    "meta": "2025",
    "country": "South Korea",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FTursunboyevaGulshan.jpg?alt=media&token=5c38f446-9d46-428c-8aeb-713ed5070e4e"
  },
  {
    "id": "abdukarim-hamidov-69",
    "name": "Hamidov Abdukarim",
    "note": "University of Birmingham (UK, Top 76) ga muvaffaqiyatli qabul bo'lindi. Winner of \"El-Yurt Umidi\" Foundation Scholarship. Mutaxassislik: Computer Science / Cybersecurity.",
    "meta": "2025",
    "country": "UK",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FXamidovAbdukarim.jpg?alt=media&token=18439019-c417-414b-82eb-a392c724a7d2"
  },
  {
    "id": "parizoda-ablaqulova-1",
    "name": "Ablaqulova Parizoda",
    "note": "Toshkent tibbiyot akademiyasiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Medicine.",
    "meta": "2023",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAblaqulovaParizoda.png?alt=media&token=47fee67f-44b9-49e8-9d3f-81c5aafeb666"
  },
  {
    "id": "anora-alimqulova-2",
    "name": "Alimqulova Anora",
    "note": "O'zbekiston Jurnalistika va ommaviy kommunikatsiyalar Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Journalism and Communications.",
    "meta": "2023",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAlimqulovaAnora.png?alt=media&token=508502ec-ed9d-4b29-92dc-3f32d64ea9ea"
  },
  {
    "id": "marjona-abdulxakimova-12",
    "name": "Abdulxakimova Marjona",
    "note": "Toshkent davlat Yuridik Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Law.",
    "meta": "2023",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAbdulxakimovaMarjona.png?alt=media&token=cfd7d543-67f8-47a5-8a93-c7595eede607"
  },
  {
    "id": "doniyor-abduxakimov-13",
    "name": "Abduxakimov Doniyor",
    "note": "Toshkent Moliya institutiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Economics & Data Science.",
    "meta": "2023",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAbdulxakimovDoniyor.png?alt=media&token=23f6cb25-67e4-43b6-8632-b39f6a7f25cb"
  },
  {
    "id": "elbek-mirzamahmudov-17",
    "name": "Mirzamahmudov Elbek",
    "note": "Toshkent davlat Iqtisodiyot Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: International Relations.",
    "meta": "2023",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FMirzamahmudovElbek.png?alt=media&token=e912750f-40d4-4e7e-9397-7c54d3a4a6eb"
  },
  {
    "id": "samariddin-naxalboyev-19",
    "name": "Naxalboyev Samariddin",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2023",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FNaxalboyevSamariddin.png?alt=media&token=34d52952-2de6-40cd-b224-ac21c5bc41b4"
  },
  {
    "id": "rustam-otkirov-21",
    "name": "O'tkirov Rustam",
    "note": "Jahon iqtisodiyoti va diplomatiya universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: International Relations.",
    "meta": "2023",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FO'tkirovRustam.png?alt=media&token=c02c6ad1-1546-4b41-a200-2901a1caaa3b"
  },
  {
    "id": "saidrasul-oltinbekov-22",
    "name": "Oltinbekov Saidrasul",
    "note": "Toshkent Moliya institutiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Finance and Economics.",
    "meta": "2023",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FOltinbekovSaidrasul.png?alt=media&token=ee90b929-3e5d-4865-8221-8f829bce9097"
  },
  {
    "id": "fotima-alaxanova-25",
    "name": "Alaxanova Fotima",
    "note": "Toshkent tibbiyot akademiyasiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Medicine.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAlaxanovaFotima.png?alt=media&token=7454453d-1a56-4951-87be-a0430b874a67"
  },
  {
    "id": "azizbek-boltayev-27",
    "name": "Boltayev Azizbek",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FBoltayevAzizbek.png?alt=media&token=efc5716d-f649-49bd-986d-3b2d6edac261"
  },
  {
    "id": "farruxbek-davronov-28",
    "name": "Davronov Farruxbek",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Economics.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FDavronovFarruxbek.png?alt=media&token=656a4f07-ab45-4baa-901d-8761faf46805"
  },
  {
    "id": "komil-hasanov-29",
    "name": "Hasanov Komil",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FHasanovKomil.png?alt=media&token=d4572412-a63a-40c1-a335-4e58f032799f"
  },
  {
    "id": "sherzod-mardiyev-30",
    "name": "Mardiyev Sherzod",
    "note": "Jahon iqtisodiyoti va diplomatiya universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: International Relations.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FMardiyevSherzod.png?alt=media&token=ab8c1293-bca4-4fdb-8485-ddfce7cc99f5"
  },
  {
    "id": "durdona-nuriddinova-32",
    "name": "Nuriddinova Durdona",
    "note": "Jahon iqtisodiyoti va diplomatiya universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: International Relations.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FNuriddinovaDurdona.png?alt=media&token=4efcd0ec-56c6-4523-8157-9e183d993959"
  },
  {
    "id": "ozodbek-oralov-33",
    "name": "O'ralov Ozodbek",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Finance and Economics.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FO'ralovOzodbek.png?alt=media&token=8e68aed4-fdce-43a6-85d5-47eced0b594f"
  },
  {
    "id": "masuma-abdusamatova-36",
    "name": "Abdusamatova Ma'suma",
    "note": "Toshkent davlat Yuridik Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Law.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAbdusamatovaMa'suma.png?alt=media&token=7fc2b9de-6ac0-4fd0-91fb-f5ce684edd6a"
  },
  {
    "id": "behruzjon-ergashev-38",
    "name": "Ergashev Behruzjon",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Cyber Security.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FErgashevBehruzjon.png?alt=media&token=c88e616a-ea59-4d1d-8a21-3ee1569ddfac"
  },
  {
    "id": "xushnudbek-ibodullayev-40",
    "name": "Ibodullayev Xushnudbek",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FIbodullayevXushnudbek.png?alt=media&token=e307661e-a6bd-437d-99db-6f8e73b762e6"
  },
  {
    "id": "nilufar-sattarova-44",
    "name": "Sattarova Nilufar",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Economics.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FSattorovaNilufar.png?alt=media&token=f3499a79-d17c-4e5e-af5d-71a584d0990a"
  },
  {
    "id": "abbosjon-xolbutayev-46",
    "name": "Xolbo'tayev Abbosjon",
    "note": "Jahon iqtisodiyoti va diplomatiya universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Chemical & Material Engineering.",
    "meta": "2024",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FXolbo'tayevAbbosjon.png?alt=media&token=bb6fcea1-9232-4eef-85f8-a053980c21b0"
  },
  {
    "id": "diyorbek-abduvohidov-48",
    "name": "Abduvohidov Diyorbek",
    "note": "Jahon iqtisodiyoti va diplomatiya universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: International Economic Relations.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAbduvohidovDiyorbek.jpg?alt=media&token=96777049-9bd3-470e-9827-55d2c8c341c1"
  },
  {
    "id": "nodir-allayorov-49",
    "name": "Allayorov Nodir",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Finance.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAllayorovNodir.jpg?alt=media&token=2e37ad45-91aa-41f5-b9a3-8f0a8854de3e"
  },
  {
    "id": "zohidjon-nasimov-51",
    "name": "Nasimov Zohidjon",
    "note": "Toshkent shahridagi Westminster xalqaro universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Business and Economics.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FNasimovZohidjon.jpg?alt=media&token=4ffc6e4c-b72c-46c3-b789-e5b550bd073c"
  },
  {
    "id": "azizbek-sanaqulov-54",
    "name": "Sanaqulov Azizbek",
    "note": "Toshkent shahridagi Westminster xalqaro universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Business and Economics.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FSanaqulovAzizbek.jpg?alt=media&token=703f7414-acad-4d13-878d-1e6dad7ca1e1"
  },
  {
    "id": "elbek-sarimsoqov-55",
    "name": "Sarimsoqov Elbek",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FSarimsoqovElbek.jpg?alt=media&token=842f3740-d4dd-4a3b-aca3-6be2332b0555"
  },
  {
    "id": "xushnozabonu-solieva-56",
    "name": "Solieva Xushnozabonu",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Chemical Engineering.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FSoliyevaXushnozabonu.jpg?alt=media&token=126a7fb3-e19f-43be-adac-8193d4b338c0"
  },
  {
    "id": "muhammad-suyunov-57",
    "name": "Suyunov Muhammad",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Software Engineering.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FSuyunovMuxammad.jpg?alt=media&token=21d5bb43-243d-400d-b74c-d34165d58212"
  },
  {
    "id": "ashrafjon-abduganiyev-59",
    "name": "Abdug'aniyev Ashrafjon",
    "note": "Toshkent shahridagi Westminster xalqaro universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Economics and Business.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FAbdug'aniyevAshrafjon.jpg?alt=media&token=6f61136e-ee3c-4025-8493-0d2122790f95"
  },
  {
    "id": "jamshidbek-berdiyorov-60",
    "name": "Berdiyorov Jamshidbek",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Chemical Engineering.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FBerdiyorovJamshidbek.jpg?alt=media&token=b5723ec4-44e8-4c33-8883-971d0118709f"
  },
  {
    "id": "shahriyor-dongiboyev-61",
    "name": "Do'ng'iboyev Shahriyor",
    "note": "Toshkent shahridagi Westminster xalqaro universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Computer Science.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FDo'ngiboyevShaxriyor.jpg?alt=media&token=62089e32-39f9-40c3-b437-4acce2bd9354"
  },
  {
    "id": "dostonjon-ergashev-62",
    "name": "Ergashev Dostonjon",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Mechanical Engineering.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FErgashevDostonjon.jpg?alt=media&token=c6d311b7-70ea-45da-9123-ad488e026362"
  },
  {
    "id": "dilnavoz-ibragimova-63",
    "name": "Ibragimova Dilnavoz",
    "note": "Toshkent davlat tibbiyot universiteti Chirchiq filialiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Medicine.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FIbragimovaDilnavoz.jpg?alt=media&token=339d373d-bfc1-43e9-91fa-18c328a06de1"
  },
  {
    "id": "mahbuba-turatova-66",
    "name": "Turatova Mahbuba",
    "note": "Jahon iqtisodiyoti va diplomatiya universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: International Economic Relations.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FTuratovaMaxbuba.jpg?alt=media&token=bf183a60-3b9d-4f63-bcb3-8e1feb105074"
  },
  {
    "id": "durbek-tursunov-68",
    "name": "Tursunov Durbek",
    "note": "Jahon iqtisodiyoti va diplomatiya universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: International Relations.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FTursunovDurbek.jpg?alt=media&token=a3384ed4-3306-403a-9eac-1968c541c1d0"
  },
  {
    "id": "novkarbek-xolmuminov-70",
    "name": "Xolmuminov Novkarbek",
    "note": "Yangi O'zbekiston Universitetiga (Uzbekistan) muvaffaqiyatli qabul bo'lindi. Mutaxassislik: Computer Science / Cybersecurity.",
    "meta": "2025",
    "country": "Uzbekistan",
    "img": "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/students%2FXolmo'minovNovkarbek.jpg?alt=media&token=8473601c-c153-4e74-af33-84c803895a58"
  }
];
