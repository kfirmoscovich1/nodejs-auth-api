const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/users.controller');

/**
 * GET /api/users
 * Get all users
 */
router.get('/', getUsers);

/**
 * POST /api/users
 * Create a new user
 * Body: { name, email, password }
 */
router.post('/', createUser);

module.exports = router;
