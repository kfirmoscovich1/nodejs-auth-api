# Contributing to Node.js REST API

Thank you for considering a contribution to this project! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and professional
- Provide constructive feedback
- Follow the existing code style
- Test your changes thoroughly

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/nodejs-rest-api.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Make your changes
5. Test your changes
6. Commit with clear messages: `git commit -m 'Add amazing feature'`
7. Push to your fork: `git push origin feature/amazing-feature`
8. Open a Pull Request

## Development Setup

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure your .env with local MongoDB
# Start development server
npm run dev
```

## Code Style Guidelines

### General
- Use 2-space indentation
- Use semicolons
- Use single quotes for strings
- No console.log in production code (use logger module)
- Meaningful variable names

### Naming Conventions
- **Files**: kebab-case (e.g., `user.controller.js`)
- **Variables**: camelCase (e.g., `userData`)
- **Classes**: PascalCase (e.g., `UserService`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRIES`)

### Comments
- Write comments in English
- Use JSDoc for functions
- Keep comments concise and meaningful

### Example JSDoc
```javascript
/**
 * Create a new user with hashed password
 * @param {string} name - User's full name
 * @param {string} email - User's email address
 * @param {string} password - Plain text password
 * @returns {Promise<Object>} - Created user document
 * @throws {Error} - If email already exists
 */
const createUser = async (name, email, password) => {
  // implementation
};
```

## Commit Messages

Follow these conventions:

- `feat: Add new feature`
- `fix: Fix a bug`
- `docs: Update documentation`
- `style: Format code`
- `refactor: Refactor code`
- `test: Add or update tests`
- `chore: Update dependencies`

Example: `feat: Add user profile update endpoint`

## Pull Request Process

1. Ensure your code follows style guidelines
2. Update documentation if needed
3. Add comments for complex logic
4. Test all functionality
5. Provide a clear description of changes
6. Link any related issues

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update

## Testing
Describe how you tested these changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
```

## Reporting Bugs

### Bug Report Template
```markdown
## Description
Clear description of the bug

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Node version: 
- npm version:
- Operating System:

## Additional Context
Any other relevant information
```

## Feature Requests

Describe:
1. The problem you're trying to solve
2. Your proposed solution
3. Alternative solutions considered
4. Additional context

## Questions?

Feel free to open an issue with the `question` label or reach out directly.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉
