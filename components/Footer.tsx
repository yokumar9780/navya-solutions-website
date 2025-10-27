import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { colors } from '../theme';

const FooterWrapper = styled(Box)`
  background-color: ${colors.primary};
  color: ${colors.light};
  padding: 48px 0;
`;

const FooterTitle = styled(Typography)`
  && {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${colors.light};
  }
`;

const FooterSubtitle = styled(Typography)`
  && {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${colors.light};
  }
`;

const FooterText = styled(Typography)`
  && {
    color: #d1d5db;
    line-height: 1.6;
  }
`;

const FooterLink = styled(Link)`
  && {
    color: #d1d5db;
    text-decoration: none;
    
    &:hover {
      color: ${colors.secondary};
    }
  }
`;

const CopyrightBox = styled(Box)`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Grid item xs={12} md={4}>
            <FooterTitle>Navya Solutions AB</FooterTitle>
            <FooterText>
              Your success is our mission. Empowering enterprises through technology, intelligence, and innovation.
            </FooterText>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterSubtitle>Contact Us</FooterSubtitle>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <FooterText component="span">Email: </FooterText>
                <FooterLink href="mailto:info@navyaSolutions.se">info@navyaSolutions.se</FooterLink>
              </li>
              <li>
                <FooterText component="span">Phone: </FooterText>
                <FooterLink href="tel:+XX-XXXXXXX">+XX-XXXXXXX</FooterLink>
              </li>
              <li>
                <FooterText>Address: Placeholder Address, City, Country</FooterText>
              </li>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterSubtitle>Follow Us</FooterSubtitle>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
              <FooterLink href="#">LinkedIn</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
            </Box>
          </Grid>
        </Grid>
        <CopyrightBox>
          <FooterText sx={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Navya Solutions AB. All rights reserved.
          </FooterText>
        </CopyrightBox>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
