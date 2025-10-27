import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Chip, IconButton } from '@mui/material';
import { 
  CalendarToday, AccessTime, ArrowBack,
  BusinessCenter, FlashOn, Search, Cloud, 
  Security, Storage, Group, CheckCircle
} from '@mui/icons-material';
import { colors } from '../../theme';
import { blogPosts } from './BlogListPage';
import type { BlogPost } from './BlogListPage';

const Section = styled(Box)`
  padding: 80px 0;
  background-color: white;
  min-height: 100vh;
  
  @media (min-width: 768px) {
    padding: 112px 0;
  }
`;

const BackButton = styled(IconButton)`
  && {
    margin-bottom: 24px;
    color: ${colors.primary};
    
    &:hover {
      color: ${colors.secondary};
      background-color: ${colors.light};
    }
  }
`;

const HeroImage = styled(Box)`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  border-radius: 12px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & svg {
    font-size: 120px;
    color: white;
    opacity: 0.9;
  }
`;

const CategoryChip = styled(Chip)`
  && {
    background-color: ${colors.secondary};
    color: white;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

const Title = styled(Typography)`
  && {
    font-weight: 800;
    color: ${colors.primary};
    margin-bottom: 24px;
  }
`;

const Meta = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 2px solid ${colors.light};
  color: #999;
`;

const MetaItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Content = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.primary};
    margin-top: 48px;
    margin-bottom: 24px;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colors.primary};
    margin-top: 32px;
    margin-bottom: 16px;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 24px;
  }
  
  ul, ol {
    margin-bottom: 24px;
    padding-left: 32px;
  }
  
  li {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 12px;
  }
  
  blockquote {
    border-left: 4px solid ${colors.secondary};
    padding-left: 24px;
    margin: 32px 0;
    font-style: italic;
    color: #666;
  }
  
  code {
    background-color: ${colors.light};
    padding: 2px 8px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    color: ${colors.primary};
  }
  
  pre {
    background-color: ${colors.light};
    padding: 24px;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 24px;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
`;

interface BlogDetailPageProps {
  postId: string;
}

const getIconComponent = (category: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'IT Strategy & Transformation': <BusinessCenter />,
    'Business Process Reengineering': <FlashOn />,
    'Product Evaluation': <Search />,
    'Cloud Strategy': <Cloud />,
    'Cybersecurity': <Security />,
    'Data Governance': <Storage />,
    'Team Building': <Group />,
  };
  return iconMap[category] || <CheckCircle />;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const getBlogContent = (post: BlogPost): string => {
  if (post.content) return post.content;
  
  return `
    <h2>Introduction</h2>
    <p>In today's rapidly evolving digital landscape, ${post.category.toLowerCase()} has become a critical focus for enterprises seeking to maintain competitive advantage. This comprehensive guide explores the key strategies, challenges, and best practices that organizations need to consider.</p>
    
    <h2>The Current Landscape</h2>
    <p>The transformation of business operations through technology is no longer optional—it's essential for survival. Organizations that fail to adapt to changing market dynamics risk falling behind competitors who embrace innovation and digital transformation.</p>
    
    <blockquote>
      "Digital transformation is not about technology—it's about strategy and new ways of thinking." - Industry Expert
    </blockquote>
    
    <h2>Key Challenges</h2>
    <p>Organizations face several critical challenges when implementing these initiatives:</p>
    <ul>
      <li><strong>Legacy System Integration:</strong> Bridging the gap between old and new technologies requires careful planning and execution.</li>
      <li><strong>Change Management:</strong> Ensuring stakeholder buy-in and managing organizational resistance to change.</li>
      <li><strong>Skill Gaps:</strong> Addressing the shortage of qualified professionals with expertise in emerging technologies.</li>
      <li><strong>Budget Constraints:</strong> Balancing investment requirements with financial realities and demonstrating clear ROI.</li>
      <li><strong>Security Concerns:</strong> Maintaining robust security posture while embracing innovation and new technologies.</li>
    </ul>
    
    <h2>Strategic Approach</h2>
    <p>A successful implementation requires a structured, phased approach:</p>
    
    <h3>1. Assessment and Planning</h3>
    <p>Begin with a thorough assessment of your current state, identifying gaps, opportunities, and priorities. Develop a comprehensive roadmap that aligns with business objectives and stakeholder expectations.</p>
    
    <h3>2. Proof of Concept</h3>
    <p>Start with pilot projects to validate assumptions, identify potential issues, and demonstrate value to stakeholders. This reduces risk and builds confidence in the broader transformation initiative.</p>
    
    <h3>3. Scaling and Optimization</h3>
    <p>Once the proof of concept succeeds, gradually scale the solution across the organization. Continuously monitor performance, gather feedback, and optimize processes based on real-world insights.</p>
    
    <h3>4. Continuous Improvement</h3>
    <p>Establish metrics and KPIs to measure success. Implement feedback loops and iterative improvement processes to ensure the solution evolves with changing business needs.</p>
    
    <h2>Best Practices</h2>
    <p>Based on our experience with numerous enterprise clients, here are the key best practices:</p>
    <ol>
      <li><strong>Executive Sponsorship:</strong> Secure visible support from C-level executives to ensure resources and organizational alignment.</li>
      <li><strong>Clear Communication:</strong> Maintain transparent, regular communication with all stakeholders throughout the transformation journey.</li>
      <li><strong>Agile Methodology:</strong> Embrace iterative development and deployment to enable faster learning and adaptation.</li>
      <li><strong>Training and Support:</strong> Invest in comprehensive training programs to build internal capabilities and ensure adoption.</li>
      <li><strong>Vendor Partnership:</strong> Choose technology partners who understand your business and can provide ongoing support.</li>
    </ol>
    
    <h2>Measuring Success</h2>
    <p>Define clear success metrics from the outset:</p>
    <ul>
      <li>Operational efficiency improvements</li>
      <li>Cost reduction or optimization</li>
      <li>Revenue growth or new revenue streams</li>
      <li>Customer satisfaction scores</li>
      <li>Employee productivity and satisfaction</li>
      <li>Time-to-market for new products or services</li>
    </ul>
    
    <h2>Looking Ahead</h2>
    <p>The future of ${post.category.toLowerCase()} will be shaped by emerging technologies such as artificial intelligence, machine learning, and advanced automation. Organizations that stay ahead of these trends and continuously adapt their strategies will be best positioned for long-term success.</p>
    
    <h2>Conclusion</h2>
    <p>Success in ${post.category.toLowerCase()} requires a balanced approach that combines strategic vision, technological expertise, and organizational change management. By following proven best practices and learning from industry leaders, organizations can navigate the complexities of digital transformation and achieve sustainable competitive advantage.</p>
    
    <p>At Navya Solutions AB, we help organizations navigate these challenges with proven methodologies, deep technical expertise, and a commitment to delivering measurable business value. Contact us to learn how we can support your transformation journey.</p>
  `;
};

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ postId }) => {
  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  const handleBack = () => {
    window.location.hash = '#blog';
  };

  if (!post) {
    return (
      <Section>
        <Container maxWidth="lg">
          <BackButton onClick={handleBack} size="large">
            <ArrowBack />
          </BackButton>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h4" color="text.secondary">
              Blog post not found
            </Typography>
          </Box>
        </Container>
      </Section>
    );
  }

  const content = getBlogContent(post);
  
  return (
    <Section>
      <Container maxWidth="lg">
        <BackButton onClick={handleBack} size="large">
          <ArrowBack />
        </BackButton>
        
        <HeroImage>
          {getIconComponent(post.category)}
        </HeroImage>
        
        <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
          <CategoryChip label={post.category} />
          <Title variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            {post.title}
          </Title>
          
          <Meta>
            <MetaItem>
              <CalendarToday sx={{ fontSize: 20 }} />
              <Typography variant="body1">{formatDate(post.date)}</Typography>
            </MetaItem>
            <MetaItem>
              <AccessTime sx={{ fontSize: 20 }} />
              <Typography variant="body1">{post.readTime}</Typography>
            </MetaItem>
          </Meta>
          
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
      </Container>
    </Section>
  );
};

export default BlogDetailPage;
