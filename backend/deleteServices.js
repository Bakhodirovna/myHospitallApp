const mongoose = require('mongoose');
const Service = require('./models/Service');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB ulanishi muvaffaqiyatli');

    try {
      await Service.deleteMany({});
      console.log('Barcha xizmatlar muvaffaqiyatli o\'chirildi');
    } catch (err) {
      console.error('Xizmatlarni o\'chirishda xatolik:', err);
    }

    mongoose.disconnect();
  })
  .catch(err => console.log(err));
