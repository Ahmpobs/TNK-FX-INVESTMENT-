
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  balance: { type: Number, default: 0 },
  referralCode: String,
  referredBy: String
});

module.exports = mongoose.model('User', userSchema);