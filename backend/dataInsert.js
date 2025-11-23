require('dotenv').config();
const mongoose = require('mongoose');
const Doctor = require('./models/doctors');  // To'g'ri yo'lni ta'minlang


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully!");
    // Doktorlar ro'yxatini qo'shish
    const doctorsData = [
      {
        name: "Dr. Aliya Zokirova",
        specialization: "Kardiologiya",
        availableDays: "Dushanba-Juma",
        workingHours: "09:00-17:00",
        imageUrl: "http://localhost:6060/images/doc4.jpg",
        education: [
            { year: 2009, degree: "MD Cardiology", institute: "Khorezm Medical Institute" }
        ],
        experience: [
            { year: "2011-2023", department: "Cardiology", position: "Cardiologist", hospital: "Khorezm Heart Center" }
        ],
        personalInfo: {
            phone: "+998901234569",
            office: "+998711234570",
            email: "zokirova@heart.uz",
            social: {
                facebook: "http://facebook.com/aliya",
                linkedin: "http://linkedin.com/in/aliya",
                instagram: "http://instagram.com/aliya",
                twitter: "http://twitter.com/aliya"
            }
        }
    },
    {
        name: "Dr. Bekzod Karimov",
        specialization: "Ortopediya",
        availableDays: "Dushanba-Chorshanba",
        workingHours: "09:00-19:00",
        imageUrl: "http://localhost:6060/images/doc5.jpg",
        education: [
            { year: 2007, degree: "MD Orthopedics", institute: "Fergana Medical Academy" }
        ],
        experience: [
            { year: "2009-2022", department: "Orthopedics", position: "Orthopedist", hospital: "Fergana Orthopedic Hospital" }
        ],
        personalInfo: {
            phone: "+998901234570",
            office: "+998711234571",
            email: "karimov@bones.uz",
            social: {
                facebook: "http://facebook.com/bekzod",
                linkedin: "http://linkedin.com/in/bekzod",
                instagram: "http://instagram.com/bekzod",
                twitter: "http://twitter.com/bekzod"
            }
        }
    },
    {
        name: "Dr. Dilnoza Akramova",
        specialization: "Gastroenterologiya",
        availableDays: "Seshanba-Payshanba",
        workingHours: "10:00-15:00",
        imageUrl: "http://localhost:6060/images/doc6.jpg",
        education: [
            { year: 2008, degree: "MD Gastroenterology", institute: "Nukus Medical Institute" }
        ],
        experience: [
            { year: "2010-2021", department: "Gastroenterology", position: "Gastroenterologist", hospital: "Nukus Digestive Center" }
        ],
        personalInfo: {
            phone: "+998901234571",
            office: "+998711234572",
            email: "akramova@digestive.uz",
            social: {
                facebook: "http://facebook.com/dilnoza",
                linkedin: "http://linkedin.com/in/dilnoza",
                instagram: "http://instagram.com/dilnoza",
                twitter: "http://twitter.com/dilnoza"
            }
        }
    },
    {
        name: "Dr. Jasur Ismoilov",
        specialization: "Nevrologiya",
        availableDays: "Chorshanba-Juma",
        workingHours: "08:00-17:00",
        imageUrl: "http://localhost:6060/images/doc9.jpg",
        education: [
            { year: 2010, degree: "MD Neurology", institute: "Tashkent State Medical University" }
        ],
        experience: [
            { year: "2012-2022", department: "Neurology", position: "Neurologist", hospital: "Tashkent Neurological Center" }
        ],
        personalInfo: {
            phone: "+998901234572",
            office: "+998711234573",
            email: "ismoilov@neuro.uz",
            social: {
                facebook: "http://facebook.com/jasur",
                linkedin: "http://linkedin.com/in/jasur",
                instagram: "http://instagram.com/jasur",
                twitter: "http://twitter.com/jasur"
            }
        }
    },
    {
      name: "Dr. Lola Rashidova",
      specialization: "Umumiy amaliyot",
      availableDays: "Dushanba-Juma",
      workingHours: "09:00-18:00",
      imageUrl: "http://localhost:6060/images/doc8.jpg",
      education: [
          { year: 2005, degree: "MD General Practice", institute: "Samarkand Medical Institute" }
      ],
      experience: [
          { year: "2007-2022", department: "General Practice", position: "General Practitioner", hospital: "Samarkand City Hospital" }
      ],
      personalInfo: {
          phone: "+998901234573",
          office: "+998711234574",
          email: "rashidova@general.uz",
          social: {
              facebook: "http://facebook.com/lola",
              linkedin: "http://linkedin.com/in/lola",
              instagram: "http://instagram.com/lola",
              twitter: "http://twitter.com/lola"
          }
      }
  },
  {
      name: "Dr. Timur Mirzaev",
      specialization: "Stomatologiya",
      availableDays: "Seshanba-Payshanba",
      workingHours: "09:00-18:00",
      imageUrl: "http://localhost:6060/images/doc10.jpg",
      education: [
          { year: 2006, degree: "DDS Dentistry", institute: "Bukhara Dental School" }
      ],
      experience: [
          { year: "2008-2022", department: "Dentistry", position: "Dentist", hospital: "Bukhara Dental Clinic" }
      ],
      personalInfo: {
          phone: "+998901234574",
          office: "+998711234575",
          email: "mirzaev@dental.uz",
          social: {
              facebook: "http://facebook.com/timur",
              linkedin: "http://linkedin.com/in/timur",
              instagram: "http://instagram.com/timur",
              twitter: "http://twitter.com/timur"
          }
      }
  },
  {
      name: "Dr. Nigina Karimova",
      specialization: "Ginekologiya",
      availableDays: "Dushanba-Juma",
      workingHours: "10:00-16:00",
      imageUrl: "http://localhost:6060/images/doc7.jpg",
      education: [
          { year: 2010, degree: "MD Obstetrics and Gynecology", institute: "Tashkent Medical Academy" }
      ],
      experience: [
          { year: "2012-2023", department: "Gynecology", position: "Gynecologist", hospital: "Tashkent Women's Health Center" }
      ],
      personalInfo: {
          phone: "+998901234575",
          office: "+998711234576",
          email: "karimova@womenhealth.uz",
          social: {
              facebook: "http://facebook.com/nigina",
              linkedin: "http://linkedin.com/in/nigina",
              instagram: "http://instagram.com/nigina",
              twitter: "http://twitter.com/nigina"
          }
      }
  },
  {
      name: "Dr. Elina Gafurova",
      specialization: "Kardiologiya",
      availableDays: "Dushanba-Juma",
      workingHours: "09:00-17:00",
      imageUrl: "http://localhost:6060/images/doc12.jpg",
      education: [
          { year: 2008, degree: "MD Cardiology", institute: "Andijan State Medical Institute" }
      ],
      experience: [
          { year: "2010-2022", department: "Cardiology", position: "Cardiologist", hospital: "Andijan Heart Institute" }
      ],
      personalInfo: {
          phone: "+998901234576",
          office: "+998711234577",
          email: "gafurova@cardio.uz",
          social: {
              facebook: "http://facebook.com/elina",
              linkedin: "http://linkedin.com/in/elina",
              instagram: "http://instagram.com/elina",
              twitter: "http://twitter.com/elina"
          }
      }
  }
  


      // { name: "Dr. Sirojiddin Rahmonov", specialization: "Stomatologiya", availableDays: "Dushanba-Chorshanba", workingHours: "09:00-18:00", imageUrl: "http://localhost:6060/images/doc1.jpg" },
      // { name: "Dr. Madina Yusupova", specialization: "Ginekologiya", availableDays: "Seshanba-Juma", workingHours: "10:00-16:00", imageUrl: "http://localhost:6060/images/doc2.jpg" },
      // { name: "Dr. Farruh Soatov", specialization: "Ko`z doktori", availableDays: "Dushanba-Juma", workingHours: "08:00-14:00", imageUrl: "http://localhost:6060/images/doc3.jpg" },
      // { name: "Dr. Aliya Zokirova", specialization: "Kardiologiya", availableDays: "Dushanba-Juma", workingHours: "09:00-17:00", imageUrl: "http://localhost:6060/images/doc4.jpg" },
      // { name: "Dr. Bekzod Karimov", specialization: "Ortopediya", availableDays: "Dushanba-Chorshanba", workingHours: "09:00-19:00", imageUrl: "http://localhost:6060/images/doc5.jpg" },
      // { name: "Dr. Dilnoza Akramova", specialization: "Gastroenterologiya", availableDays: "Seshanba-Payshanba", workingHours: "10:00-15:00", imageUrl: "http://localhost:6060/images/doc6.jpg" },
      // { name: "Dr. Jasur Ismoilov", specialization: "Nevrologiya", availableDays: "Chorshanba-Juma", workingHours: "08:00-17:00", imageUrl: "http://localhost:6060/images/doc9.jpg" },
      // { name: "Dr. Lola Rashidova", specialization: "Umumiy amaliyot", availableDays: "Dushanba-Juma", workingHours: "09:00-18:00", imageUrl: "http://localhost:6060/images/doc8.jpg" },
      // { name: "Dr. Timur Mirzaev", specialization: "Stomatologiya", availableDays: "Seshanba-Payshanba", workingHours: "09:00-18:00", imageUrl: "http://localhost:6060/images/doc10.jpg" },
      // { name: "Dr. Nigina Karimova", specialization: "Ginekologiya", availableDays: "Dushanba-Juma", workingHours: "10:00-16:00", imageUrl: "http://localhost:6060/images/doc7.jpg" },
      // { name: "Dr. Elina Gafurova", specialization: "Kardiologiya", availableDays: "Dushanba-Juma", workingHours: "09:00-17:00", imageUrl: "http://localhost:6060/images/doc12.jpg" },
      // { name: "Dr. Aziz Nosirov", specialization: "Ortopediya", availableDays: "Dushanba-Chorshanba", workingHours: "09:00-19:00", imageUrl: "http://localhost:6060/images/doc11.png" }
    ];

    Doctor.insertMany(doctorsData)
      .then(res => {
        console.log("Doctors added successfully", res);
        mongoose.disconnect();
      })
      .catch(err => {
        console.error("Error adding doctors", err);
        mongoose.disconnect();
      });

  })

  
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
