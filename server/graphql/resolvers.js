const Transaction = require('../models/Transaction');

const resolvers = {
  Query: {
    getTransactions: async () => {
      return await Transaction.find();
    },
    getTransactionsByUser: async (_, { userId }) => {
      return await Transaction.find({ user: userId });
    }
  },
  Mutation: {
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