const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  senderEmail: String,
  receiverEmail: String,
  senderContact: String,
  receiverContact: String,
  address: String,
  weight: String,
  status: {
    type: String,
    default: "Pending"
  }
});

const Parcel = mongoose.model('Parcel', parcelSchema);

module.exports = Parcel;
