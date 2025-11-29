# Node.js REST API

A production-ready REST API built with Node.js, Express, and MongoDB. Features JWT authentication, comprehensive input validation, and security best practices.

## Features

- **JWT Authentication**: Secure token-based user authentication
- **User Management**: Register, login, and profile endpoints  
- **Security**: Helmet headers, CORS, rate limiting (100 req/15min), bcrypt hashing
- **Input Validation**: Joi schema validation on all endpoints
- **Error Handling**: Centralized error handling with consistent response format
- **MongoDB Integration**: Mongoose ODM with proper schema validation
- **Environment Configuration**: dotenv for environment management

## Prerequisites

- Node.js v14+
- MongoDB (local or Atlas)
- npm/yarn

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/kfirmoscovich1/nodejs-auth-api.git
   cd nodejs-auth-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create `.env` file from template
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`:
   ```
   PORT=3000
   NODE_ENV=development
   DB_CONNECT=mongodb+srv://username:password@cluster.mongodb.net/database
   TOKEN_SECRET=your_secret_key_here
   JWT_EXPIRES_IN=7d
   ```

5. Start the server
   ```bash
   npm start          # Production
   npm run dev        # Development with auto-reload
   ```

Server runs on `http://localhost:3000`

## Project Structure

```
src/
├── config/              # Configuration
│   ├── db.js           # MongoDB connection
│   └── env.js          # Environment variables
├── controllers/         # Request handlers
│   ├── auth.controller.js
│   └── users.controller.js
├── middlewares/         # Express middleware
│   ├── auth.middleware.js
│   ├── errorHandler.js
│   ├── notFound.js
│   └── security.js
├── models/              # Database schemas
│   └── user.model.js
├── routes/              # API routes
│   ├── auth.routes.js
│   ├── users.routes.js
│   └── index.js
├── services/            # Business logic
│   ├── auth.service.js
│   └── users.service.js
├── utils/               # Utilities
│   ├── generateToken.js
│   └── logger.js
├── validations/         # Input schemas
│   ├── auth.validation.js
│   └── users.validation.js
└── app.js               # Express setup

public/                  # Static files
├── index.html
└── documentation.html

server.js               # Entry point
package.json
.env.example
.gitignore
LICENSE
```

## API Endpoints

### Authentication (`/api/auth`)

**Register User**
```
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login**
```
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Get Profile** (requires authentication)
```
GET /api/auth/me
Authorization: Bearer <token>
```

### Users (`/api/users`)

**Get All Users**
```
GET /api/users
```

**Create User**
```
POST /api/users
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123"
}
```

## Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Successful request |
| 201 | Created | Resource created |
| 400 | Bad Request | Invalid input |
| 401 | Unauthorized | Invalid/missing token |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Email already exists |
| 500 | Server Error | Internal server error |

## Security

- Password hashing with bcrypt (salt rounds: 10)
- JWT token validation on protected routes
- Helmet headers for HTTP protection
- CORS configuration
- Rate limiting: 100 requests per 15 minutes
- Input validation with Joi schemas
- Environment variables for sensitive data

## Technologies

- Express.js - Web framework
- MongoDB & Mongoose - Database
- JWT - Authentication
- Bcrypt - Password hashing
- Joi - Schema validation
- Helmet - Security headers
- CORS & Rate Limiter - Request handling

## Production Deployment

Set environment variables:
```
NODE_ENV=production
DB_CONNECT=<mongodb_atlas_uri>
TOKEN_SECRET=<strong_random_string_32_chars_min>
JWT_EXPIRES_IN=7d
CORS_ORIGIN=https://yourdomain.com
```

Deployment checklist:
- [ ] NODE_ENV=production
- [ ] Strong TOKEN_SECRET (32+ characters)
- [ ] MongoDB Atlas with IP whitelist
- [ ] HTTPS enabled
- [ ] CORS configured for frontend domain
- [ ] Error logging configured

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push branch: `git push origin feature/name`
5. Open Pull Request

## Code Style

- 2-space indentation
- Semicolons required
- camelCase variables, PascalCase classes
- Meaningful English comments
- No unused variables

## License

MIT License - See [LICENSE](LICENSE) file

## Author

**Kfir Moscovich** - [GitHub](https://github.com/kfirmoscovich1)

## Support

For issues or questions, open an issue in the [repository](https://github.com/kfirmoscovich1/nodejs-auth-api)

---

Last Updated: November 2025
