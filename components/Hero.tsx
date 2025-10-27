import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Button } from '@mui/material';
import { colors } from '../theme';

const HeroSection = styled(Box)`
  background-color: ${colors.light};
  padding-top: 96px;
  padding-bottom: 80px;
  
  @media (min-width: 768px) {
    padding-top: 128px;
    padding-bottom: 112px;
  }
`;

const HeroTitle = styled(Typography)`
  && {
    font-weight: 800;
    color: ${colors.primary};
    line-height: 1.2;
    text-align: center;
    
    .highlight {
      color: ${colors.secondary};
    }
  }
`;

const HeroDescription = styled(Typography)`
  && {
    margin-top: 24px;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    color: #666;
    text-align: center;
  }
`;

const ButtonGroup = styled(Box)`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const StyledButton = styled(Button)`
  && {
    padding: 12px 32px;
    font-size: 1.125rem;
    font-weight: 600;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Hero: React.FC = () => {
    
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home" component="section">
      <Container maxWidth="lg">
        <HeroTitle variant="h1">
          Driving Business Transformation
          <br />
          <span className="highlight">Through Intelligent Technology</span>
        </HeroTitle>
        <HeroDescription variant="h6">
          Partner with us to navigate your digital transformation. We deliver visionary IT strategy, bespoke application development, and transformative AI solutions that put your business first.
        </HeroDescription>
        <ButtonGroup>
          <StyledButton 
            variant="contained" 
            color="secondary"
            onClick={() => handleScrollTo('contact')}
          >
            Let's Collaborate
          </StyledButton>
          <StyledButton 
            variant="outlined" 
            color="primary"
            onClick={() => handleScrollTo('consulting')}
            sx={{
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              }
            }}
          >
            Explore Our Services
          </StyledButton>
        </ButtonGroup>
      </Container>
    </HeroSection>
  );
};

export default Hero;
