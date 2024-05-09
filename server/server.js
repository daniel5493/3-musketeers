const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schemas/typeDefs');
const { resolvers } = require('./schemas/resolvers');
const connectDB = require('./config/db'); // Import connectDB function
const path =require("path")
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB with the external function for cleaner code
connectDB().then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit if the database connection fails
});

// Middleware to parse JSON bodies must be placed before any routes that will handle JSON
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const TransactionRoutes = require('./routes/transactionRoutes'); // Assuming you have transaction routes

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', TransactionRoutes); // Apply transaction routes

// Setup Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Apply Apollo GraphQL middleware and set the path to /graphql
server.applyMiddleware({ app, path: '/graphql' });

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GraphQL ready at http://localhost:${PORT}/graphql`);
});

