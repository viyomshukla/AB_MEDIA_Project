import React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { FaPlane, FaHotel, FaMapMarkedAlt } from 'react-icons/fa';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '80vh' },
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '60%' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Discover Your Next Adventure
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Explore the world's most beautiful destinations with our curated travel experiences
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              variant="contained"
              href='#destinations'
              size="large"
              color="primary"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
              }}
            >
              Explore Destinations
            </Button>
            <Button
                href='#packages'
              variant="outlined"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              View Packages
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            py: 3,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            gap: 8,
          }}
        >
          {[
            { icon: <FaPlane size={24} />, text: 'Best Flight Deals' },
            { icon: <FaHotel size={24} />, text: 'Premium Hotels' },
            { icon: <FaMapMarkedAlt size={24} />, text: 'Expert Guides' },
          ].map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: theme.palette.primary.main,
              }}
            >
              {feature.icon}
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 