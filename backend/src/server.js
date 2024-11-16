const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client'); // Correct import
const jsonMiddleware = require('./middleware/jsonMiddleware');
const authenticate = require('./middleware/authMiddleware');
require('dotenv').config(); 

// Initialize Prisma client
const prisma = new PrismaClient(); // Correct instantiation

// Initialize the Express app
const app = express();

// Middleware
app.use(cors({ 
  origin: process.env.CLIENT_ORIGIN || '*',
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization',
}));
app.use(bodyParser.json());
app.use(jsonMiddleware); 

// Import routes
const authRoutes = require('./routes/auth');

// Public API routes
app.use('/api', authRoutes);

// Protected routes
app.use('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Connect to database and start server
prisma.$connect()
  .then(() => {
    console.log('✅ Database connected successfully using Prisma.');
    const port = process.env.PORT || 2000;
    app.listen(port, () => {
      console.log("🚀 Server is running on port", port);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err.message);
  });
