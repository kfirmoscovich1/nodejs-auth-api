const User = require('../models/user.model');

/**
 * Create a new user in the database
 * Checks for duplicate email before creating
 * @param {Object} data - User data (name, email, password)
 * @returns {Promise<Object>} - Created user document
 * @throws {Error} - If email already exists
 */
async function createUser(data) {
    // Check if user with email already exists
    const existing = await User.findOne({ email: data.email });
    if (existing) {
        const error = new Error('User with this email already exists');
        error.statusCode = 400;
        throw error;
    }

    // Create and return new user
    const user = await User.create(data);
    return user;
}

/**
 * Get all users from the database
 * @returns {Promise<Array>} - Array of user documents
 */
async function getAllUsers() {
    const users = await User.find();
    return users;
}

module.exports = {
    createUser,
    getAllUsers,
};
