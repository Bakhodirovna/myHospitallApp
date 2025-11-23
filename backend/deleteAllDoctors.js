require('dotenv').config();
const mongoose = require('mongoose');
const Doctor = require('./models/doctors'); // 'models/doctors' yo'lini o'zgartirishingiz kerak bo'lishi mumkin

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully!");
    return Doctor.deleteMany({});
  })
  .then(() => {
    console.log("Barcha doktorlar o'chirildi!");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Xatolik yuz berdi: ", err);
    mongoose.disconnect();
  });
