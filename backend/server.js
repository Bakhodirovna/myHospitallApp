const express = require('express');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctors');
const serviceRoutes = require('./routes/services');

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/doctors', doctorRoutes);
app.use('/images', express.static('./imgs'));

app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


