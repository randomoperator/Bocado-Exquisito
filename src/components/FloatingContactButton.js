import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import { WhatsApp } from '@mui/icons-material'; // Import the WhatsApp icon
import { keyframes } from '@mui/system';

const beat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const FloatingContactButton = () => {
  const whatsappNumber = "+573245365007"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello,%20I%20would%20like%20to%20get%20in%20touch!`;

  return (
    <Tooltip title="Contactanos por Whatsapp!">
      <Fab
        color="primary"
        aria-label="contact"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: '#25D366', // WhatsApp green color
          color: '#fff',
          animation: `${beat} 1s infinite`,
          '&:hover': {
            backgroundColor: '#128C7E', // Darker green on hover
          },
        }}
      >
        <WhatsApp />
      </Fab>
    </Tooltip>
  );
};

export default FloatingContactButton;