const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');
const connectDB = require('./config/db'); // Import connectDB function

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB('mongodb://localhost:27017/yourdatabase'); // Pass MongoDB URI to connectDB function

// Middleware to parse JSON bodies must be placed before any routes that will handle JSON
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/auth', authRoutes);

// Setup Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Apply Apollo GraphQL middleware and set the path to /graphql
server.applyMiddleware({ app, path: '/graphql' });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GraphQL ready at http://localhost:${PORT}${server.graphqlPath}`);
});
