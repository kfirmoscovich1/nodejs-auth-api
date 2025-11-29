/**
 * Simple logging utility
 * For production, consider using winston or pino for more robust logging
 */

/**
 * Log informational messages
 * @param {string} message - Message to log
 * @param {any} meta - Additional metadata
 */
function logInfo(message, meta) {
    console.log(`[INFO] ${message}`, meta || '');
}

/**
 * Log error messages
 * @param {string} message - Error message to log
 * @param {any} meta - Additional metadata
 */
function logError(message, meta) {
    console.error(`[ERROR] ${message}`, meta || '');
}

module.exports = { logInfo, logError };
