const User = require('../models/user.model');
const { registerSchema, loginSchema } = require('../validations/auth.validation');
const generateToken = require('../utils/generateToken');
const authService = require('../services/auth.service');

/**
 * Register a new user
 * Validates input, checks for existing email, hashes password, creates user and returns JWT
 */
const register = async (req, res, next) => {
    try {
        // Validate input
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }

        const { name, email, password } = value;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({
                success: false,
                message: 'User with this email already exists',
            });
        }

        // Create user with hashed password
        const user = await authService.createUser(name, email, password);

        // Generate JWT token
        const token = generateToken(user._id);

        return res.status(201).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

/**
 * Login an existing user
 * Validates credentials and returns JWT token
 */
const login = async (req, res, next) => {
    try {
        // Validate input
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }

        const { email, password } = value;

        // Find user and verify password
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials',
            });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials',
            });
        }

        // Generate JWT token
        const token = generateToken(user._id);

        return res.status(200).json({
            success: true,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

/**
 * Get current user profile
 * Returns authenticated user information (requires JWT token)
 */
const getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).json({
            success: true,
            data: user,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { register, login, getMe };
