# Quick Docker Commands

## Local Development & Testing

### Build and run locally:
```powershell
docker build -t navya-website .
docker run -p 8080:80 navya-website
```
Visit: http://localhost:8080

### Using Docker Compose:
```powershell
docker-compose up -d
docker-compose logs -f
docker-compose down
```

## Pull from GitHub Container Registry

### After GitHub Actions builds the image:
```powershell
# Pull latest
docker pull ghcr.io/yokumar9780-github/navya-solutions-website:latest

# Run it
docker run -d -p 8080:80 --name navya-website ghcr.io/yokumar9780-github/navya-solutions-website:latest
```

## Deploy to Server

### Copy this to your server and run:
```bash
docker pull ghcr.io/yokumar9780-github/navya-solutions-website:latest
docker stop navya-website 2>/dev/null || true
docker rm navya-website 2>/dev/null || true
docker run -d \
  -p 80:80 \
  --name navya-website \
  --restart unless-stopped \
  ghcr.io/yokumar9780-github/navya-solutions-website:latest
```

## Useful Commands

```powershell
# View running containers
docker ps

# View logs
docker logs navya-website -f

# Stop container
docker stop navya-website

# Remove container
docker rm navya-website

# Remove image
docker rmi navya-website
```
