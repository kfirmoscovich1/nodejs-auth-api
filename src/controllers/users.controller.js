const { validateCreateUser } = require('../validations/users.validation');
const usersService = require('../services/users.service');

/**
 * Async wrapper utility
 * Wraps async route handlers to catch and forward errors to error handler middleware
 */
function asyncWrapper(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
}

/**
 * Create a new user
 * Validates input and delegates to service layer
 */
const createUser = asyncWrapper(async (req, res) => {
    // Validate input
    const { error } = validateCreateUser(req.body);
    if (error) {
        const err = new Error(error.details[0].message);
        err.statusCode = 400;
        throw err;
    }

    const user = await usersService.createUser(req.body);

    res.status(201).json({
        success: true,
        data: user,
    });
});

/**
 * Get all users
 * Returns a list of all users in the database
 */
const getUsers = asyncWrapper(async (req, res) => {
    const users = await usersService.getAllUsers();

    res.json({
        success: true,
        data: users,
    });
});

module.exports = {
    createUser,
    getUsers,
};
