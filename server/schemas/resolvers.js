const {User, Transaction} = require("../models")
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('transactions');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('transactions');
    },
    getTransactions: async () => {
      return await Transaction.find();
    },
    getTransactionsByUser: async (_, { userId }) => {
      return await Transaction.find({ user: userId });
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
       const token = signToken(user);
       console.log(user)
       console.log(token)
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { user };
    },
    addTransaction: async (_, { userId, description, amount, date }) => {
      const newTransaction = new Transaction({ user: userId, description, amount, date });
      return await newTransaction.save();
    },
    updateTransaction: async (_, { id, description, amount, date }) => {
      const updatedTransaction = await Transaction.findByIdAndUpdate(id, { description, amount, date }, { new: true });
      return updatedTransaction;
    },
    deleteTransaction: async (_, { id }) => {
      return await Transaction.findByIdAndRemove(id);
    }
  }
};

module.exports = resolvers;