import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Storage, Lock, Window, Headset, MergeType, People } from '@mui/icons-material';
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

const Outsourcing: React.FC = () => {
  return (
    <Section id="outsourcing" component="section">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Reliable Outsourcing & Managed Services</SectionTitle>
        <SectionDescription variant="h6">
          Free your team to focus on innovation. Our services act as a seamless extension of your organization to drive business forward.
        </SectionDescription>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard icon={<Storage sx={{ fontSize: 32 }} />} title="Managed Cloud Services">
              Go beyond migration. We provide 24/7 management of your cloud infrastructure, handling security, performance, and cost optimization so you can innovate, not operate.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard icon={<Lock sx={{ fontSize: 32 }} />} title="Managed Security Services">
              Elevate your security with our proactive services. We offer 24/7 threat monitoring, vulnerability management, and incident response from our Security Operations Center.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard icon={<Window sx={{ fontSize: 32 }} />} title="Application Management & Support">
              Ensure your critical applications are always performing at their peak. We provide end-to-end management, from monitoring and maintenance to user support.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard icon={<Headset sx={{ fontSize: 32 }} />} title="24/7 IT Service Desk">
              Ensure business continuity with our proactive, round-the-clock support. We provide continuous monitoring and rapid issue resolution for your employees and customers.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard icon={<MergeType sx={{ fontSize: 32 }} />} title="Managed DevOps & CI/CD">
              We manage and optimize your entire software delivery pipeline, ensuring your development teams can ship features faster and more reliably.
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceCard icon={<People sx={{ fontSize: 32 }} />} title="Dedicated Development Teams">
              Seamlessly extend your in-house capabilities with our dedicated teams of elite engineers, project managers, and QA specialists to accelerate your projects.
            </ServiceCard>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Outsourcing;
