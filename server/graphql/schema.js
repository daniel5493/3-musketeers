const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Transaction {
    id: ID!
    description: String!
    amount: Float!
    date: String!
  }

  type Query {
    getTransactions: [Transaction]
  }

  type Mutation {
    addTransaction(description: String!, amount: Float!, date: String!): Transaction
  }
`;

module.exports = typeDefs;