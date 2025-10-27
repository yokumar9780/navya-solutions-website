import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { 
  Code, VerifiedUser, Rocket, Inventory, 
  CloudQueue, MergeType, Psychology, Brush 
} from '@mui/icons-material';
import { colors } from '../theme';

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
    margin: 0 auto 64px;
    color: #666;
    text-align: center;
  }
`;

const StyledCard = styled(Card)`
  && {
    height: 100%;
    padding: 32px;
    background-color: rgba(10, 37, 64, 0.05);
    text-align: center;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const IconWrapper = styled(Box)`
  display: inline-block;
  color: ${colors.secondary};
  margin-bottom: 16px;
`;

const CardTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 8px;
    flex-grow: 1;
  }
`;

const CardText = styled(Typography)`
  && {
    color: #666;
  }
`;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children }) => (
  <StyledCard elevation={0}>
    <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle variant="h6">{title}</CardTitle>
      <CardText variant="body2">{children}</CardText>
    </CardContent>
  </StyledCard>
);

const Technology: React.FC = () => {
  return (
    <Section id="technology" as="section">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">End-to-End Technology Solutions</SectionTitle>
        <SectionDescription variant="h6">
          Building scalable, high-performance, and reliable applications for the modern enterprise.
        </SectionDescription>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FeatureCard icon={<Code sx={{ fontSize: 40 }} />} title="Application Development & Management">
              From ideation to deployment and support, we build custom, scalable, and secure applications that solve your most complex challenges.
            </FeatureCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FeatureCard icon={<VerifiedUser sx={{ fontSize: 40 }} />} title="Software Quality Assurance">
              Our rigorous testing guarantees your software is robust and secure, protecting your brand reputation and ensuring user satisfaction.
            </FeatureCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FeatureCard icon={<Rocket sx={{ fontSize: 40 }} />} title="Product Realization">
              We partner with you on the entire product journey, from concept validation to market-ready solution, ensuring a successful launch and growth.
            </FeatureCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FeatureCard icon={<Inventory sx={{ fontSize: 40 }} />} title="Packaged Applications">
              Accelerate transformation by leveraging our expertise in deploying and customizing enterprise-grade applications for your operational needs.
            </FeatureCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FeatureCard icon={<CloudQueue sx={{ fontSize: 40 }} />} title="Cloud-Native Engineering">
              We design and build resilient, scalable applications using cloud-native architectures to accelerate your innovation cycle and reduce operational costs.
            </FeatureCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FeatureCard icon={<MergeType sx={{ fontSize: 40 }} />} title="DevOps & Automation">
              Accelerate your time-to-market and enhance reliability with our integrated DevOps practices, automating your pipelines for continuous innovation.
            </FeatureCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FeatureCard icon={<Psychology sx={{ fontSize: 40 }} />} title="Data Engineering & AI Platforms">
              Unlock the power of your data. We engineer scalable data pipelines and ML platforms that provide the fuel for your analytics and AI initiatives.
            </FeatureCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <FeatureCard icon={<Brush sx={{ fontSize: 40 }} />} title="UI/UX Design & Prototyping">
              We create intuitive and compelling user experiences that drive adoption. Our human-centered design process ensures your solution captivates its audience.
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Technology;
