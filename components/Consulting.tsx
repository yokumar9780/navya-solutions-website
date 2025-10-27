import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { 
  BusinessCenter, FlashOn, CheckCircle, Search, 
  Cloud, Security, Storage, Group 
} from '@mui/icons-material';
import { colors } from '../theme';

const Section = styled(Box)`
  padding: 80px 0;
  background-color: white;
  
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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    
    &:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      transform: translateY(-8px);
    }
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: rgba(0, 174, 239, 0.1);
  color: ${colors.secondary};
  margin-bottom: 24px;
  flex-shrink: 0;
`;

const CardTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 16px;
  }
`;

const CardText = styled(Typography)`
  && {
    color: #666;
    line-height: 1.6;
    flex-grow: 1;
  }
`;

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, children }) => (
  <StyledCard>
    <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle variant="h5">{title}</CardTitle>
      <CardText variant="body1">{children}</CardText>
    </CardContent>
  </StyledCard>
);

const Consulting: React.FC = () => {
  return (
    <Section id="consulting" component="section">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Strategic Consulting Services</SectionTitle>
        <SectionDescription variant="h6">
          Strategic guidance to transform your business challenges into growth opportunities.
        </SectionDescription>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={3}>
            <ServiceCard icon={<BusinessCenter sx={{ fontSize: 32 }} />} title="IT Strategy & Transformation">
              We craft robust IT roadmaps that align with your objectives, ensuring technology acts as a catalyst for growth, efficiency, and a competitive edge.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ServiceCard icon={<FlashOn sx={{ fontSize: 32 }} />} title="Business Process Reengineering">
              We analyze and redesign your core workflows for the digital era, eliminating bottlenecks and unlocking new levels of operational agility.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ServiceCard icon={<Search sx={{ fontSize: 32 }} />} title="Product Evaluation & Implementation">
              Navigate the complex tech landscape with our unbiased, expert guidance to select and implement the right products to maximize your ROI.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ServiceCard icon={<CheckCircle sx={{ fontSize: 32 }} />} title="Quality Consulting">
              Embed excellence from day one. Our comprehensive quality assurance frameworks ensure robust, reliable, and market-leading solutions.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ServiceCard icon={<Cloud sx={{ fontSize: 32 }} />} title="Cloud Advisory Services">
              Harness the full potential of the cloud. We provide readiness assessments, multi-cloud strategy, migration planning, and cost optimization to ensure maximum agility and ROI.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ServiceCard icon={<Security sx={{ fontSize: 32 }} />} title="Cybersecurity & Risk Advisory">
              Protect your digital assets and build customer trust. We conduct comprehensive risk assessments and develop robust security postures to build a resilient enterprise.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ServiceCard icon={<Storage sx={{ fontSize: 32 }} />} title="Data Strategy & Analytics">
              Transform data into your most powerful strategic advantage. We develop governance frameworks and unlock predictive insights for smarter, faster decision-making.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ServiceCard icon={<Group sx={{ fontSize: 32 }} />} title="Change Management & Digital Adoption">
              Technology is only transformative when people embrace it. We partner with you to ensure your teams are equipped, engaged, and empowered for lasting success.
            </ServiceCard>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Consulting;
