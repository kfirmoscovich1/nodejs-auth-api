require('dotenv').config();

/**
 * Application environment variables configuration
 * All critical variables are validated on startup
 */
const requiredEnvVars = ['DB_CONNECT', 'TOKEN_SECRET'];

for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`);
    }
}

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_CONNECT: process.env.DB_CONNECT,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    NODE_ENV: process.env.NODE_ENV || 'development',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
};
