const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./graphql/schema');

const app = express();
const PORT = process.env.PORT || 4000;

// Import routes
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes'); // Assuming you have transaction routes

// Import database configuration
const connectDB = require('./config/db');

// Connect to MongoDB with the external function for cleaner code
connectDB().then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit if the database connection fails
});

// Middleware to parse JSON bodies must be placed before any routes that will handle JSON
app.use(express.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes); // Apply transaction routes

// Setup Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Apply Apollo GraphQL middleware and set the path to /graphql
server.applyMiddleware({ app, path: '/graphql' });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GraphQL ready at http://localhost:${PORT}${server.graphqlPath}`);
});