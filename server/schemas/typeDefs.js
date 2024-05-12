const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
  transactions: [Transaction]
}

  type Transaction {
    id: ID!
    user: ID!
    description: String!
    amount: Float!
    date: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    getTransactions: [Transaction]
    getTransactionsByUser(userId: ID!): [Transaction]
  }

  type Mutation {
    addUser(username: String!, email: String, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTransaction(userId: ID!, description: String!, amount: Float!, date: String!): Transaction
    updateTransaction(id: ID!, description: String, amount: Float, date: String): Transaction
    deleteTransaction(id: ID!): Transaction
  }
`;

module.exports =  typeDefs ;
