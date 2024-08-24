// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bocado Exquisito
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/menu">Menu</Button>
          <Button color="inherit" component={Link} to="/booking">Booking</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;