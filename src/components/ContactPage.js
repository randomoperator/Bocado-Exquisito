import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
    whatsappNumber: ''
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
    fetch('https://formspree.io/f/xeojvkdj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          phoneNumber: '',
          whatsappNumber: ''
        });
      } else {
        alert('There was an error sending your message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Whatsapp or cellphone number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          multiline
          rows={4}
        />
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default ContactPage;