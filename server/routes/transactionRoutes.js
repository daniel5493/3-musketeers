const mongoose = require('mongoose');

// Define the schema for a transaction
const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'  // Assuming there's a User model for referencing
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Create the model from the schema
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;