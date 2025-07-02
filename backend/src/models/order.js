const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  reg_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  guest_name: String,
  guest_mobile: String,
  guest_address: String,
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }, // ✅ ADDED
  quantity: { type: Number, default: 1 },
  price: Number,
  total_price: Number,
  courier_service: String,
  status: String,
  order_date: { type: Date, default: Date.now },
  deliver_date: Date
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
