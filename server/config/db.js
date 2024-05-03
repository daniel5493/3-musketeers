const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techmatchup');
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;