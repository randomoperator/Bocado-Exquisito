// src/components/ServiceDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

function ServiceDetailPage() {
  const { serviceTitle } = useParams();
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

  const service = services.find(s => s.title.replace(/\s+/g, '-').toLowerCase() === serviceTitle);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {service ? (
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={service.image}
            alt={service.title}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
              {service.title}
            </Typography>
            <Typography variant="body1">
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" color="text.secondary">
          Service not found
        </Typography>
      )}
    </Container>
  );
}

export default ServiceDetailPage;