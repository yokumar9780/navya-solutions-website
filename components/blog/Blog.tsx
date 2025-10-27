import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { colors } from '../../theme';

const Section = styled(Box)`
  padding: 80px 0;
  background-color: ${colors.light};
  
  @media (min-width: 768px) {
    padding: 112px 0;
  }
`;

const SectionTitle = styled(Typography)`
  && {
    font-weight: 800;
    color: ${colors.primary};
    text-align: center;
    margin-bottom: 16px;
  }
`;

const SectionDescription = styled(Typography)`
  && {
    max-width: 672px;
    margin: 0 auto 40px;
    color: #666;
    text-align: center;
  }
`;

const Blog: React.FC = () => {
  const handleViewAllBlogs = () => {
    window.location.hash = '#blog';
  };

  return (
    <Section id="blog">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          Insights & Articles
        </SectionTitle>
        <SectionDescription variant="h6">
          Expert perspectives on IT strategy, digital transformation, and enterprise technology trends.
        </SectionDescription>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={handleViewAllBlogs}
            sx={{
              backgroundColor: colors.secondary,
              color: '#FFFFFF',
              px: 4,
              py: 1.5,
              fontSize: '1.125rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: colors.primary
              }
            }}
          >
            View All Articles
          </Button>
        </Box>
      </Container>
    </Section>
  );
};

export default Blog;
