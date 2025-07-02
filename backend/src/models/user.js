const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  reg_id: { type: Number, unique: true, required: true },  // <-- add this
  fullName: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  mobileNo: String,
  gender: String,
  address: String,
  role: { type: String, default: "customer" },
  isSeller: { type: Boolean, default: false },
  profileImage: String, // base64 or URL
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
