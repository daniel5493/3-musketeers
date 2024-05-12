const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  description: { 
    type: String, required: true 
  },
  amount: { 
    type: Number, required: true 
  },
  date: { 
    type: Date, required: true, default: Date.now
  }  // Consider using Date type in production
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;