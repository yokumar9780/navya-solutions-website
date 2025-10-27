import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Container, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navLinks } from '../constants';
import type { NavLink as NavLinkType } from '../types';
import { colors } from '../theme';

const StyledAppBar = styled(AppBar)<{ $isScrolled: boolean }>`
  background-color: ${props => props.$isScrolled ? 'rgba(10, 37, 64, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.$isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const Logo = styled.a<{ $isScrolled: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: ${colors.secondary};
  }
`;

const StyledNavLink = styled.a<{ $isActive: boolean; $isScrolled: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$isActive ? colors.secondary : '#FFFFFF'};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${colors.secondary};
  }
`;

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Check if we're on a blog page
      const currentHash = window.location.hash;
      if (currentHash.startsWith('#blog')) {
        setActiveSection('blog');
        return;
      }
      
      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentSection = 'home';
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash.startsWith('#blog')) {
        setActiveSection('blog');
      } else {
        handleScroll();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial active section
    handleHashChange();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    // Check if we're on a blog page
    const currentHash = window.location.hash;
    const isBlogPage = currentHash.startsWith('#blog');
    
    if (id === 'blog') {
      // Navigate to blog list page
      window.location.hash = '#blog';
      setIsMenuOpen(false);
      return;
    }
    
    if (isBlogPage) {
      // If on blog page, navigate to main page first, then scroll
      window.location.hash = '';
      // Wait for page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on main page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <StyledAppBar position="sticky" $isScrolled={isScrolled} elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 80 }}>
            <Logo href="#home" onClick={(e) => { 
              e.preventDefault(); 
              window.location.hash = '';
              setTimeout(() => {
                const element = document.getElementById('home');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }} $isScrolled={isScrolled}>
              Navya Solutions AB
            </Logo>
            
            <Box sx={{ flexGrow: 1 }} />
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <StyledNavLink
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleScrollTo(link.id); }}
                  $isActive={activeSection === link.id}
                  $isScrolled={isScrolled}
                >
                  {link.title}
                </StyledNavLink>
              ))}
              <Button 
                variant="contained" 
                onClick={() => handleScrollTo('contact')}
                sx={{ 
                  ml: 2,
                  backgroundColor: colors.secondary,
                  color: '#FFFFFF',
                  fontWeight: 600,
                  '&:hover': { 
                    backgroundColor: colors.primary 
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>

            <IconButton
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: '#FFFFFF'
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton
                  onClick={() => handleScrollTo(link.id)}
                  selected={activeSection === link.id}
                >
                  <ListItemText primary={link.title} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <Button 
                fullWidth
                variant="contained"
                onClick={() => handleScrollTo('contact')}
                sx={{
                  backgroundColor: colors.secondary,
                  color: '#FFFFFF',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: colors.primary
                  }
                }}
              >
                Contact Us
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
