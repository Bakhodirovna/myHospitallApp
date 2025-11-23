const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctors');

// Barcha doktorlarni olish
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST so'rovlarini qabul qiluvchi yo'l
router.post('/', async (req, res) => {
  try {
      const newDoctor = new Doctor({
          name: req.body.name,
          specialization: req.body.specialization,
          availableDays: req.body.availableDays,
          workingHours: req.body.workingHours,
          imageUrl: req.body.imageUrl
      });
      const savedDoctor = await newDoctor.save();
      res.status(201).json(savedDoctor);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});
// Barcha doktorlarni o'chirish
router.delete('/deleteAll', async (req, res) => {
    try {
      await Doctor.deleteMany({}); // Mongoose kutubxonasidan foydalanib barcha doktorlarni o'chiradi
      res.status(200).send("Barcha doktorlar muvaffaqiyatli o'chirildi");
    } catch (error) {
      res.status(500).send('Xatolik yuz berdi: ' + error.message);
    }
});
// Doktor haqidagi batafsil ma'lumotni olish
router.get('/:id', async (req, res) => {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        return res.status(404).send('Doctor not found');
      }
      res.json(doctor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  



module.exports = router;
