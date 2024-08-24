// src/components/BookingPage.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Box } from '@mui/material';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    eventType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking data:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 1, mb: 1 }}>
        <Typography variant="h4" gutterBottom>
          Book a Service
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Number of Guests"
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Type"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default BookingPage;
