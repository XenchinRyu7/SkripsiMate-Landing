# Contributing to SkripsiMate Website

Thank you for your interest in contributing to the SkripsiMate website! This document provides guidelines and information for contributors to the website project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact email].

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and TailwindCSS

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork the repository on GitHub, then clone your fork
   git clone https://github.com/XenchinRyu7/skripsimate-website.git
   cd skripsimate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```bash
   # The website will be available at http://localhost:5173
   ```

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug Reports**: Report bugs and issues on the website
- **Feature Requests**: Suggest new features for the website
- **Code Contributions**: Fix bugs or implement new pages/components
- **Documentation**: Improve website documentation and content
- **Design**: Help with UI/UX improvements and neumorphic design
- **Content**: Improve copy, add new sections, or update existing content
- **Performance**: Optimize website performance and loading times

### Reporting Issues

Before creating an issue, please:

1. Check if the issue already exists
2. Use the appropriate issue template
3. Provide detailed information including:
   - Browser and version
   - OS and version
   - Node.js version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Console errors (if any)

### Feature Requests

When suggesting new features:

1. Check if the feature has been requested before
2. Provide a clear description of the feature
3. Explain the use case and benefits
4. Consider implementation complexity

## Pull Request Process

### Before Submitting

1. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Follow the coding standards
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

### Pull Request Guidelines

- Use a clear and descriptive title
- Provide a detailed description of changes
- Link to related issues
- Include screenshots for UI changes
- Ensure all checks pass
- Request review from maintainers

## Issue Guidelines

### Bug Reports

Use the bug report template and include:

- **Environment**: OS, Node.js version, app version
- **Steps to Reproduce**: Clear, numbered steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Additional Context**: Screenshots, logs, etc.

### Feature Requests

Use the feature request template and include:

- **Feature Description**: Clear explanation
- **Use Case**: Why is this needed?
- **Proposed Solution**: How should it work?
- **Alternatives**: Other solutions considered

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer functional components with hooks

### React

- Use functional components
- Implement proper TypeScript interfaces
- Use React.memo for performance optimization when needed
- Follow the existing component structure

### CSS/Styling

- Use TailwindCSS classes
- Follow the neumorphic design system
- Use CSS custom properties for theming
- Maintain consistent spacing and typography

### File Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── Navigation.tsx  # Website navigation
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── Footer.tsx      # Website footer
│   └── ...             # Other website components
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Features.tsx    # Features page
│   ├── Docs.tsx        # Documentation page
│   ├── Community.tsx   # Community page
│   ├── News.tsx        # News page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(ui): add neumorphic button component
fix(navigation): resolve mobile menu toggle issue
docs: update website documentation
style: format code with prettier
refactor(components): extract common logic to hooks
feat(pages): add new community page
fix(styles): resolve neumorphic shadow inconsistencies
chore: update dependencies
```

## Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test improvements

### Testing

- Test website functionality across different browsers
- Ensure responsive design works on all screen sizes
- Test neumorphic design consistency
- Verify all links and navigation work correctly
- Check for accessibility issues

### Code Review

All code changes require review:

- Be respectful and constructive
- Focus on the code, not the person
- Ask questions if something is unclear
- Suggest improvements
- Approve when ready

## Getting Help

If you need help:

1. Check the documentation
2. Search existing issues
3. Ask in discussions
4. Contact maintainers

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

## License

By contributing to the SkripsiMate website, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the SkripsiMate website! 🌐
