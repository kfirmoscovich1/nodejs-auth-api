const Joi = require('joi');

/**
 * Validation schema for creating a new user
 * Validates name, email, and password
 */
const createUserSchema = Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
        'string.min': 'Name must be at least 2 characters',
        'any.required': 'Name is required',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Invalid email format',
        'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'Password must be at least 6 characters',
        'any.required': 'Password is required',
    }),
});

/**
 * Validate user input for creation
 * @param {Object} body - Request body
 * @returns {Object} - Joi validation result
 */
function validateCreateUser(body) {
    return createUserSchema.validate(body);
}

module.exports = { validateCreateUser };
