const express = require('express');
const router = express.Router();
const Parcel = require('../models/Parcel');

router.get('/', async (req, res) => {
  const parcels = await Parcel.find();
  res.json(parcels);
});

router.post('/', async (req, res) => {
  const newParcel = new Parcel(req.body);
  const savedParcel = await newParcel.save();
  res.json(savedParcel);
});

router.delete('/:id', async (req, res) => {
  await Parcel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Parcel deleted successfully' });
});

module.exports = router;

// DELETE /api/parcels/:id
router.delete('/:id', async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Parcel deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete parcel' });
  }
});
