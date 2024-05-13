const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://daniel5493:Koolaid5493@cluster0.wtjyffr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' || 'mongodb://127.0.0.1:27017/budgettracker');

module.exports = mongoose.connection;
