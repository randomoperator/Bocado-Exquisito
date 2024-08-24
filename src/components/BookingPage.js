// src/components/BookingPage.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

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
    // Replace YOUR_FORM_ID with your actual Formspree form ID
    fetch('https://formspree.io/f/xqazwbnj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        alert('Booking submitted successfully!');
        setFormData({
          name: '',
          email: '',
          date: '',
          guests: '',
          eventType: ''
        });
      } else {
        alert('There was an error submitting your booking.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your booking.');
    });
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
              <FormControl fullWidth required>
                <InputLabel id="guests-label">Number of Guests</InputLabel>
                <Select
                  labelId="guests-label"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  label="Number of Guests"
                >
                  {[...Array(100).keys()].map(num => (
                    <MenuItem key={num + 1} value={num + 1}>
                      {num + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="event-type-label">Event Type</InputLabel>
                <Select
                  labelId="event-type-label"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  label="Event Type"
                >
                  <MenuItem value="Wedding">Wedding</MenuItem>
                  <MenuItem value="Corporate Event">Corporate Event</MenuItem>
                  <MenuItem value="Private Party">Private Party</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
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