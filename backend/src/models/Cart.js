const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  // Link to Prisma cart ID
  prisma_cart_id: {
    type: Number,
    unique: true, // ensures no duplicate cart entry
    required: true,
  },

  // Link to MongoDB User
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // assuming you have a MongoDB User model
    required: true,
  },

  // Link to MongoDB Product
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // assuming you have a MongoDB Product model
    required: true,
  },

  quantity: {
    type: Number,
    default: 1,
  },

  price: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  product_image: {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Cart', CartSchema);
