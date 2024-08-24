// src/components/ServiceCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={service.image}
          alt={service.title}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }} >
            {service.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ServiceCard;