import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Consulting from './components/Consulting';
import Technology from './components/Technology';
import Outsourcing from './components/Outsourcing';
import AIInnovation from './components/AIInnovation';
import Blog from './components/blog/Blog';
import BlogListPage from './components/blog/BlogListPage';
import BlogDetailPage from './components/blog/BlogDetailPage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [blogPostId, setBlogPostId] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      
      if (hash.startsWith('blog/')) {
        // Blog detail page
        const postId = hash.split('/')[1];
        setBlogPostId(postId);
        setCurrentRoute('blog-detail');
      } else if (hash === 'blog') {
        // Blog list page
        setCurrentRoute('blog-list');
        setBlogPostId('');
      } else {
        // Main page
        setCurrentRoute('main');
        setBlogPostId('');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render blog detail page
  if (currentRoute === 'blog-detail' && blogPostId) {
    return (
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Header />
        <Box component="main">
          <BlogDetailPage postId={blogPostId} />
        </Box>
        <Footer />
      </Box>
    );
  }

  // Render blog list page
  if (currentRoute === 'blog-list') {
    return (
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Header />
        <Box component="main">
          <BlogListPage />
        </Box>
        <Footer />
      </Box>
    );
  }

  // Render main page (default)
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Header />
      <Box component="main">
        <Hero />
        <Consulting />
        <Technology />
        <Outsourcing />
        <AIInnovation />
        <Blog />
        <About />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
