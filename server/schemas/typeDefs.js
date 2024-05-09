const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Transaction {
    id: ID!
    user: ID!
    description: String!
    amount: Float!
    date: String!
  }

  type Query {
    getTransactions: [Transaction]
    getTransactionsByUser(userId: ID!): [Transaction]
  }

  type Mutation {
    addTransaction(userId: ID!, description: String!, amount: Float!, date: String!): Transaction
    updateTransaction(id: ID!, description: String, amount: Float, date: String): Transaction
    deleteTransaction(id: ID!): Transaction
  }
`;

module.exports = { typeDefs };
