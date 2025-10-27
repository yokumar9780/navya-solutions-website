# Environment Variables Guide

This project uses environment variables to configure the base path for different deployment scenarios.

## 📁 Environment Files

### `.env` (Main Configuration)
The default environment file used for local development and GitHub Pages deployment.

```bash
# Base path for the application
VITE_BASE_PATH=/navya-solutions-website/
```

**When to use:** Local development with GitHub Pages deployment target

### `.env.docker` (Docker Configuration)
Alternative environment file for Docker deployments.

```bash
# Base path for Docker deployment
VITE_BASE_PATH=/
```

**When to use:** Building Docker images or running locally with root path

### `.env.example` (Template)
Example template showing available environment variables.

**When to use:** Reference for new developers or when setting up a new environment

---

## 🔧 Configuration Options

### `VITE_BASE_PATH`

Controls the base URL path for all assets and routing.

**Possible Values:**
- `/navya-solutions-website/` - For GitHub Pages deployment (subdirectory)
- `/` - For Docker, root domain, or custom hosting (root directory)
- `/any-path/` - For custom subdirectory deployments

**How it works:**
```typescript
// In vite.config.ts
base: env.VITE_BASE_PATH || '/navya-solutions-website/'
```

---

## 🚀 Usage by Deployment Type

### Local Development
```bash
# Default (GitHub Pages mode)
npm run dev

# Or for root path mode
echo "VITE_BASE_PATH=/" > .env
npm run dev
```

### GitHub Pages Deployment
```bash
# Uses VITE_BASE_PATH=/navya-solutions-website/
# This is set automatically in .github/workflows/deploy.yml
npm run build
npm run deploy
```

### Docker Deployment
```bash
# Uses VITE_BASE_PATH=/
# This is set automatically in Dockerfile and docker-compose.yml
docker-compose up -d

# Or manual build
docker build --build-arg VITE_BASE_PATH=/ -t navya-website .
docker run -p 8080:80 navya-website
```

### Custom Domain Deployment
```bash
# For root domain (e.g., navya-solutions.com)
echo "VITE_BASE_PATH=/" > .env
npm run build

# For subdirectory (e.g., example.com/navya)
echo "VITE_BASE_PATH=/navya/" > .env
npm run build
```

---

## 🔒 Security Notes

### What's in `.gitignore`
The following environment files are **ignored** by git:
- `.env`
- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

### What's committed to git
Only these example/template files are committed:
- `.env.example` - Template for developers
- `.env.docker` - Docker-specific configuration

**Important:** Never commit sensitive API keys or secrets to git!

---

## 🎯 Quick Reference

| Deployment Target | VITE_BASE_PATH | Set in |
|-------------------|----------------|--------|
| **GitHub Pages** | `/navya-solutions-website/` | `.github/workflows/deploy.yml` |
| **Docker** | `/` | `Dockerfile` & `docker-compose.yml` |
| **Local Dev** | From `.env` file | `.env` |
| **Custom Domain** | `/` or `/path/` | `.env` or build command |

---

## 🐛 Troubleshooting

### Assets not loading?
**Problem:** Images, CSS, or JS files return 404 errors.

**Solution:** Check that `VITE_BASE_PATH` matches your deployment:
```bash
# For GitHub Pages
VITE_BASE_PATH=/navya-solutions-website/

# For root domains or Docker
VITE_BASE_PATH=/
```

### Routing not working?
**Problem:** Direct navigation to routes fails.

**Solution:** Ensure your web server (Nginx, Apache, etc.) is configured to serve `index.html` for all routes. This is already configured in the `nginx.conf` for Docker deployments.

### Environment variables not updating?
**Problem:** Changes to `.env` not reflected.

**Solution:** 
1. Stop the dev server (Ctrl+C)
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Restart: `npm run dev`

### Different paths for different environments?
**Solution:** Create environment-specific files:
```bash
# Development
.env.development
VITE_BASE_PATH=/

# Production
.env.production
VITE_BASE_PATH=/navya-solutions-website/
```

Vite automatically loads the correct file based on the mode.

---

## 📚 Additional Resources

- **Vite Environment Variables:** https://vitejs.dev/guide/env-and-mode.html
- **Deployment Guide:** See `DEPLOYMENT.md`
- **Docker Configuration:** See `Dockerfile` and `docker-compose.yml`
- **GitHub Actions:** See `.github/workflows/deploy.yml` and `docker-build.yml`
