const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  advantages: [String],
  pricing: [{ service: String, price: String }],
  image: String // Rasm uchun yangi maydon
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
