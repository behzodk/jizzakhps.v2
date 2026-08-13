export interface StaffMember {
  id: number;
  name: string;
  role_uz: string;
  role_en: string;
  category: 'leadership' | 'teacher' | 'staff';
  img: string;
  subject?: string;
  email?: string;
  phone?: string;
}

export const staffList: StaffMember[] = [
  // LEADERSHIP (Rahbariyat)
  {
    id: 100,
    name: "Sherzod Jumayev",
    role_uz: "Ijrochi direktor",
    role_en: "Executive Director",
    category: "leadership",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2FSherzod_Jumayev.png?alt=media&token=5abf92ce-59ed-4a7c-b3c8-61d84e16addc",
    email: "prmgzd@piima.uz",
    phone: "(+998) 72-221-59-19"
  },

  {
    id: 102,
    name: "Nouman Khan",
    role_uz: "Akademik direktor",
    role_en: "Academic Director",
    category: "leadership",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F22.jpg?alt=media&token=9ef37b90-9d80-4a57-8abf-fea5eb3bd9ab",
    email: "prmgzd@piima.uz",
    phone: "(+998) 72-221-59-19"
  },
  {
    id: 103,
    name: "Xaydarova Dilorom",
    role_uz: "Ma'naviy - ma'rifiy ishlar bo'yicha direktor o'rinbosari",
    role_en: "Deputy Director for Spiritual and Educational Affairs",
    category: "leadership",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F26.jpg?alt=media&token=5dd210c1-04c7-4b41-a329-2313a8286f83",
    email: "prmgzd@piima.uz",
    phone: "(+998) 72-221-59-19"
  },

  // TEACHERS / PEDAGOGLAR
  {
    id: 1,
    name: "Urinboyeva Shahnoza",
    role_uz: "Zamonaviy yondashuv fani o'qituvchisi",
    role_en: "Global Perspectives Teacher",
    category: "teacher",
    subject: "Global Perspectives",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F1.jpg?alt=media&token=4296e033-36e4-4ad0-883f-852fd27d6dcd"
  },
  {
    id: 2,
    name: "Ismoilov Mirolim",
    role_uz: "Matematika fani o'qituvchisi",
    role_en: "Mathematics Teacher",
    category: "teacher",
    subject: "Mathematics",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F2.jpg?alt=media&token=e9a514e5-19e3-48bb-adf2-f007d2a812cf"
  },
  {
    id: 3,
    name: "Shomuratova Dilshoda",
    role_uz: "Kimyo fani o'qituvchisi",
    role_en: "Chemistry Teacher",
    category: "teacher",
    subject: "Chemistry",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F3.jpg?alt=media&token=67faf04b-51e8-4b22-8a77-c102782f6355"
  },
  {
    id: 7,
    name: "Ergashev Sherzod",
    role_uz: "Matematika fani o'qituvchisi",
    role_en: "Mathematics Teacher",
    category: "teacher",
    subject: "Mathematics",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F7.jpg?alt=media&token=7b0e2749-411c-4c8a-bdd0-855167a92d09"
  },
  {
    id: 8,
    name: "Mo'minov Husan",
    role_uz: "Fizika fani o'qituvchisi",
    role_en: "Physics Teacher",
    category: "teacher",
    subject: "Physics",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F8.jpg?alt=media&token=b9d581a4-8a78-4291-babf-ba17f62e42a1"
  },
  {
    id: 9,
    name: "Lapasov Mirkomil",
    role_uz: "Tarix fani o'qituvchisi",
    role_en: "History Teacher",
    category: "teacher",
    subject: "History",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F9.jpg?alt=media&token=d856a6a7-2a8e-402b-b0bf-51378bff77a0"
  },
  {
    id: 10,
    name: "Yaxshibayeva Nargiza",
    role_uz: "Ingliz tili fani o'qituvchisi",
    role_en: "English Teacher",
    category: "teacher",
    subject: "English",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F10.jpg?alt=media&token=fdc3f02f-c0e4-4311-bfc1-12214b5f6b62"
  },
  {
    id: 11,
    name: "Urazov Komiljon",
    role_uz: "Tarix fani o'qituvchisi",
    role_en: "History Teacher",
    category: "teacher",
    subject: "History",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F11.jpg?alt=media&token=2b7ed883-a379-47bc-86bb-a09e0ae8cd3d"
  },
  {
    id: 12,
    name: "Mamanova Go'zal",
    role_uz: "Biologiya fani o'qituvchisi",
    role_en: "Biology Teacher",
    category: "teacher",
    subject: "Biology",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F12.jpg?alt=media&token=7caf59a1-c81a-4bb8-9685-4749dc7e49d2"
  },
  {
    id: 13,
    name: "Jo'rayev Hasan",
    role_uz: "Tabiiy fanlar fani o'qituvchisi",
    role_en: "Science Teacher",
    category: "teacher",
    subject: "Science",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F13.jpg?alt=media&token=af4ca126-6af4-4173-b719-c479bfbffa6b"
  },
  {
    id: 14,
    name: "Xamroyeva Dilnoza",
    role_uz: "Ona tili va adabiyoti fani o'qituvchisi",
    role_en: "Uzbek Language & Literature Teacher",
    category: "teacher",
    subject: "Uzbek Language",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F14.jpg?alt=media&token=b3469c7f-08aa-4a3c-996a-f3051a7eac1a"
  },
  {
    id: 16,
    name: "Mamiraliyev Akmaljon",
    role_uz: "Kompyuter ta'limi fani o'qituvchisi",
    role_en: "Computer Science Teacher",
    category: "teacher",
    subject: "Computer Science",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F16.jpg?alt=media&token=c959d78a-39e2-4f7d-9dc9-92f481172f6a"
  },
  {
    id: 18,
    name: "Xamudov Mirjalol",
    role_uz: "Jismoniy tarbiya fani o'qituvchisi",
    role_en: "Physical Education Teacher",
    category: "teacher",
    subject: "Physical Education",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F18.jpg?alt=media&token=87d9ec58-d732-4755-be5d-b41f4959f7ce"
  },
  {
    id: 20,
    name: "Raxmatullayeva Nasima",
    role_uz: "Tasviriy san'at fani o'qituvchisi",
    role_en: "Visual Arts Teacher",
    category: "teacher",
    subject: "Art",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F20.jpg?alt=media&token=85867962-0bd2-4bc9-9d1b-333dc2956020"
  },
  {
    id: 21,
    name: "Xasanov Muzaffar",
    role_uz: "Ingliz tili fani o'qituvchisi",
    role_en: "English Teacher",
    category: "teacher",
    subject: "English",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F21.jpg?alt=media&token=e1dde2d1-f78a-4b18-988f-6a9dde5b58ab"
  },
  {
    id: 23,
    name: "Narziqulov Naimjon",
    role_uz: "Musiqa fani o'qituvchisi",
    role_en: "Music Teacher",
    category: "teacher",
    subject: "Music",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F23.jpg?alt=media&token=5bdfd722-12a9-4401-9510-3f50ebc8cdf4"
  },
  {
    id: 24,
    name: "Nasimov Bekzod",
    role_uz: "Informatika fani o'qituvchisi",
    role_en: "Informatics Teacher",
    category: "teacher",
    subject: "Informatics",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F24.jpg?alt=media&token=b601b7ef-4b5a-4643-af22-22cf62ab408c"
  },
  {
    id: 25,
    name: "Abdul Ahad",
    role_uz: "Informatika fani o'qituvchisi",
    role_en: "Informatics Teacher",
    category: "teacher",
    subject: "Informatics",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F25.jpg?alt=media&token=e8c6f0ec-fd3d-4acc-87aa-b70e36670058"
  },
  {
    id: 27,
    name: "Abdug'aniyev Ma'ruf",
    role_uz: "Ona tili va adabiyoti fani o'qituvchisi",
    role_en: "Uzbek Language & Literature Teacher",
    category: "teacher",
    subject: "Uzbek Language",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F27.jpg?alt=media&token=b0944a88-5162-4b6e-9fa8-b1f2b80433cc"
  },
  {
    id: 29,
    name: "Waseem Ahmad",
    role_uz: "Fizika fani o'qituvchisi",
    role_en: "Physics Teacher",
    category: "teacher",
    subject: "Physics",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F29.jpg?alt=media&token=18a0aa40-e66f-4907-906c-eacb22a46d28"
  },
  {
    id: 30,
    name: "Isoqulova Mohinur",
    role_uz: "Biznes asoslari fani o'qituvchisi",
    role_en: "Business Studies Teacher",
    category: "teacher",
    subject: "Business Studies",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F30.jpg?alt=media&token=638233d5-b785-4e4b-bd0e-176aebd2c349"
  },
  {
    id: 31,
    name: "Xamroyeva Dilnoza (2)",
    role_uz: "Ona tili va adabiyoti fani o'qituvchisi",
    role_en: "Uzbek Language & Literature Teacher",
    category: "teacher",
    subject: "Uzbek Language",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F31.jpg?alt=media&token=c2025d53-c070-4b28-b5a3-c351c24da524"
  },
  {
    id: 33,
    name: "Narendra Khaire",
    role_uz: "Kimyo fani o'qituvchisi",
    role_en: "Chemistry Teacher",
    category: "teacher",
    subject: "Chemistry",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F33.jpg?alt=media&token=8396b9cb-c5b5-45e2-ae43-f79175ddf1fd"
  },
  {
    id: 34,
    name: "Rashidova Vazira",
    role_uz: "Fizika fani o'qituvchisi",
    role_en: "Physics Teacher",
    category: "teacher",
    subject: "Physics",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F34.jpg?alt=media&token=2587091d-239d-4d82-9a13-0cad54212835"
  },
  {
    id: 35,
    name: "Abrar Hussain",
    role_uz: "Zamonaviy yondashuv fani o'qituvchisi",
    role_en: "Global Perspectives Teacher",
    category: "teacher",
    subject: "Global Perspectives",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F35.jpg?alt=media&token=ec7dfe3a-443a-439f-a13d-9f3f59f0645d"
  },
  {
    id: 36,
    name: "Shah Zeb",
    role_uz: "Biologiya fani o'qituvchisi",
    role_en: "Biology Teacher",
    category: "teacher",
    subject: "Biology",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F36.jpg?alt=media&token=9db79ee8-06de-4fdb-aa1a-ad88a562317c"
  },
  {
    id: 37,
    name: "Antonio Ezra Nicolo",
    role_uz: "Ingliz tili fani o'qituvchisi",
    role_en: "English Teacher",
    category: "teacher",
    subject: "English",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F37.jpg?alt=media&token=9a647b64-451a-4c1a-a327-5751d108a161"
  },
  {
    id: 38,
    name: "Riezl Magdayo-Torralba",
    role_uz: "Tabiiy fanlar fani o'qituvchisi",
    role_en: "Science Teacher",
    category: "teacher",
    subject: "Science",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2FUrinboyeva_Shahnoza_(3).jpg?alt=media&token=b8b86e24-4b54-47a0-bd55-115678006996"
  },

  // SCHOOL STAFF (Maktab xodimlari)
  {
    id: 19,
    name: "G'oyipov Orif",
    role_uz: "Bino boshqaruvchisi",
    role_en: "Facility Manager",
    category: "staff",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F19.jpg?alt=media&token=caa1d1c1-c04b-4039-a4e2-fae4e5cea99b"
  },
  {
    id: 28,
    name: "Tilabov O'tkir",
    role_uz: "Maktab maslahatchisi",
    role_en: "School Counselor",
    category: "staff",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F28.jpg?alt=media&token=8c8b0b14-1195-4d57-928e-f1cb9caf1091"
  },
  {
    id: 32,
    name: "Egamova Nafisa",
    role_uz: "Maktab psixologi",
    role_en: "School Psychologist",
    category: "staff",
    img: "https://firebasestorage.googleapis.com/v0/b/inreportsystem-54cab.appspot.com/o/staff%2F32.jpg?alt=media&token=205cf5a0-0913-4c21-af05-be37e23cf4d8"
  }
];
