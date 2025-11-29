# 🚀 Quick Start Commands

## Development

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env with your MongoDB connection and JWT secret
# Then start the server:

# Development (with auto-reload using nodemon)
npm run dev

# Production
npm start
```

## Testing with cURL

```bash
# 1. Register a new user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "Password123"
  }'

# Expected response:
# {
#   "success": true,
#   "data": {
#     "id": "...",
#     "name": "John Doe",
#     "email": "john@example.com",
#     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
#   }
# }

# 2. Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "Password123"
  }'

# 3. Get user profile (use token from login response)
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"

# 4. Get all users
curl -X GET http://localhost:3000/api/users

# 5. Create user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "Password123"
  }'
```

## MongoDB Atlas Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Go to Database Access → Add User (save username/password)
5. Go to Network Access → Add My IP
6. Go to Clusters → Connect → Connect your application
7. Copy connection string
8. Replace in `.env`:
   ```
   DB_CONNECT=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
   ```

## API Documentation

Open in browser:
- **Home**: http://localhost:3000/
- **Full API Docs**: http://localhost:3000/documentation.html

## Environment Variables Needed

```env
PORT=3000
NODE_ENV=development
DB_CONNECT=mongodb+srv://username:password@cluster.mongodb.net/database
TOKEN_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d
```

## Project Files Overview

- `README.md` - Main documentation
- `CONTRIBUTING.md` - How to contribute
- `ENV_REFERENCE.md` - Environment variables guide
- `LICENSE` - MIT License
- `.env.example` - Environment template

## Common Issues

### MongoDB Connection Error
- Check connection string format
- Verify credentials are URL encoded
- Check IP whitelist in MongoDB Atlas

### Port Already in Use
- Change PORT in `.env` to different port
- Or kill process: `lsof -i :3000` then `kill -9 <PID>`

### JWT Errors
- Make sure TOKEN_SECRET is set
- Check token hasn't expired
- Verify Authorization header format: `Bearer TOKEN`

## Project Structure

```
src/
├── config/         # Configuration (DB, env)
├── controllers/    # Request handlers
├── middlewares/    # Express middlewares
├── models/        # Database schemas
├── routes/        # API endpoints
├── services/      # Business logic
├── utils/         # Helper functions
└── validations/   # Input validation
```

## Code Style

- **Indentation**: 2 spaces
- **Quotes**: Single quotes
- **Semicolons**: Required
- **Comments**: English only
- **Variable names**: camelCase

## Security Reminders

- ✅ Never commit `.env` to git
- ✅ Use strong JWT_SECRET for production
- ✅ Change CORS_ORIGIN for production
- ✅ Update package.json author
- ✅ Use MongoDB Atlas with IP whitelist

## Next Steps

1. Test all endpoints
2. Add unit tests (Jest)
3. Deploy to production
4. Set up CI/CD pipeline
5. Monitor logs and errors
6. Scale if needed

---

For more details, see README.md and documentation files.
