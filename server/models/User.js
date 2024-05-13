// server/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true 
    },
    email: { 
        type: String, 
        unique: true 
    },
    password: { 
        type: String, 
    },
    transactions: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Transaction',
        },
      ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema);
module.exports = User