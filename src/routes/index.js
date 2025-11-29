const express = require('express');
const router = express.Router();

// Import route modules
const usersRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');

// Mount API routes
router.use('/users', usersRoutes);
router.use('/auth', authRoutes);

module.exports = router;
