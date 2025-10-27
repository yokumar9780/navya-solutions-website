# Deployment Guide

This project supports **dual deployment**: GitHub Pages and Docker - both run **independently and in parallel**!

## 🌐 GitHub Pages Deployment

**Live URL:** `https://yokumar9780-github.github.io/navya-solutions-website/`

### Setup (One-time):
1. Go to your GitHub repository → **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**

### How it works:
- ✅ **Automatic:** Every push to `main` branch triggers deployment
- ✅ **Manual:** Go to **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**
- ✅ Builds with base path `/navya-solutions-website/`
- ✅ Deploys to GitHub Pages automatically

---

## 🐳 Docker Deployment

### Option 1: Local Docker Build & Run

```powershell
# Build locally
docker build -t navya-website .

# Run container
docker run -d -p 8080:80 --name navya-website navya-website
```

Access at: **http://localhost:8080**

### Option 2: Docker Compose (Recommended for Local)

```powershell
# Start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

Access at: **http://localhost:8080**

### Option 3: Pull from GitHub Container Registry (Auto-built)

Every push to `main` automatically builds and pushes a Docker image.

```powershell
# Pull the latest image
docker pull ghcr.io/yokumar9780-github/navya-solutions-website:latest

# Run it
docker run -d -p 8080:80 --name navya-website ghcr.io/yokumar9780-github/navya-solutions-website:latest
```

---

## 🔄 How Both Deployments Work in Parallel

### GitHub Actions Workflows:

1. **`.github/workflows/deploy.yml`** → Deploys to GitHub Pages
   - Builds with `VITE_BASE_PATH=/navya-solutions-website/`
   - Uploads to GitHub Pages

2. **`.github/workflows/docker-build.yml`** → Builds Docker image
   - Builds with `VITE_BASE_PATH=/`
   - Pushes to GitHub Container Registry

**Both workflows trigger on the same push** but build with different configurations!

### Base Path Magic:

The `vite.config.ts` uses environment variables:
```typescript
base: process.env.VITE_BASE_PATH || '/navya-solutions-website/'
```

- **GitHub Pages build:** Sets `VITE_BASE_PATH=/navya-solutions-website/`
- **Docker build:** Sets `VITE_BASE_PATH=/`
- **Default (local dev):** Uses `/navya-solutions-website/`

---

## 🚀 Deploy to Production Servers

### Deploy to Any Linux Server:

```bash
# Pull latest image
docker pull ghcr.io/yokumar9780-github/navya-solutions-website:latest

# Stop old container (if exists)
docker stop navya-website 2>/dev/null || true
docker rm navya-website 2>/dev/null || true

# Run new container
docker run -d \
  -p 80:80 \
  --name navya-website \
  --restart unless-stopped \
  ghcr.io/yokumar9780-github/navya-solutions-website:latest
```

Your site will be live on your server's IP or domain!

---

## ☁️ Deploy to Cloud Platforms

### AWS ECS/Fargate:
```bash
# Tag for ECR
docker tag ghcr.io/yokumar9780-github/navya-solutions-website:latest \
  <account-id>.dkr.ecr.us-east-1.amazonaws.com/navya-website:latest

# Push to ECR
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/navya-website:latest
```

### Google Cloud Run:
```bash
gcloud run deploy navya-website \
  --image ghcr.io/yokumar9780-github/navya-solutions-website:latest \
  --platform managed \
  --port 80 \
  --allow-unauthenticated
```

### Azure Container Instances:
```bash
az container create \
  --resource-group myResourceGroup \
  --name navya-website \
  --image ghcr.io/yokumar9780-github/navya-solutions-website:latest \
  --dns-name-label navya-website \
  --ports 80
```

### DigitalOcean App Platform:
1. Connect your GitHub repository
2. Select "Docker" as deployment type
3. Use image: `ghcr.io/yokumar9780-github/navya-solutions-website:latest`
4. Set port to `80`

---

## 🔧 Local Development

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔑 Environment Variables (Optional)

For Gemini API integration:

### GitHub Actions:
Add `GEMINI_API_KEY` in **Settings** → **Secrets and variables** → **Actions**

### Docker:
```powershell
docker run -d -p 8080:80 \
  -e GEMINI_API_KEY=your_key_here \
  ghcr.io/yokumar9780-github/navya-solutions-website:latest
```

### Local Development:
Create `.env.local`:
```
GEMINI_API_KEY=your_key_here
```

---

## 📊 Deployment Summary

| Platform | URL | Triggers | Build Time |
|----------|-----|----------|------------|
| **GitHub Pages** | https://yokumar9780-github.github.io/navya-solutions-website/ | Push to main or manual | ~2-3 min |
| **Docker (GHCR)** | Pull & run anywhere | Push to main or manual | ~3-5 min |
| **Local Docker** | http://localhost:8080 | Manual build | ~2-3 min |

---

## ✅ Next Steps

1. **Install dependencies:**
   ```powershell
   npm install
   ```

2. **Test locally:**
   ```powershell
   npm run dev
   ```

3. **Commit and push:**
   ```powershell
   git add .
   git commit -m "Add parallel GitHub Pages and Docker deployment"
   git push origin main
   ```

4. **Watch the magic:**
   - Go to **Actions** tab in GitHub
   - See both workflows running in parallel! 🎉

Both your GitHub Pages site and Docker image will be ready to use!
