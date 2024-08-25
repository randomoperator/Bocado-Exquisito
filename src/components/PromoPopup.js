import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BookingPage from './BookingPage'; // Import the BookingPage component

const PromoPopup = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{ '& .MuiDialog-paper': { borderRadius: 4 } }}
    >
      <DialogTitle>
        <Typography variant="h6">Special Promotion!</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Container>
          <Typography variant="body1" paragraph>
            We're excited to offer you a special promotion on our catering services! Book now and enjoy exclusive discounts.
          </Typography>
          <Box>
            <Typography variant="h6" gutterBottom>
              Book a Service:
            </Typography>
            <BookingPage /> {/* Embedding the BookingPage component */}
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default PromoPopup;