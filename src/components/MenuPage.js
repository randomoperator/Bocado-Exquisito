import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import MenuItemCard from './MenuItemCard';

function MenuPage() {
  const menuCategories = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Grilled bread topped with fresh tomatoes, basil, and balsamic glaze.', image: 'https://picsum.photos/450' },
        { name: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with a savory blend of cheese, garlic, and herbs.', image: 'https://picsum.photos/450' }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection, served with seasonal vegetables.', image: 'https://picsum.photos/450' },
        { name: 'Chicken Alfredo', description: 'Creamy Alfredo pasta with tender chicken breast and Parmesan cheese.', image: 'https://picsum.photos/450' }
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.', image: 'https://picsum.photos/450' },
        { name: 'Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.', image: 'https://picsum.photos/450' }
      ]
    },
    {
      category: 'Beverages',
      items: [
        { name: 'Sparkling Water', description: 'Refreshing sparkling water with a hint of lemon.', image: 'https://picsum.photos/450' },
        { name: 'Red Wine', description: 'A selection of fine red wines to complement your meal.', image: 'https://picsum.photos/450' }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        Our Menu
      </Typography>
      <Typography variant="body1" paragraph style={{ textAlign: 'center' }}>
        Explore our diverse menu offerings, crafted with fresh ingredients and culinary expertise.
      </Typography>
      {menuCategories.map((category, index) => (
        <Box key={index} sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
            {category.category}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {category.items.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <MenuItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

export default MenuPage;