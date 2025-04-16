const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Parcel = require('./models/Parcel');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// Route to add parcel
app.post('/api/parcels', async (req, res) => {
  try {
    const parcel = new Parcel(req.body);
    await parcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all parcels
app.get('/api/parcels', async (req, res) => {
  try {
    const parcels = await Parcel.find();
    res.json(parcels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
