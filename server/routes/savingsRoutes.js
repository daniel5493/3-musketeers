const express = require('express');
const router = express.Router();
const { createSavingsPlan, getSavingsPlan, updateSavingsPlan } = require('../controllers/savingsController');

// Create a new savings plan
router.post('/savings', createSavingsPlan);

// Retrieve savings plan details
router.get('/savings/:userId', getSavingsPlan);

// Update savings plan details
router.put('/savings/:userId', updateSavingsPlan);

module.exports = router;