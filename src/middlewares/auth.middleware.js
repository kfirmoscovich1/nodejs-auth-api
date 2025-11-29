const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

/**
 * Authentication middleware
 * Validates JWT token from Authorization header
 * Attaches user data and userId to request object
 */
const authMiddleware = async (req, res, next) => {
    try {
        const header = req.headers.authorization;

        if (!header || !header.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'No token provided',
            });
        }

        const token = header.split(' ')[1];
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        req.user = await User.findById(decoded._id).select('-password');
        req.userId = decoded._id;

        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token',
        });
    }
};

module.exports = authMiddleware;
