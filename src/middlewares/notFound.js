/**
 * Handle 404 Not Found errors
 * Responds with JSON error message for any unmatched route
 */
function notFound(req, res, next) {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.originalUrl}`,
    });
}

module.exports = { notFound };
