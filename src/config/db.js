const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Connect to MongoDB database
 * Uses connection string from environment variable DB_CONNECT
 */
async function connectDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✓ MongoDB connected successfully');
  } catch (err) {
    console.error('✗ MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

connectDatabase();
