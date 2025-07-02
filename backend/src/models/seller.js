const mongoose = require('mongoose');


const SellerSchema = new mongoose.Schema({
  mobile_no1: String,
  mobile_no2: String,
  reg_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', unique: true },
  isBlocked: { type: Boolean, default: false },
  warning1: String,
  warning2: String,
  warning3: String
}, { timestamps: true });

module.exports = mongoose.model('Seller', SellerSchema);
