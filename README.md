# Navya Solutions AB - Corporate Website

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/MUI-6.1.0-007FFF.svg)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](https://www.docker.com/)

## 📖 About This Project

A modern, production-ready corporate website for **Navya Solutions AB**, a leading IT consulting firm based in Sweden. This project showcases the company's comprehensive services in digital transformation, cloud strategy, enterprise technology solutions, IT outsourcing, and AI innovation.

Built with cutting-edge technologies, this website serves as both a marketing platform and a technical demonstration of modern web development best practices. It features a responsive design that adapts seamlessly across all devices, an integrated blog system for thought leadership content, and comprehensive SEO optimization to maximize online visibility.

### What This Website Offers

The website provides visitors with:
- **Strategic Consulting Services** - Digital transformation, business process reengineering, IT strategy, and product evaluation
- **Technology Solutions** - Cloud migration, cybersecurity, data governance, and enterprise software consulting
- **IT Outsourcing** - Offshore development, managed IT services, and dedicated technical teams
- **AI Innovation** - Predictive analytics, natural language processing, computer vision, and generative AI solutions
- **Company Information** - About us, core values, vision, and contact information
- **Blog & Resources** - In-depth articles on IT consulting, technology trends, and industry insights

### Technical Highlights

This is a modern single-page application (SPA) that leverages:
- **Component-Based Architecture** - Modular, reusable React components with TypeScript for type safety
- **Material Design System** - Consistent UI/UX using Material-UI with custom theming
- **Dark Mode Support** - Automatic theme switching for enhanced user experience
- **Hash-Based Routing** - Client-side navigation without page reloads for blog and sections
- **SEO-First Approach** - Comprehensive meta tags, structured data, and sitemap for search visibility
- **Performance Optimized** - Code splitting, lazy loading, and optimized assets for fast load times
- **Docker Containerized** - Multi-stage builds with Nginx for production deployment
- **PWA Ready** - Progressive Web App capabilities with service worker support

This project demonstrates enterprise-grade web development practices and can serve as a reference implementation for corporate websites requiring high performance, excellent SEO, and professional design.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Material-UI
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Built-in light/dark theme toggle for better user experience
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap for search engines
- **Blog System**: Dynamic blog with individual article pages and hash-based routing
- **Performance**: Lightning-fast load times with Vite build system
- **Docker Ready**: Containerized deployment with multi-stage builds and Nginx
- **PWA Support**: Progressive Web App capabilities with manifest and service worker ready
- **Styled Components**: Custom styling with styled-components for component isolation

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [SEO & Marketing](#seo--marketing)
- [Contributing](#contributing)
- [Support](#support)

## ⚡ Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Docker** (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yokumar9780-github/navya-solutions-website.git
   cd navya-solutions-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   # Create .env.local file for Gemini API key (if using AI features)
   echo "GEMINI_API_KEY=your_api_key_here" > .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 🛠️ Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Development Server

The development server runs on `http://localhost:3000` with Hot Module Replacement (HMR) enabled. Changes to your code will be reflected instantly in the browser.

### Adding New Components

Components are located in the `components/` directory. Follow the existing pattern:

```tsx
import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography } from '@mui/material';
import { colors } from '../theme';

const Section = styled(Box)`
  padding: 80px 0;
  background-color: ${colors.light};
`;

const YourComponent: React.FC = () => {
  return (
    <Section id="your-section">
      <Container maxWidth="lg">
        <Typography variant="h2">Your Content</Typography>
      </Container>
    </Section>
  );
};

export default YourComponent;
```

### Theme Customization

Edit `theme.ts` to customize colors, typography, and component styles:

```typescript
export const colors = {
  primary: '#0A2540',    // Dark blue
  secondary: '#00AEEF',  // Bright blue
  accent: '#00D4FF',     // Cyan
  light: '#F6F9FC',      // Light gray
  dark: '#1A1A1A',       // Almost black
};
```

### Dark Mode

The website includes a built-in dark mode toggle. The theme automatically switches between light and dark modes using Material-UI's theming system and React Context API.

## 🏗️ Building

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build outputs to the `dist/` directory with:
- Minified and optimized JavaScript bundles
- CSS extraction and optimization
- Asset optimization and compression
- Code splitting for better performance

### Build Analysis

To analyze bundle size:

```bash
npm run build -- --mode analyze
```

## 🚢 Deployment

### Docker Deployment (Recommended)

#### Using Docker Compose

1. **Build and run**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   
   Navigate to `http://localhost:8080`

3. **Stop the container**
   ```bash
   docker-compose down
   ```

#### Using Docker directly

1. **Build the image**
   ```bash
   docker build -t navya-solutions-website .
   ```

2. **Run the container**
   ```bash
   docker run -p 8080:80 navya-solutions-website
   ```

3. **Access the application**
   
   Navigate to `http://localhost:8080`

### Traditional Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your web server (Nginx, Apache, etc.)

3. **Configure your server** for SPA routing (redirect all routes to `index.html`)

### Nginx Configuration

The project includes a production-ready `nginx.conf` with:
- Gzip compression for text assets
- Security headers (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- Long-term caching for static assets (1 year)
- SPA routing support
- Health check endpoint

## 📁 Project Structure

```
navya-solutions-website/
├── components/              # React components
│   ├── About.tsx           # About section
│   ├── AIInnovation.tsx    # AI services section
│   ├── Consulting.tsx      # Consulting services
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Navigation header with dark mode toggle
│   ├── Hero.tsx            # Hero/landing section
│   ├── Outsourcing.tsx     # Outsourcing services
│   ├── Technology.tsx      # Technology solutions
│   └── blog/               # Blog system
│       ├── Blog.tsx        # Blog preview component
│       ├── BlogListPage.tsx     # Blog listing page
│       ├── BlogDetailPage.tsx   # Individual blog post page
│       └── posts/          # Blog post content files
│           ├── index.ts    # Post exports
│           └── post[1-9].tsx    # Individual posts
├── public/                 # Static assets
│   ├── favicon.svg         # Browser icon
│   ├── apple-touch-icon.svg     # iOS icon
│   ├── site.webmanifest   # PWA manifest
│   ├── robots.txt          # Search engine crawler rules
│   ├── sitemap.xml         # SEO sitemap
│   └── browserconfig.xml  # Microsoft browser config
├── App.tsx                 # Main app component with routing
├── index.tsx               # Entry point with theme provider
├── theme.ts                # MUI theme configuration
├── constants.ts            # App-wide constants
├── types.ts                # TypeScript type definitions
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Docker orchestration
├── nginx.conf              # Production Nginx config
├── package.json            # Dependencies and scripts
├── BLOG_GUIDE.md           # Blog management guide
├── SEO_GUIDE.md            # SEO optimization guide
└── SEO_CHECKLIST.md        # SEO action plan
```

## 🔧 Tech Stack

### Core Technologies

- **[React 19.2.0](https://reactjs.org/)** - UI library with latest features
- **[TypeScript 5.8.2](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 6.2.0](https://vitejs.dev/)** - Next-generation build tool
- **[Material-UI 6.1.0](https://mui.com/)** - React component library
- **[styled-components 6.1.0](https://styled-components.com/)** - CSS-in-JS styling

### Styling & UI

- **Material-UI Components** - Buttons, Cards, Grid, Typography, etc.
- **Material-UI Icons** - Comprehensive icon set
- **styled-components** - Component-level styling with theme support
- **Emotion** - CSS-in-JS library (MUI peer dependency)

### Build & Development

- **Vite** - Fast dev server with HMR
- **TypeScript** - Static type checking
- **ESLint** - Code linting (configured)
- **npm** - Package management

### Deployment

- **Docker** - Containerization
- **Nginx** - Production web server
- **Docker Compose** - Multi-container orchestration

## 📈 SEO & Marketing

### Search Engine Optimization

The website is fully optimized for search engines:

- **Meta Tags**: Comprehensive title, description, and keywords
- **Open Graph**: Facebook and LinkedIn sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Schema.org markup (Organization, Professional Service, ItemList)
- **Sitemap**: Complete XML sitemap with all pages and blog posts
- **Robots.txt**: Search engine crawler guidance
- **Canonical URLs**: Proper URL canonicalization

### Documentation

- **[SEO_GUIDE.md](SEO_GUIDE.md)** - Comprehensive 500+ line SEO strategy and implementation guide
- **[SEO_CHECKLIST.md](SEO_CHECKLIST.md)** - Pre-launch and post-launch SEO tasks with KPIs

### Target Keywords

Primary keywords for search ranking:
- IT consulting
- Technology consulting
- Digital transformation
- Cloud migration
- IT outsourcing
- AI services
- Enterprise software consulting

## 📝 Blog System

### Managing Blog Posts

The website includes a fully functional blog system with individual post pages.

- **Blog List**: `#blog` - Shows all published articles
- **Blog Detail**: `#blog/post1` - Individual article pages
- **Content Management**: Edit posts in `components/blog/posts/`

For detailed instructions, see [BLOG_GUIDE.md](BLOG_GUIDE.md)

### Adding New Posts

1. Create a new file in `components/blog/posts/` (e.g., `post10.tsx`)
2. Follow the existing post structure with metadata and content
3. Export the post in `components/blog/posts/index.ts`
4. Update sitemap.xml with the new post URL

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
   ```bash
   npm run dev
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of changes"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

### Code Style

- Use TypeScript for all new code
- Follow the existing component structure
- Use Material-UI components where possible
- Use styled-components for custom styling
- Write clear, descriptive commit messages
- Add comments for complex logic

### Component Guidelines

- Keep components focused and single-purpose
- Use React functional components with hooks
- Implement proper TypeScript types
- Ensure responsive design (mobile, tablet, desktop)
- Test in both light and dark modes

## 🐛 Support

### Getting Help

- **Documentation**: Check [SEO_GUIDE.md](SEO_GUIDE.md) and [BLOG_GUIDE.md](BLOG_GUIDE.md)
- **Issues**: Open an issue on GitHub for bugs or feature requests
- **Email**: Contact the maintainers for urgent matters

### Common Issues

**Build fails with type errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use:**
```bash
# Use a different port
npm run dev -- --port 3001
```

**Docker build fails:**
```bash
# Clear Docker cache
docker system prune -a
docker-compose build --no-cache
```

## 📄 License

This project is proprietary and confidential. All rights reserved by Navya Solutions AB.

## 👥 Maintainers

**Navya Solutions AB**
- Website: [https://navyasolutions.se/](https://navyasolutions.se/)
- Email: Contact through website form

---

**Built with ❤️ by Navya Solutions AB** | Empowering enterprises through technology and innovation