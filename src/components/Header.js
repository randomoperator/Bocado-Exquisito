// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <>
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
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component={Link} to="/services" onClick={handleDrawerToggle}>
                    <ListItemText primary="Services" />
                  </ListItem>
                  <ListItem button component={Link} to="/menu" onClick={handleDrawerToggle}>
                    <ListItemText primary="Menu" />
                  </ListItem>
                  <ListItem button component={Link} to="/booking" onClick={handleDrawerToggle}>
                    <ListItemText primary="Booking" />
                  </ListItem>
                  <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;