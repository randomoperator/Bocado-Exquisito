// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Toolbar>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          {/* Logo */}
          <Box
            component="img"
            src="https://picsum.photos/150" // Replace with your logo path
            alt="Bocado Exquisito"
            sx={{
              height: isMobile ? 40 : 60, // Adjust height based on screen size
              marginRight: theme.spacing(2),
            }}
          />
          {/* Brand Name (optional) */}
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            Bocado Exquisito
          </Typography>
        </Box>
        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Box component={Link} to="/" sx={{ margin: theme.spacing(1), textDecoration: 'none', color: 'inherit' }}>
            Home
          </Box>
          <Box component={Link} to="/services" sx={{ margin: theme.spacing(1), textDecoration: 'none', color: 'inherit' }}>
            Services
          </Box>
          <Box component={Link} to="/menu" sx={{ margin: theme.spacing(1), textDecoration: 'none', color: 'inherit' }}>
            Menu
          </Box>
          <Box component={Link} to="/booking" sx={{ margin: theme.spacing(1), textDecoration: 'none', color: 'inherit' }}>
            Booking
          </Box>
          <Box component={Link} to="/contact" sx={{ margin: theme.spacing(1), textDecoration: 'none', color: 'inherit' }}>
            Contact
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;