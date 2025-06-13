import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from '@mui/material';
import axios from 'axios';

const DestinationCard = ({ destination }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        height: '380px',
        width: '350px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          transform: 'translateY(-4px)',
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={destination.image}
        alt={destination.name}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: '#1976d2',
            mb: 1,
            fontSize: '1.1rem',
          }}
        >
          {destination.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
          }}
        >
          Starting From{' '}
          <Box component="span" sx={{ color: '#4CAF50', fontWeight: 700 }}>
            {destination.averageBudget}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get('https://ab-media-project-8xsb.vercel.app/api/destinations')
      .then(res => setDestinations(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div id="destinations">
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: '#1976d2', mb: 2 }}
        >
          Explore Most Popular Destinations
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover our handpicked selection of the most beautiful and exciting destinations
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {destinations.slice(0, 6).map((destination, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DestinationCard destination={destination} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Destinations;
