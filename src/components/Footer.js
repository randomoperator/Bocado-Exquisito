// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 2, mt: 'auto', textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Bocado Exquisito. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;