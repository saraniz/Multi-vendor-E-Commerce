const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  prisma_id: { type: Number, unique: true },  // <-- Add this to link Prisma product IDs
  name: String,
  description: String,
  price: Number,
  stock: Number,
  store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
  category: String,
  isPremium: Boolean,
  product_image: String,
  store_name: String,
  store_image: String
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
