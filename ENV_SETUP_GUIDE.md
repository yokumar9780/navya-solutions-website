# EmailJS Environment Variables Setup Guide

This guide explains how to configure EmailJS credentials for different deployment scenarios.

## 1. Local Development

### Using .env.local (Recommended)

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your EmailJS credentials:
   ```bash
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
   VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456
   ```

3. Restart the dev server:
   ```bash
   npm run dev
   ```

**Note:** `.env.local` is in `.gitignore` and will not be committed.

---

## 2. Docker (Local)

### Option A: Using .env.docker file with docker-compose (Recommended)

1. Edit the `.env.docker` file in the project root:
   ```bash
   VITE_BASE_PATH=/
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
   VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456
   ```

2. Run docker-compose (it will automatically read from `.env.docker`):
   ```bash
   docker-compose up --build
   ```

### Option B: Using .env file with docker-compose

1. Create a `.env` file in the project root (or copy from `.env.local`):
   ```bash
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
   VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456
   ```

2. Run docker-compose (it will automatically read from `.env`):
   ```bash
   docker-compose up --build
   ```

**Note:** docker-compose prefers `.env.docker` (configured via `env_file`), but will fall back to `.env` if variables are not found.

### Option C: Pass variables directly to docker-compose

```bash
VITE_EMAILJS_SERVICE_ID=service_abc1234 \
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678 \
VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456 \
docker-compose up --build
```

### Option D: Using docker build directly

```bash
docker build \
  --build-arg VITE_EMAILJS_SERVICE_ID=service_abc1234 \
  --build-arg VITE_EMAILJS_TEMPLATE_ID=template_xyz5678 \
  --build-arg VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456 \
  -t navya-solutions-website .

docker run -p 8080:80 navya-solutions-website
```

---

## 3. GitHub Actions (Automated Deployments)

### Set GitHub Repository Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these three secrets:

   **Secret 1:**
   - Name: `VITE_EMAILJS_SERVICE_ID`
   - Value: `service_abc1234` (your actual service ID)

   **Secret 2:**
   - Name: `VITE_EMAILJS_TEMPLATE_ID`
   - Value: `template_xyz5678` (your actual template ID)

   **Secret 3:**
   - Name: `VITE_EMAILJS_PUBLIC_KEY`
   - Value: `AbC123XyZ456` (your actual public key)

5. Click **"Add secret"** for each

### Workflows Configured

The following GitHub Actions workflows are now configured to use these secrets:

#### A. GitHub Pages Deployment (`.github/workflows/deploy.yml`)
- Automatically deploys to GitHub Pages when pushing to `master`/`main`
- Uses secrets during build step

#### B. Docker Image Build (`.github/workflows/docker-build.yml`)
- Builds and pushes Docker image to GitHub Container Registry
- Uses secrets as build arguments

### Testing GitHub Actions

After setting up secrets:

1. Push changes to trigger the workflow:
   ```bash
   git add .
   git commit -m "Update workflow with EmailJS secrets"
   git push origin master
   ```

2. Go to **Actions** tab in GitHub to monitor the workflow

3. Check the build logs to ensure no errors

---

## 4. Production Server / CI/CD

### For Other CI/CD Systems (Jenkins, GitLab CI, etc.)

Set environment variables in your CI/CD system:

```bash
export VITE_EMAILJS_SERVICE_ID=service_abc1234
export VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
export VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456

npm run build
```

### For Cloud Platforms (Vercel, Netlify, etc.)

1. **Vercel:**
   - Go to Project Settings → Environment Variables
   - Add each variable with the `VITE_` prefix

2. **Netlify:**
   - Go to Site Settings → Build & Deploy → Environment
   - Add each variable

3. **AWS Amplify:**
   - Go to App Settings → Environment Variables
   - Add each variable

---

## Security Best Practices

✅ **DO:**
- Use GitHub Secrets for CI/CD
- Keep `.env.local` in `.gitignore`
- Use `.env.example` for documentation (with placeholder values)
- Rotate keys if accidentally exposed

❌ **DON'T:**
- Commit `.env.local` to Git
- Share secrets in public repositories
- Hard-code credentials in source files
- Use production keys in development

---

## Troubleshooting

### "Email service not configured yet" message

**Cause:** Environment variables are not loaded

**Solutions:**
- **Local dev:** Check if `.env.local` exists and has correct values
- **Docker:** Ensure `.env` file exists or variables are passed via command line
- **GitHub Actions:** Verify secrets are added in repository settings
- **After changes:** Restart dev server or rebuild Docker image

### Variables not working in Docker

**Issue:** Environment variables must be set at **build time** for Vite apps

**Solution:** Use `--build-arg` flag or docker-compose args (already configured)

### GitHub Actions build succeeds but form doesn't work

**Issue:** Secrets might not be set or have wrong names

**Solution:** 
1. Check secret names match exactly: `VITE_EMAILJS_SERVICE_ID`, etc.
2. Secrets are case-sensitive
3. Re-run the workflow after adding/updating secrets

---

## Quick Reference

### File Modifications Made

1. ✅ `Dockerfile` - Added ARG and ENV for EmailJS variables
2. ✅ `docker-compose.yml` - Added build args for EmailJS variables
3. ✅ `.github/workflows/deploy.yml` - Added secrets for GitHub Pages
4. ✅ `.github/workflows/docker-build.yml` - Added secrets for Docker build
5. ✅ `.env.example` - Already documented with placeholder values
6. ✅ `.env.local` - Created with empty values (user fills in)

### Environment Variable Names

All use the `VITE_` prefix (required for Vite to expose them to client-side code):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## Next Steps

1. ✅ Get your EmailJS credentials from https://www.emailjs.com/
2. ✅ Add credentials to `.env.local` for local development
3. ✅ Add secrets to GitHub repository for CI/CD
4. ✅ Test the contact form locally
5. ✅ Push changes and verify GitHub Actions deployment
6. ✅ Verify form works on deployed site

For detailed EmailJS setup, see `EMAILJS_SETUP.md`.
