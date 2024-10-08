// src/components/ServicesPage.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ServiceCard from './ServiceCard';

function ServicesPage() {
  const services = [
    {
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our bespoke wedding catering packages tailored to your taste and style.",
      image: "https://picsum.photos/450"
    },
    {
      title: "Corporate Events",
      description: "Professional catering solutions for meetings, conferences, and corporate events, ensuring your business stands out.",
      image: "https://picsum.photos/450"
    },
    {
      title: "Private Parties",
      description: "From intimate gatherings to grand celebrations, we provide personalized catering to elevate your private events.",
      image: "https://picsum.photos/450"
    },
    {
      title: "Buffet Services",
      description: "Customizable buffet options with a variety of cuisines to suit any occasion, from casual to formal events.",
      image: "https://picsum.photos/450"
    },
    {
      title: "Cocktail Parties",
      description: "Elegant canapés and cocktails served at your event, perfect for networking or celebrating with style.",
      image: "https://picsum.photos/450"
    },
    {
      title: "Holiday Catering",
      description: "Delicious seasonal menus to make your holidays extra special, whether it’s Christmas, Thanksgiving, or New Year.",
      image: "https://picsum.photos/450"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        Our Services
      </Typography>
      <Typography variant="body1" paragraph style={{ textAlign: 'center' }}>
        We provide a range of catering services including weddings, corporate events, and private parties.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServicesPage;