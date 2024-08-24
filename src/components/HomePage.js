import React from 'react';
import { Container, Typography, Grid, Box, Button, Card, CardContent, CardMedia } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom style={{ textAlign: 'center' }}>
          Welcome to Bocado Exquisito
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph style={{ textAlign: 'center' }}>
          We bring exceptional catering services for every occasion, creating unforgettable culinary experiences.
        </Typography>
        <img
          src="https://picsum.photos/600/200"
          alt="Catering Service"
          style={{ width: '100%', borderRadius: 8, marginTop: '20px' }}
        />
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" size="large" href="/Bocado-Exquisito/services">
            Explore Our Services
          </Button>
        </Box>
      </Box>

      {/* Highlights Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/450"
                alt="Quality Ingredients"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quality Ingredients
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We use only the freshest and finest ingredients to prepare our dishes, ensuring exceptional taste and quality.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/450"
                alt="Customized Menus"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Customized Menus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our catering services are tailored to fit your event's theme and your guests’ preferences, making every event unique.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/450"
                alt="Professional Service"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Professional Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our experienced team ensures seamless execution from start to finish, leaving you free to enjoy your event.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          What Our Clients Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="body1" paragraph>
                  "Bocado Exquisito made our wedding truly special! The food was amazing, and the service was flawless."
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  – Maria and Carlos
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="body1" paragraph>
                  "The team catered our corporate event, and everyone was impressed with the quality and professionalism."
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  – Business Corp.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Ready to Plan Your Next Event?
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="/booking">
          Book a Service
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;