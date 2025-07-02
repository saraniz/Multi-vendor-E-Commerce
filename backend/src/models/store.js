const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  store_name: { type: String, unique: true, required: true },
  business_email: { type: String, unique: true, required: true },
  business_regNo: { type: String, unique: true, required: true },
  business_address: { type: String },
  store_image: { type: String, default: '' }  // optional with default empty string
}, { timestamps: true });

module.exports = mongoose.model('Store', StoreSchema);
