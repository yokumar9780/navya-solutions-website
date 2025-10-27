import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { 
  CalendarToday, AccessTime, ArrowForward
} from '@mui/icons-material';
import { colors } from '../../theme';
import { allPosts } from './posts';

const Section = styled(Box)`
  padding: 80px 0;
  background-color: ${colors.light};
  min-height: 100vh;
  
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
    margin: 0 auto 64px;
    color: #666;
    text-align: center;
  }
`;

const FilterContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 48px;
`;

const BlogCard = styled(Card)`
  && {
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      transform: translateY(-8px);
    }
  }
`;

const BlogImage = styled(CardMedia)`
  && {
    height: 240px;
    background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  }
`;

const BlogContent = styled(CardContent)`
  && {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;
  }
`;

const CategoryChip = styled(Chip)`
  && {
    background-color: ${colors.secondary};
    color: white;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

const BlogTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 12px;
  }
`;

const BlogExcerpt = styled(Typography)`
  && {
    color: #666;
    margin-bottom: 16px;
    flex-grow: 1;
  }
`;

const BlogMeta = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #999;
  font-size: 0.875rem;
  margin-bottom: 16px;
`;

const MetaItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ReadMoreButton = styled(Button)`
  && {
    color: ${colors.secondary};
    padding: 0;
    justify-content: flex-start;
    
    &:hover {
      background-color: transparent;
      color: ${colors.primary};
    }
  }
`;

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  icon: React.ReactNode;
  date: string;
  readTime: string;
  content?: string;
}

const blogPosts: BlogPost[] = allPosts;

const categories = [
  'All',
  'IT Strategy & Transformation',
  'Business Process Reengineering',
  'Product Evaluation',
  'Cloud Strategy',
  'Cybersecurity',
  'Data Governance',
  'Team Building'
];

const BlogListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handlePostClick = (postId: string) => {
    window.location.hash = `#blog/${postId}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          Insights & Articles
        </SectionTitle>
        <SectionDescription variant="h6">
          Expert perspectives on IT strategy, digital transformation, and enterprise technology trends.
        </SectionDescription>

        <FilterContainer>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                backgroundColor: selectedCategory === category ? colors.secondary : 'white',
                color: selectedCategory === category ? 'white' : colors.primary,
                border: `1px solid ${selectedCategory === category ? colors.secondary : '#ddd'}`,
                fontWeight: selectedCategory === category ? 600 : 500,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: selectedCategory === category ? colors.secondary : colors.light
                }
              }}
            />
          ))}
        </FilterContainer>

        <Grid container spacing={4}>
          {filteredPosts.map((post) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post.id}>
              <BlogCard onClick={() => handlePostClick(post.id)}>
                <BlogImage
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& svg': {
                      fontSize: 80,
                      color: 'white',
                      opacity: 0.9
                    }
                  }}
                >
                  {post.icon}
                </BlogImage>
                <BlogContent>
                  <CategoryChip label={post.category} size="small" />
                  <BlogTitle variant="h6">{post.title}</BlogTitle>
                  <BlogMeta>
                    <MetaItem>
                      <CalendarToday sx={{ fontSize: 16 }} />
                      <span>{formatDate(post.date)}</span>
                    </MetaItem>
                    <MetaItem>
                      <AccessTime sx={{ fontSize: 16 }} />
                      <span>{post.readTime}</span>
                    </MetaItem>
                  </BlogMeta>
                  <BlogExcerpt variant="body2">{post.excerpt}</BlogExcerpt>
                  <ReadMoreButton endIcon={<ArrowForward />}>
                    Read More
                  </ReadMoreButton>
                </BlogContent>
              </BlogCard>
            </Grid>
          ))}
        </Grid>

        {filteredPosts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No articles found in this category.
            </Typography>
          </Box>
        )}
      </Container>
    </Section>
  );
};

export default BlogListPage;
export { blogPosts };
