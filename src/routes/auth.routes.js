const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * POST /api/auth/register
 * Register a new user
 * Body: { name, email, password }
 */
router.post('/register', register);

/**
 * POST /api/auth/login
 * Authenticate user and return JWT token
 * Body: { email, password }
 */
router.post('/login', login);

/**
 * GET /api/auth/me
 * Get current user profile (requires authentication)
 */
router.get('/me', authMiddleware, getMe);

module.exports = router;
