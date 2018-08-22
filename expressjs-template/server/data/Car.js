const mongoose = require('mongoose');

let carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    imageUrl: { type: String, required: true },
    color:  { type: String },
    price: { type: Number}
  });

  module.exports = mongoose.model('Car', carSchema);