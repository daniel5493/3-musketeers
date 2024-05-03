// server/controllers/transactionController.js
const Transaction = require('../models/Transaction');

// Add a new transaction
exports.addTransaction = async (req, res) => {
    try {
        const { userId, description, amount, date } = req.body;
        const transaction = new Transaction({
            user: userId,
            description,
            amount,
            date
        });
        await transaction.save();
        res.status(201).json({
            message: "Transaction successfully added",
            transaction
        });
    } catch (error) {
        res.status(400).json({
            message: "Error adding transaction",
            error: error.message
        });
    }
};