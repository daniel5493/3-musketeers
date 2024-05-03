// Import necessary modules
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/budgeting_app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define MongoDB schema
const expenseSchema = new mongoose.Schema({
    category: String,
    amount: Number,
    date: Date
});

const Expense = mongoose.model('Expense', expenseSchema);

// Seed initial data
const seedData = [
    { category: 'Food', amount: 50, date: new Date('2024-04-01') },
    { category: 'Transportation', amount: 30, date: new Date('2024-04-03') },
    { category: 'Entertainment', amount: 20, date: new Date('2024-04-05') }
];

// Function to seed data
async function seedDatabase() {
    try {
        await Expense.deleteMany();
        await Expense.insertMany(seedData);
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        mongoose.connection.close();
    }
}


seedDatabase();
