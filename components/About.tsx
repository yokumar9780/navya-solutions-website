import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { EmojiEvents, FlashOn, People, Handshake } from '@mui/icons-material';
import { colors } from '../theme';

const Section = styled(Box)`
  padding: 80px 0;
  background-color: white;
  
  @media (min-width: 768px) {
    padding: 112px 0;
  }
`;

const Badge = styled(Typography)`
  && {
    color: ${colors.secondary};
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

const SectionTitle = styled(Typography)`
  && {
    font-weight: 800;
    color: ${colors.primary};
    margin-bottom: 16px;
  }
`;

const Description = styled(Typography)`
  && {
    color: #666;
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;

const VisionTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 8px;
  }
`;

const IconWrapper = styled(Box)`
  flex-shrink: 0;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${colors.secondary};
  color: white;
`;

const ValueTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
  }
`;

const ValueText = styled(Typography)`
  && {
    color: #666;
    margin-top: 4px;
  }
`;

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, children }) => (
  <Box display="flex" alignItems="flex-start">
    <IconWrapper>{icon}</IconWrapper>
    <Box ml={2}>
      <ValueTitle variant="h6">{title}</ValueTitle>
      <ValueText variant="body1">{children}</ValueText>
    </Box>
  </Box>
);

const About: React.FC = () => {
  return (
    <Section id="about">
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Badge variant="overline">ABOUT US</Badge>
            <SectionTitle variant="h2">
              The Minds Behind Your Next Breakthrough
            </SectionTitle>
            <Description variant="h6">
              We are a multidisciplinary team of strategists, engineers, and innovators with global reach. Our customer-centric approach ensures we deliver not just technology, but true business value.
            </Description>
            <VisionTitle variant="h4">Our Vision</VisionTitle>
            <Description variant="body1">
              To empower every enterprise to achieve its full potential through the strategic application of technology, intelligence, and relentless innovation.
            </Description>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box display="flex" flexDirection="column" gap={4}>
              <ValueCard icon={<EmojiEvents sx={{ fontSize: 24 }} />} title="Integrity & Excellence">
                We uphold the highest standards of integrity and are committed to delivering excellence in everything we do.
              </ValueCard>
              <ValueCard icon={<FlashOn sx={{ fontSize: 24 }} />} title="Innovation">
                We thrive on creativity and ingenuity, constantly exploring new frontiers to deliver cutting-edge solutions.
              </ValueCard>
              <ValueCard icon={<People sx={{ fontSize: 24 }} />} title="Collaboration">
                We believe the best results come from true partnership, working closely with our clients to achieve shared goals.
              </ValueCard>
              <ValueCard icon={<Handshake sx={{ fontSize: 24 }} />} title="Customer-First Approach">
                Your success is our primary metric. We build lasting partnerships by listening, understanding your goals, and dedicating ourselves to your success.
              </ValueCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
