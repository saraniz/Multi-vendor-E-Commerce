const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const mongoose = require('mongoose');
const jsonMiddleware = require('./middleware/jsonMiddleware');
const authenticate = require('./middleware/authMiddleware');
require('dotenv').config();

// Initialize Prisma client
let prisma;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  prisma = global.__prisma;
}

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));
app.use(bodyParser.json());
app.use(jsonMiddleware);

// Routes
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/itemRoutes');
const cartRoutes = require('./routes/cartRoutes');
const favRoutes = require('./routes/favRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const storeRoutes = require('./routes/storeRoutes');
const followRoutes = require('./routes/followRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/fav', favRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/store', storeRoutes);
app.use('/api/follow', followRoutes);
app.use('/api/order', orderRoutes);

// Protected route
app.use('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Graceful shutdown
const gracefulShutdown = async (signal) => {
  console.log(`\n🔄 Received ${signal}. Starting graceful shutdown...`);

  try {
    await prisma.$disconnect();
    console.log('✅ Prisma (PostgreSQL) disconnected.');

    await mongoose.disconnect();
    console.log('✅ MongoDB (Mongoose) disconnected.');

    console.log('👋 Server shutdown complete.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGUSR2', () => gracefulShutdown('SIGUSR2'));
process.on('uncaughtException', async (error) => {
  console.error('❌ Uncaught Exception:', error);
  await gracefulShutdown('uncaughtException');
});
process.on('unhandledRejection', async (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  await gracefulShutdown('unhandledRejection');
});

// Start server after DB connections
async function startServer() {
  try {
    await prisma.$connect();
    console.log('✅ Prisma (PostgreSQL) connected.');

    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB (Mongoose) connected.');

    // 👉 Include the cron-based auto status updater here
    require('./autoStatusUpdater'); // <-- THIS IS THE CRON JOB

    const port = process.env.PORT || 2000;
    const server = app.listen(port, () => {
      console.log("🚀 Server is running on port", port);
    });

    // Optional: Close HTTP server on shutdown
    process.on('SIGINT', () => {
      console.log('\n🔄 Closing HTTP server...');
      server.close(() => console.log('✅ HTTP server closed.'));
    });

    process.on('SIGTERM', () => {
      console.log('\n🔄 Closing HTTP server...');
      server.close(() => console.log('✅ HTTP server closed.'));
    });

  } catch (err) {
    console.error('❌ Startup failed:', err.message);
    process.exit(1);
  }
}

startServer();
