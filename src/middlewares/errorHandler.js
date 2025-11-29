/**
 * Global error handling middleware
 * Catches all errors thrown in async routes and returns consistent error response
 * Should be mounted as the last middleware in the application
 */
function errorHandler(err, req, res, next) {
    console.error('Error:', err);

    // Set appropriate HTTP status code
    const statusCode = err.statusCode || 500;

    // Return consistent error response
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
        // Include stack trace only in development
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
}

module.exports = { errorHandler };
