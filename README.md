## Educado Technical Documentation

This repository contains the documentation site for the **Educado** project. It is built with [Docusaurus](https://docusaurus.io/) and provides guidelines for all teams contributing to the mobile learning platform.

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without restarting the server.

### Build

```bash
npm run build
```

Generates static content in the `build` directory for deployment.

### Documentation Structure

The docs are organised into several sections:

- **Project Overview** – background and project goals
- **Development Workflow** – task management and GitHub practices
- **Coding Conventions** – naming and style guidelines
- **Frontend Development** – React Native standards
- **Backend Development** – Node.js/Express guidelines
- **Moodle Integration** – using Moodle as the content platform

### Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command builds the website and pushes to the `gh-pages` branch.

