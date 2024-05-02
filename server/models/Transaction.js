const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true }  // Consider using Date type in production
});

module.exports = mongoose.model('Transaction', transactionSchema);