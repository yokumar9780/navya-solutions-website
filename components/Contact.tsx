import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, TextField, Button, Link, Alert, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { LocationOn, Email, Phone } from '@mui/icons-material';
import { colors } from '../theme';
import emailjs from '@emailjs/browser';

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

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'info' | null;
    message: string;
  }>({ type: null, message: '' });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // EmailJS configuration from environment variables
      // Get these from https://www.emailjs.com/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if credentials are configured
      if (!serviceId || !templateId || !publicKey) {
        setStatus({
          type: 'info',
          message: 'Email service not configured yet. Please set up EmailJS credentials in .env.local file'
        });
        setLoading(false);
        return;
      }

      // Send email using EmailJS with form element
      const form = e.target as HTMLFormElement;
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        publicKey
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: `Thank you, ${formData.name}! Your message has been sent successfully. We'll get back to you shortly.`
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly at yokum.9780@gmail.com'
      });
    } finally {
      setLoading(false);
    }
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
          <Grid size={{ xs: 12, lg: 6 }}>
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

          <Grid size={{ xs: 12, lg: 6 }}>
            <FormWrapper>
              {status.type && (
                <Alert severity={status.type} sx={{ mb: 3 }}>
                  {status.message}
                </Alert>
              )}
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  disabled={loading}
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
                  disabled={loading}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                  disabled={loading}
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
                  disabled={loading}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  sx={{
                    backgroundColor: colors.secondary,
                    color: '#FFFFFF',
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: colors.primary
                    },
                    '&:disabled': {
                      backgroundColor: '#ccc'
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
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
