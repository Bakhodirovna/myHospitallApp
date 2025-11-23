const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    availableDays: { type: String, required: true },
    workingHours: { type: String, required: true },
    imageUrl: { type: String, required: true },
    education: [{ year: Number, degree: String, institute: String }],
    experience: [{ year: String, department: String, position: String, hospital: String }],
    personalInfo: {
        phone: String,
        office: String,
        email: String,
        social: {
            facebook: String,
            linkedin: String,
            instagram: String,
            twitter: String
        }
    }
});


const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
