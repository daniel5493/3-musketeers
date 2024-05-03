const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Define addTransaction function
const addTransaction = (req, res) => {
    // Add your transaction handling logic here
};

// Define getTransactions function
const getTransactions = (req, res) => {
    // Add your logic to retrieve transactions here
};

// Add a new transaction
router.post('/transaction', addTransaction);

// Get all transactions for a user
router.get('/transactions', getTransactions);

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).send('Invalid credentials');
        }
        const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET', { expiresIn: '1d' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
