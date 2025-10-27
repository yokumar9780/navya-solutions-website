import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';
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

const ContactInfo = styled(Box)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
`;

const IconWrapper = styled(Box)`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background-color: ${colors.secondary};
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${colors.primary};
  }
`;

const InfoText = styled(Typography)`
  && {
    color: #666;
    margin-top: 4px;
  }
`;

const InfoLink = styled(Link)`
  && {
    color: #666;
    margin-top: 4px;
    text-decoration: none;
    
    &:hover {
      color: ${colors.secondary};
    }
  }
`;

const FormWrapper = styled(Box)`
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We will get back to you shortly.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Section id="contact">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          Let's Build the Intelligent Enterprise Together
        </SectionTitle>
        <SectionDescription variant="body1">
          Ready to start your digital transformation journey? Get in touch with our experts today.
        </SectionDescription>

        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <ContactInfo>
                <IconWrapper>
                  <LocationOn sx={{ fontSize: 24 }} />
                </IconWrapper>
                <Box sx={{ ml: 2 }}>
                  <InfoTitle variant="h6">Address</InfoTitle>
                  <InfoText variant="body2">
                    Placeholder Address<br />City, Country
                  </InfoText>
                </Box>
              </ContactInfo>

              <ContactInfo>
                <IconWrapper>
                  <Email sx={{ fontSize: 24 }} />
                </IconWrapper>
                <Box sx={{ ml: 2 }}>
                  <InfoTitle variant="h6">Email</InfoTitle>
                  <InfoLink href="mailto:info@navyaSolutions.se">
                    info@navyaSolutions.se
                  </InfoLink>
                </Box>
              </ContactInfo>

              <ContactInfo>
                <IconWrapper>
                  <Phone sx={{ fontSize: 24 }} />
                </IconWrapper>
                <Box sx={{ ml: 2 }}>
                  <InfoTitle variant="h6">Phone</InfoTitle>
                  <InfoLink href="tel:+XX-XXXXXXX">
                    +XX-XXXXXXX
                  </InfoLink>
                </Box>
              </ContactInfo>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <FormWrapper>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  required
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: colors.secondary,
                    color: '#FFFFFF',
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: colors.primary
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </FormWrapper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Contact;
