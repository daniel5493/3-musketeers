const Transaction = require('../models/Transaction');

const resolvers = {
  Query: {
    getTransactions: async () => await Transaction.find({})
  },
  Mutation: {
    addTransaction: async (_, { description, amount, date }) => {
      const newTransaction = new Transaction({ description, amount, date });
      return await newTransaction.save();
    }
  }
};

module.exports = resolvers;