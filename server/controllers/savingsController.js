const SavingsPlan = require('../models/SavingsPlan');

// Create a new savings plan
exports.createSavingsPlan = async (req, res) => {
    try {
        const { userId, monthlyIncome, savingsAmount, savingsGoal } = req.body;
        const newPlan = new SavingsPlan({
            userId,
            monthlyIncome,
            savingsAmount,
            savingsGoal
        });
        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (error) {
        res.status(400).json({ message: "Error creating savings plan", error: error.message });
    }
};

// Retrieve a savings plan for a user
exports.getSavingsPlan = async (req, res) => {
    try {
        const userId = req.params.userId;
        const savingsPlan = await SavingsPlan.findOne({ userId });
        if (!savingsPlan) {
            return res.status(404).json({ message: "Savings plan not found" });
        }
        res.json(savingsPlan);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving savings plan", error: error.message });
    }
};

// Update a savings plan for a user
exports.updateSavingsPlan = async (req, res) => {
    try {
        const { monthlyIncome, savingsAmount, savingsGoal } = req.body;
        const userId = req.params.userId;
        const updatedPlan = await SavingsPlan.findOneAndUpdate(
            { userId },
            { $set: { monthlyIncome, savingsAmount, savingsGoal } },
            { new: true }  // Return the updated document
        );
        if (!updatedPlan) {
            return res.status(404).json({ message: "Savings plan not found" });
        }
        res.json(updatedPlan);
    } catch (error) {
        res.status(400).json({ message: "Error updating savings plan", error: error.message });
    }
};