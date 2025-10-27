# Blog Component - Usage Guide

## Overview
The Blog component displays articles related to Strategic Consulting Services topics. It features category filtering, responsive card layouts, and **full blog detail pages** that open when users click on any article card.

## Features
- **Category Filtering**: Filter articles by topic (IT Strategy, Cloud, Security, etc.)
- **Responsive Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile
- **Card Hover Effects**: Smooth transitions and shadow effects
- **Blog Detail Pages**: Click any card to view the full article
- **Back Navigation**: Easy navigation back to the blog list
- **Meta Information**: Publication date and read time for each article
- **Icon Integration**: Category-specific icons from MUI icons
- **Auto-generated Content**: Comprehensive article content generated automatically

## Components

### Blog.tsx
- Main blog listing component
- Handles category filtering
- Shows blog cards in grid layout
- Manages state for selected blog post
- Switches between list and detail views

### BlogDetail.tsx
- Individual blog article page
- Displays full article content
- Shows hero image with category icon
- Includes back button to return to list
- Renders HTML content with proper styling
- Auto-generates comprehensive content if not provided

## Adding New Blog Posts

### Basic Post (Auto-generated Content)

Edit the `blogPosts` array in `Blog.tsx`:

```typescript
const blogPosts: BlogPost[] = [
  {
    id: '10', // Unique ID
    title: 'Your Article Title Here',
    excerpt: 'A brief summary of your article (2-3 sentences)',
    category: 'IT Strategy & Transformation', // Must match a category
    icon: <BusinessCenter />, // MUI icon component
    date: '2025-01-20', // Format: YYYY-MM-DD
    readTime: '5 min read' // Estimated reading time
  },
  // ... existing posts
];
```

The blog detail page will automatically generate comprehensive content based on the category and title.

### Custom Content Post

To add custom HTML content to a blog post, add a `content` field:

```typescript
{
  id: '10',
  title: 'Your Article Title',
  excerpt: 'Brief summary...',
  category: 'IT Strategy & Transformation',
  icon: <BusinessCenter />,
  date: '2025-01-25',
  readTime: '5 min read',
  content: `
    <h2>Your Custom Heading</h2>
    <p>Your custom paragraph content with <strong>bold text</strong> and <em>italic text</em>.</p>
    
    <h3>Subheading</h3>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
    
    <blockquote>
      "An inspiring quote"
    </blockquote>
    
    <p>More content here...</p>
  `
}
```

### Supported HTML Elements in Content

The BlogDetail component supports rich HTML content with styled elements:
- **Headings**: `<h2>`, `<h3>` (automatically styled)
- **Paragraphs**: `<p>` (with proper line height and spacing)
- **Lists**: `<ul>`, `<ol>`, `<li>` (bulleted and numbered)
- **Blockquotes**: `<blockquote>` (with colored left border)
- **Code**: `<code>` (inline code snippets)
- **Pre-formatted**: `<pre><code>` (code blocks)
- **Emphasis**: `<strong>`, `<em>`, `<b>`, `<i>`
- **Links**: `<a href="">` (automatically styled)

## Available Categories

Current categories (must match exactly):
- `IT Strategy & Transformation`
- `Business Process Reengineering`
- `Product Evaluation`
- `Cloud Strategy`
- `Cybersecurity`
- `Data Governance`
- `Team Building`

### 3. Icon Options

Available icons from `@mui/icons-material`:
- `<BusinessCenter />` - IT Strategy & Business
- `<FlashOn />` - Process Optimization
- `<Search />` - Evaluation & Analysis
- `<Cloud />` - Cloud Services
- `<Security />` - Cybersecurity
- `<Storage />` - Data & Storage
- `<Group />` - Team & People
- `<CheckCircle />` - Success & Validation

### 4. Adding a New Category

To add a new category:

1. Add to the `categories` array:
```typescript
const categories = [
  'All',
  'IT Strategy & Transformation',
  // ... existing categories
  'Your New Category', // Add here
];
```

2. Import a new icon if needed:
```typescript
import { BusinessCenter, YourNewIcon } from '@mui/icons-material';
```

3. Add blog posts with the new category

## Customization

### Styling
All styled components use the theme colors from `theme.ts`:
- Primary: `${colors.primary}` - #0A2540
- Secondary: `${colors.secondary}` - #00AEEF
- Light: `${colors.light}` - #F6F9FC

### Card Layout
Modify the Grid spacing in the component:
```typescript
<Grid container spacing={4}> // Change spacing value
  <Grid item xs={12} md={6} lg={4}> // Adjust breakpoints
```

### Image Backgrounds
Currently using gradient backgrounds with icons. To add real images:

1. Add `image` field to BlogPost interface (already optional)
2. Modify BlogImage component:
```typescript
<BlogImage
  image={post.image || undefined}
  sx={{
    backgroundImage: post.image ? undefined : 'linear-gradient(...)',
    // ... rest of styles
  }}
>
```

## Integration

The Blog component is integrated into:
1. **constants.ts** - Added to navigation links
2. **App.tsx** - Imported and rendered between AIInnovation and About
3. **Header.tsx** - Automatically picks up from navLinks

## Future Enhancements

Potential additions:
- **Search Functionality**: Add a search bar to filter by title/content
- **Pagination**: Display posts in pages instead of all at once
- **Blog Detail Page**: Create individual pages for each article
- **Tags**: Add multiple tags per post for more granular filtering
- **Author Information**: Add author names and avatars
- **Social Sharing**: Add share buttons for LinkedIn, Twitter, etc.
- **CMS Integration**: Connect to a headless CMS (Contentful, Strapi, etc.)
- **Markdown Support**: Render full articles from markdown files

## Example: Adding a Blog Post

```typescript
{
  id: '10',
  title: 'Microservices Architecture: Design Patterns for Enterprise Scale',
  excerpt: 'Explore proven design patterns for building resilient, scalable microservices that power modern enterprise applications.',
  category: 'IT Strategy & Transformation',
  icon: <BusinessCenter />,
  date: '2025-01-25',
  readTime: '10 min read'
}
```

## Navigation
The Blog section appears in the main navigation between "AI Innovation" and "About Us".
