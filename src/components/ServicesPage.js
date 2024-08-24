import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

function ServicesPage() {
  const services = [
    {
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our bespoke wedding catering packages tailored to your taste and style.",
      image: "https://source.unsplash.com/1600x900/?wedding,catering"
    },
    {
      title: "Corporate Events",
      description: "Professional catering solutions for meetings, conferences, and corporate events, ensuring your business stands out.",
      image: "https://source.unsplash.com/1600x900/?corporate,event,catering"
    },
    {
      title: "Private Parties",
      description: "From intimate gatherings to grand celebrations, we provide personalized catering to elevate your private events.",
      image: "https://source.unsplash.com/1600x900/?party,catering"
    },
    {
      title: "Buffet Services",
      description: "Customizable buffet options with a variety of cuisines to suit any occasion, from casual to formal events.",
      image: "https://source.unsplash.com/1600x900/?buffet,food"
    },
    {
      title: "Cocktail Parties",
      description: "Elegant canapés and cocktails served at your event, perfect for networking or celebrating with style.",
      image: "https://source.unsplash.com/1600x900/?cocktail,party"
    },
    {
      title: "Holiday Catering",
      description: "Delicious seasonal menus to make your holidays extra special, whether it’s Christmas, Thanksgiving, or New Year.",
      image: "https://source.unsplash.com/1600x900/?holiday,catering"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" paragraph>
        We provide a range of catering services including weddings, corporate events, and private parties.
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServicesPage;