import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='contact'>
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              TravelEscape
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Your trusted partner in creating unforgettable travel experiences across India.
              We specialize in crafting perfect journeys that combine adventure, culture,
              and comfort.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FaFacebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <FaTwitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <FaInstagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <FaLinkedin />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['About Us', 'Destinations', 'Tour Packages'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  sx={{
                    textDecoration: 'none',
                    opacity: 0.8,
                    '&:hover': { opacity: 1 },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaPhone style={{ opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +91 123 456 7890
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaEnvelope style={{ opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  info@travelescape.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <FaMapMarkerAlt style={{ opacity: 0.8, marginTop: 4 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  123 Travel Street, Mumbai, Maharashtra, India - 400001
                </Typography>
              </Box>
            </Box>
          </Grid>

          
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} TravelEscape. All rights reserved.
          </Typography>
          
        </Box>
      </Container>
    </Box>
    </div>
    

  );
};

export default Footer; 