const mongoose = require('mongoose');
const Service = require('./models/Service');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB ulanishi muvaffaqiyatli');
    
    const services = [
      {
        name: 'Stomatologiya',
        description: 'Bizning stomatologiya bo\'limimizda eng zamonaviy texnologiyalar va tajribali shifokorlar yordamida yuqori sifatli xizmatlar ko\'rsatiladi. Biz tish muammolarining har xil turini davolash va oldini olish uchun keng qamrovli xizmatlarni taklif etamiz.',
        advantages: ['Eng yaxshi texnologiyalar', 'Tajribali shifokorlar', 'Qulay muhit', 'Steril va toza muhit', 'Yuqori sifatli xizmatlar'],
        pricing: [
          { service: 'Tish implantatsiyasi', price: '$500' },
          { service: 'Plomba', price: '$150' },
          { service: 'Tish tozalash', price: '$100' },
          { service: 'Tish rengen', price: '$50' },
          { service: 'Tish oqartirish', price: '$200' }
        ],
        image: 'http://localhost:6060/images/dental.jpg'
      },
      {
        name: 'Ko`z doktori',
        description: 'Ko\'z shifokorlarimiz ko\'z kasalliklarining diagnostikasi va davolashida katta tajribaga ega. Biz zamonaviy asbob-uskunalar va metodlarni qo\'llab, ko\'z sog\'lig\'ingizni saqlash va yaxshilashga yordam beramiz.',
        advantages: ['Zamonaviy diagnostika', 'Tajribali shifokorlar', 'Qulay muhit', 'To\'liq ko\'z tekshiruvlari', 'Ko\'z kasalliklarini samarali davolash'],
        pricing: [
          { service: 'Ko\'z tekshiruvi', price: '$50' },
          { service: 'Ko\'z lazer operatsiyasi', price: '$500' },
          { service: 'Ko\'z linzalari', price: '$100' },
          { service: 'Ko\'z ichidagi bosim o\'lchash', price: '$30' },
          { service: 'Ko\'z dori-darmonlari', price: '$25' }
        ],
        image: 'http://localhost:6060/images/eye.jpg'
      },
      {
        name: 'Ginekologiya',
        description: 'Ginekologiya bo\'limimiz ayollar salomatligi bilan bog\'liq barcha masalalarni ko\'rib chiqadi. Biz ayollarning sog\'lig\'ini yaxshilash va saqlash uchun keng qamrovli xizmatlar ko\'rsatamiz.',
        advantages: ['Zamonaviy diagnostika', 'Tajribali shifokorlar', 'Qulay muhit', 'Ayollarga maxsus xizmatlar', 'Yuqori sifatli xizmatlar'],
        pricing: [
          { service: 'Ginekologik tekshiruv', price: '$70' },
          { service: 'Ultratovush tekshiruvi', price: '$150' },
          { service: 'Homiladorlik nazorati', price: '$100' },
          { service: 'Ginekologik operatsiyalar', price: '$500' },
          { service: 'Tahlillar', price: '$50' }
        ],
        image: 'http://localhost:6060/images/gynecology.jpg'
      },
      {
        name: 'Kardiologiya',
        description: 'Kardiologiya bo\'limimiz yurak va qon-tomir kasalliklarining zamonaviy diagnostikasi va davolash usullarini qo\'llaydi. Biz yurak sog\'lig\'ingizni saqlash va yaxshilash uchun keng qamrovli xizmatlar ko\'rsatamiz.',
        advantages: ['Zamonaviy diagnostika', 'Tajribali shifokorlar', 'Qulay muhit', 'Yuqori sifatli xizmatlar', 'Yurak kasalliklarini samarali davolash'],
        pricing: [
          { service: 'EKG', price: '$50' },
          { service: 'Yurak UZI', price: '$100' },
          { service: 'Yurak MRI', price: '$300' },
          { service: 'Yurak operatsiyalari', price: '$5000' },
          { service: 'Yurak dorilari', price: '$50' }
        ],
        image: 'http://localhost:6060/images/cardiology.jpg'
      },
      {
        name: 'Ortopediya',
        description: 'Ortopediya bo\'limimiz suyak, mushak va bo\'g\'im kasalliklarini davolash va oldini olishga ixtisoslashgan. Biz bemorlarimizga eng yaxshi yordamni ko\'rsatish uchun zamonaviy usullar va texnologiyalarni qo\'llaymiz.',
        advantages: ['Eng yaxshi texnologiyalar', 'Tajribali shifokorlar', 'Qulay muhit', 'Yuqori sifatli xizmatlar', 'Reabilitatsiya xizmatlari'],
        pricing: [
          { service: 'Suyak rengen', price: '$80' },
          { service: 'Ortopedik operatsiyalar', price: '$3000' },
          { service: 'Fizioterapiya', price: '$50' },
          { service: 'Ortopedik maslahat', price: '$70' },
          { service: 'Ortopedik asbob-uskunalar', price: '$200' }
        ],
        image: 'http://localhost:6060/images/orthopedics.jpg'
      },
      {
        name: 'Gastroenterologiya',
        description: 'Gastroenterologiya bo\'limimiz oshqozon-ichak kasalliklarini diagnostika qilish va davolash bilan shug\'ullanadi. Bizning maqsadimiz bemorlarimizning oshqozon-ichak sog\'lig\'ini yaxshilashdir.',
        advantages: ['Zamonaviy diagnostika', 'Tajribali shifokorlar', 'Qulay muhit', 'Yuqori sifatli xizmatlar', 'Oshqozon-ichak kasalliklarini samarali davolash'],
        pricing: [
          { service: 'Gastroskopiya', price: '$200' },
          { service: 'Kolonoskopiya', price: '$300' },
          { service: 'Ultratovush tekshiruvi', price: '$150' },
          { service: 'Oshqozon-ichak dorilari', price: '$50' },
          { service: 'Dietolog maslahat', price: '$100' }
        ],
        image: 'http://localhost:6060/images/gastroenterology.jpg'
      },
      {
        name: 'Nevrologiya',
        description: 'Nevrologiya bo\'limimiz asab tizimi kasalliklarini diagnostika qilish va davolash bilan shug\'ullanadi. Bizning tajribali shifokorlarimiz zamonaviy texnologiyalar yordamida eng yaxshi yordamni ko\'rsatadi.',
        advantages: ['Zamonaviy diagnostika', 'Tajribali shifokorlar', 'Qulay muhit', 'Yuqori sifatli xizmatlar', 'Asab tizimi kasalliklarini samarali davolash'],
        pricing: [
          { service: 'Nevrologik tekshiruv', price: '$100' },
          { service: 'MRI', price: '$400' },
          { service: 'Nevrologik maslahat', price: '$80' },
          { service: 'Asab tizimi dorilari', price: '$50' },
          { service: 'Fizioterapiya', price: '$60' }
        ],
        image: 'http://localhost:6060/images/neurology.jpg'
      }
    ];

    await Service.insertMany(services);
    console.log('Xizmatlar muvaffaqiyatli qo\'shildi');
    mongoose.disconnect();
  })
  .catch(err => console.log(err));
