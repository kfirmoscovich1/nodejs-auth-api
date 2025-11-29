const express = require("express");
const path = require("path");
const { securityMiddleware } = require("./middlewares/security");
const { notFound } = require("./middlewares/notFound");
const { errorHandler } = require("./middlewares/errorHandler");
require("./config/db");
const routes = require("./routes");

const app = express();

// Middleware for parsing incoming JSON requests
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "..", "public")));

// Apply security middleware (helmet, CORS, rate limiting)
securityMiddleware(app);

// Mount all API routes
app.use("/api", routes);

// Handle 404 - route not found
app.use(notFound);

// Global error handler
app.use(errorHandler);

module.exports = app;
