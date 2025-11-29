const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Generate JWT token for user authentication
 * @param {string} userId - User ID from MongoDB
 * @returns {string} - Signed JWT token
 */
const generateToken = (userId) => {
    const secret = process.env.TOKEN_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

    return jwt.sign({ _id: userId }, secret, { expiresIn });
};

module.exports = generateToken;
