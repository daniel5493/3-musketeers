const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;