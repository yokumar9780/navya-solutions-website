import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { 
  Psychology, DirectionsCar, AccountBalance, People, 
  Search, SmartToy, Rocket, Repeat, TrendingUp,
  BarChart, RecordVoiceOver, RemoveRedEye, AutoAwesome
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
    max-width: 768px;
    margin: 0 auto 64px;
    color: #666;
    text-align: center;
  }
`;

const SubTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
    text-align: center;
    margin-bottom: 12px;
  }
`;

const SubDescription = styled(Typography)`
  && {
    max-width: 672px;
    margin: 0 auto 64px;
    color: #999;
    text-align: center;
    font-size: 1rem;
  }
`;

const AICard = styled(Card)`
  && {
    height: 100%;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    
    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
  }
`;

const CardHeader = styled(Box)`
  display: flex;
  align-items: center;
  color: ${colors.secondary};
  margin-bottom: 12px;
`;

const CardTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
    margin-left: 12px;
  }
`;

const CardDescription = styled(Typography)`
  && {
    color: #666;
  }
`;

const CapabilityCard = styled(Card)`
  && {
    height: 100%;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    
    &:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      transform: translateY(-4px);
    }
  }
`;

const CapabilityIconWrapper = styled(Box)`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: rgba(0, 174, 239, 0.1);
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
`;

const CapabilityTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
    text-align: center;
    margin-bottom: 8px;
  }
`;

const CapabilityText = styled(Typography)`
  && {
    color: #666;
    text-align: center;
    font-size: 0.875rem;
  }
`;

const ProcessStepWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const ProcessIconWrapper = styled(Box)`
  width: 80px;
  height: 80px;
  background-color: rgba(0, 174, 239, 0.1);
  border-radius: 50%;
  color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const ProcessTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 8px;
  }
`;

const ProcessDescription = styled(Typography)`
  && {
    color: #666;
    max-width: 280px;
  }
`;

interface AICardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AICardComponent: React.FC<AICardProps> = ({ icon, title, description }) => (
  <AICard>
    <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 } }}>
      <CardHeader>
        {icon}
        <CardTitle variant="h6">{title}</CardTitle>
      </CardHeader>
      <CardDescription variant="body2">{description}</CardDescription>
    </CardContent>
  </AICard>
);

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CapabilityCardComponent: React.FC<CapabilityCardProps> = ({ icon, title, description }) => (
  <CapabilityCard>
    <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CapabilityIconWrapper>{icon}</CapabilityIconWrapper>
      <CapabilityTitle variant="h6">{title}</CapabilityTitle>
      <CapabilityText variant="body2">{description}</CapabilityText>
    </CardContent>
  </CapabilityCard>
);

interface AIProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AIProcessStep: React.FC<AIProcessStepProps> = ({ icon, title, description }) => (
  <ProcessStepWrapper>
    <ProcessIconWrapper>{icon}</ProcessIconWrapper>
    <ProcessTitle variant="h6">{title}</ProcessTitle>
    <ProcessDescription variant="body2">{description}</ProcessDescription>
  </ProcessStepWrapper>
);

const AIInnovation: React.FC = () => {
  return (
    <Section id="ai-innovation">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">AI-Powered Innovation</SectionTitle>
        <SectionDescription variant="h6">
          We build and deploy intelligent AI agents that automate complex processes, uncover critical insights, and create exceptional, personalized experiences.
        </SectionDescription>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          <Grid item xs={12} md={4}>
            <AICardComponent 
              icon={<DirectionsCar sx={{ fontSize: 24 }} />} 
              title="AI in Automotive" 
              description="Drive the future with AI-powered predictive maintenance, intelligent fleet optimization, and advanced autonomous insights." 
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AICardComponent 
              icon={<AccountBalance sx={{ fontSize: 24 }} />} 
              title="AI in Finance" 
              description="Fortify financial operations with real-time fraud detection, AI-powered advisory agents, and automated regulatory compliance." 
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AICardComponent 
              icon={<People sx={{ fontSize: 24 }} />} 
              title="AI in CRM & CX" 
              description="Revolutionize engagement with advanced conversational AI, intelligent sales enablement, and deep sentiment analysis." 
            />
          </Grid>
        </Grid>

        <SubTitle variant="h3">Core AI Capabilities</SubTitle>
        <SubDescription variant="body1">
          Leveraging cutting-edge technologies to build intelligent solutions.
        </SubDescription>
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid item xs={12} sm={6} lg={3}>
            <CapabilityCardComponent 
              icon={<BarChart sx={{ fontSize: 28 }} />} 
              title="Predictive Analytics & ML" 
              description="Harness data to forecast trends, identify opportunities, and make proactive, data-driven decisions." 
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CapabilityCardComponent 
              icon={<RecordVoiceOver sx={{ fontSize: 28 }} />} 
              title="Natural Language Processing" 
              description="Build solutions that understand, interpret, and respond to human language for superior automation and CX." 
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CapabilityCardComponent 
              icon={<RemoveRedEye sx={{ fontSize: 28 }} />} 
              title="Computer Vision" 
              description="Enable systems to 'see' and interpret the visual world, unlocking insights from images and video streams." 
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CapabilityCardComponent 
              icon={<AutoAwesome sx={{ fontSize: 28 }} />} 
              title="Generative AI Solutions" 
              description="Deploy advanced models for intelligent content creation, code generation, and complex problem-solving." 
            />
          </Grid>
        </Grid>

        <SubTitle variant="h3">Our Human-Centric AI Approach</SubTitle>
        <SubDescription variant="body1">
          A structured methodology for delivering measurable business outcomes.
        </SubDescription>

        <Grid container spacing={5}>
            <Grid item xs={12} sm={6} lg={2.4}>
              <AIProcessStep 
                icon={<Search sx={{ fontSize: 36 }} />} 
                title="1. Discover" 
                description="Identify high-impact AI opportunities aligned with your core business goals." 
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={2.4}>
              <AIProcessStep 
                icon={<SmartToy sx={{ fontSize: 36 }} />} 
                title="2. Design" 
                description="Develop and train domain-specific models and agents for maximum relevance." 
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={2.4}>
              <AIProcessStep 
                icon={<Rocket sx={{ fontSize: 36 }} />} 
                title="3. Deploy" 
                description="Seamlessly integrate AI solutions into your existing IT ecosystem for immediate value." 
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={2.4}>
              <AIProcessStep 
                icon={<Repeat sx={{ fontSize: 36 }} />} 
                title="4. Learn" 
                description="Continuously improve and refine models using real-world performance data." 
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={2.4}>
              <AIProcessStep 
                icon={<TrendingUp sx={{ fontSize: 36 }} />} 
                title="5. Scale" 
                description="Expand successful AI initiatives across departments or enterprise-wide for transformative impact." 
              />
            </Grid>
          </Grid>
      </Container>
    </Section>
  );
};

export default AIInnovation;