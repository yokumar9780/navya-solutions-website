# 🚀 Deployment Checklist

Use this checklist to deploy your website with parallel GitHub Pages and Docker deployments.

## ✅ Pre-Deployment Steps

### 1. Install Dependencies
```powershell
npm install
```
This installs the `gh-pages` package needed for local deployments.

### 2. Test Locally (Optional)
```powershell
# Test development build
npm run dev

# Test production build
npm run build
npm run preview
```

### 3. Test Docker Locally (Optional)
```powershell
# Test with Docker Compose
docker-compose up -d
# Visit http://localhost:8080
docker-compose down
```

---

## 🔐 GitHub Configuration

### One-Time Setup:

#### Enable GitHub Pages:
- [ ] Go to your repository on GitHub
- [ ] Click **Settings** → **Pages**
- [ ] Under "Source", select **GitHub Actions** (not branch)

#### Add API Key (Optional):
- [ ] Go to **Settings** → **Secrets and variables** → **Actions**
- [ ] Click **New repository secret**
- [ ] Name: `GEMINI_API_KEY`
- [ ] Value: Your Gemini API key
- [ ] Click **Add secret**

#### Make Container Registry Public (Optional):
- [ ] Go to your repository
- [ ] Click **Packages** (right sidebar)
- [ ] Click on `navya-solutions-website` package
- [ ] Click **Package settings**
- [ ] Scroll to **Danger Zone**
- [ ] Change visibility to **Public** (so you can pull without authentication)

---

## 🚀 Deploy!

### Step 1: Commit Changes
```powershell
git add .
git commit -m "Add parallel GitHub Pages and Docker deployment"
```

### Step 2: Push to GitHub
```powershell
git push origin main
```

### Step 3: Watch the Magic ✨
- [ ] Go to your GitHub repository
- [ ] Click **Actions** tab
- [ ] You should see **TWO workflows** running:
  - ✅ "Deploy to GitHub Pages"
  - ✅ "Build and Push Docker Image"

### Step 4: Verify Deployments

#### Check GitHub Pages:
- [ ] Wait for "Deploy to GitHub Pages" to complete (~2-3 min)
- [ ] Visit: `https://yokumar9780-github.github.io/navya-solutions-website/`
- [ ] Verify the site loads correctly

#### Check Docker Image:
- [ ] Wait for "Build and Push Docker Image" to complete (~3-5 min)
- [ ] Go to repository → **Packages** (right sidebar)
- [ ] You should see `navya-solutions-website` package

---

## 🧪 Test Docker Deployment

### Pull and Run:
```powershell
# Pull the image
docker pull ghcr.io/yokumar9780-github/navya-solutions-website:latest

# Run it
docker run -d -p 8080:80 --name navya-test ghcr.io/yokumar9780-github/navya-solutions-website:latest

# Visit http://localhost:8080

# Clean up
docker stop navya-test
docker rm navya-test
```

---

## 🎯 Success Criteria

Your deployment is successful if:

- [ ] ✅ Both GitHub Actions workflows completed successfully
- [ ] ✅ GitHub Pages site is live and loading correctly
- [ ] ✅ Docker image is available in GitHub Container Registry
- [ ] ✅ Docker container runs and serves the website
- [ ] ✅ All assets (images, CSS, JS) load properly on both deployments
- [ ] ✅ Navigation works on both deployments

---

## 🔄 Future Deployments

After initial setup, deploying is simple:

```powershell
# Make your changes
# ...

# Commit and push
git add .
git commit -m "Your changes"
git push origin main
```

**Both deployments will automatically update!** 🎉

---

## 🐛 Troubleshooting

### GitHub Pages shows 404:
- Check if you selected "GitHub Actions" in Pages settings (not branch)
- Verify the workflow completed successfully
- Wait a few minutes and hard refresh (Ctrl+Shift+R)

### Docker image pull fails:
- Make sure the package is public, or login first:
  ```powershell
  echo YOUR_GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
  ```

### Assets not loading on GitHub Pages:
- Verify `vite.config.ts` has the base path configuration
- Check browser console for 404 errors
- Verify workflow uses `VITE_BASE_PATH=/navya-solutions-website/`

### Docker container won't start:
- Check logs: `docker logs navya-website`
- Verify port 8080 is not in use: `netstat -ano | findstr :8080`

---

## 📚 Additional Resources

- **Deployment Guide:** See `DEPLOYMENT.md`
- **Visual Flow:** See `PARALLEL_DEPLOYMENT.md`
- **Summary:** See `DEPLOYMENT_SUMMARY.md`

---

## ✅ Checklist Complete!

Once all items are checked, you're ready to deploy! 🚀

**Quick Deploy Command:**
```powershell
npm install; git add .; git commit -m "Deploy parallel GitHub Pages + Docker"; git push origin main
```

Then watch the Actions tab for both workflows to complete! 🎉
