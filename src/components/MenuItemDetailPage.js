import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useLocation } from 'react-router-dom';

function MenuItemDetailPage() {
  const { state } = useLocation();
  const { item } = state || {};

  if (!item) return <Typography variant="h6">No details available</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        {item.name}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default MenuItemDetailPage;