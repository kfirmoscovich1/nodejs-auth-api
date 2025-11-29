const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

/**
 * Configure security middleware for the application
 * Includes: helmet protection, CORS configuration, and rate limiting
 * @param {Object} app - Express application instance
 */
function securityMiddleware(app) {
    // HTTP security headers protection
    app.use(helmet());

    // CORS configuration - adjust origin for production environment
    app.use(
        cors({
            origin: process.env.CORS_ORIGIN || '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        })
    );

    // Rate limiter - prevent DDOS and brute force attacks
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per windowMs
        message: 'Too many requests from this IP, please try again later.',
    });

    app.use(limiter);
}

module.exports = { securityMiddleware };
