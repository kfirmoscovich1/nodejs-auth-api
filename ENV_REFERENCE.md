# Environment Variables Reference

This document explains all environment variables used in the application.

## Required Variables

### Database Configuration
- **DB_CONNECT** - MongoDB connection string
  - Format: `mongodb://[username:password@]host[:port]/[database]`
  - Example (Local): `mongodb://localhost:27017/nodejs-rest-api`
  - Example (Atlas): `mongodb+srv://username:password@cluster.mongodb.net/database`
  - **Required**: Yes

### Authentication
- **TOKEN_SECRET** - Secret key for JWT token signing
  - Should be long and random (at least 32 characters for production)
  - Example: `your_super_secret_jwt_key_change_this_in_production`
  - **Required**: Yes

## Optional Variables

### Server
- **PORT** - Server port number
  - Default: `3000`
  - Example: `3000`

- **NODE_ENV** - Application environment
  - Values: `development`, `production`, `test`
  - Default: `development`
  - Effects stack traces and logging

### JWT
- **JWT_EXPIRES_IN** - JWT token expiration time
  - Default: `7d`
  - Format: [vercel/ms](https://github.com/vercel/ms) compatible strings
  - Examples: `7d`, `24h`, `3600s`, `60m`

### CORS
- **CORS_ORIGIN** - Allowed origin for CORS requests
  - Default: `*` (allow all)
  - Production example: `https://yourdomain.com`
  - Multiple origins example: `https://yourdomain.com,https://api.yourdomain.com`

## Setup Instructions

### Development Environment

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your local MongoDB connection:
   ```env
   PORT=3000
   NODE_ENV=development
   DB_CONNECT=mongodb://localhost:27017/nodejs-rest-api
   TOKEN_SECRET=dev_secret_key_not_for_production
   JWT_EXPIRES_IN=7d
   ```

### Production Environment

1. Create `.env` file (never commit to git)

2. Use strong values:
   ```env
   PORT=3000
   NODE_ENV=production
   DB_CONNECT=mongodb+srv://username:password@cluster.mongodb.net/database
   TOKEN_SECRET=generate_a_very_long_random_string_here_at_least_32_chars
   JWT_EXPIRES_IN=7d
   CORS_ORIGIN=https://yourdomain.com
   ```

3. Generate a strong TOKEN_SECRET:
   ```bash
   # Linux/Mac
   openssl rand -base64 32

   # PowerShell
   [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([System.Guid]::NewGuid()))
   ```

## MongoDB Connection Strings

### Local MongoDB
```
mongodb://localhost:27017/nodejs-rest-api
```

### MongoDB with Authentication
```
mongodb://username:password@localhost:27017/database
```

### MongoDB Atlas (Cloud)
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database?retryWrites=true&w=majority
```

To get your MongoDB Atlas connection string:
1. Go to MongoDB Atlas Dashboard
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<username>` and `<password>` with your credentials
6. Replace `<database>` with your database name

## Security Recommendations

### Production Checklist
- [ ] Use strong, random `TOKEN_SECRET` (32+ characters)
- [ ] Set `NODE_ENV=production`
- [ ] Use MongoDB Atlas with IP whitelist
- [ ] Enable HTTPS only
- [ ] Restrict `CORS_ORIGIN` to your domain
- [ ] Use environment-specific secrets
- [ ] Never commit `.env` file to git
- [ ] Rotate secrets periodically

### Generating Secrets

#### Option 1: Node.js
```javascript
require('crypto').randomBytes(32).toString('hex')
```

#### Option 2: OpenSSL
```bash
openssl rand -base64 32
```

#### Option 3: Online Generator
Visit [https://www.random.org/strings/](https://www.random.org/strings/)

## Deployment Services

### Render.com
Set environment variables in Dashboard → Environment

### Railway.app
Set variables in project settings

### Heroku
```bash
heroku config:set TOKEN_SECRET=your_secret_here
```

### AWS Lambda
Use AWS Secrets Manager or Parameter Store

### Docker
Pass as runtime arguments:
```bash
docker run -e TOKEN_SECRET=secret -e DB_CONNECT=mongodb://... myapp
```

## Validation

The application validates required environment variables on startup and will fail with a clear error message if any are missing:

```
Error: Missing required environment variable: DB_CONNECT
```

## Troubleshooting

### "Invalid connection string" Error
- Verify MongoDB connection string format
- Check username and password are URL encoded
- Ensure database exists in MongoDB Atlas

### "JWT error" in Production
- Ensure `TOKEN_SECRET` is set correctly
- Check that `TOKEN_SECRET` value hasn't changed between deployments
- Verify all instances have the same `TOKEN_SECRET`

### CORS Issues
- Set `CORS_ORIGIN` to your frontend URL
- Don't use `*` in production with credentials
- Example: `https://yourdomain.com:3000`

## Support

For more information:
- MongoDB Connection: https://docs.mongodb.com/manual/reference/connection-string/
- JWT: https://jwt.io/
- dotenv: https://github.com/motdotla/dotenv
