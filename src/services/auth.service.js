const bcrypt = require('bcrypt');
const User = require('../models/user.model');

/**
 * Create a new user with hashed password
 * @param {string} name - User's full name
 * @param {string} email - User's email address
 * @param {string} password - Plain text password
 * @returns {Promise<Object>} - Created user document
 */
const createUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return user;
};

module.exports = { createUser };
