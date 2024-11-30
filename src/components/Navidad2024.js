import React from 'react';
import { Container, Typography, Grid, Box, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import DetallesCena from './DetallesCena';

function Navidad2024() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenidos a Bocado Exquisito!
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom>
        🎄🎁🎄🕯️🎄🍪🎄🍽️🎄🥂🎄
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
        En esta temporada navideña, consientete a ti y a tu familia con una espectacular cena, a cargo de la Chef Diana Torregroza, y garantiza una experiencia gastronomica inolvidable.
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img
            src="https://raw.githubusercontent.com/randomoperator/Bocado-Exquisito/refs/heads/landing_navidad/public/chef-diana-torregroza.jpeg"
            alt="Chef Diana Torregroza"
            style={{
              width: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              borderRadius: 8,
              marginTop: '20px',
            }}
          />
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
            Diana es una chef egresada de la prestigiosa escuela de cocina El Gato Dumas, y se especializa en crear menús que combinan lo tradicional con lo innovador, asegurando una experiencia gastronómica memorable para ti y tus seres queridos.
          </p>
        </div>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom style={{ textAlign: 'center' }}>
            Menú Navidad 2024
          </Typography>
          <Typography
            variant="h7"
            gutterBottom
            style={{
              textAlign: 'center',
              fontStyle: 'italic', // Hace que el texto sea cursivo
            }}
          >
            "Este menú rinde homenaje a los sabores tradicionales con un toque sofisticado. El salmón glaseado, con mantequilla clarificada y un toque cítrico, equilibra frescura y profundidad. Los frutos secos aportan una textura crujiente, y la ensalada, con tomates cherry confitados y lascas de parmesano, brinda una frescura vibrante que eleva la experiencia. Un plato pensado para cautivar el paladar y el corazón."
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://raw.githubusercontent.com/randomoperator/Bocado-Exquisito/refs/heads/landing_navidad/public/salmon.jpeg"
                  alt="Delicioso salmon glaseado"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Euforia Dorada (Salmón)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "El salmón es la estrella indiscutible del plato, con su glaseado de mantequilla clarificada que realza la suavidad natural del pescado. Las notas de limón fresco aportan un toque cítrico que despierta el paladar, mientras que los frutos secos añaden una textura crujiente y un delicado contraste de sabores. Cada bocado es una sinfonía de elegancia y frescura."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://raw.githubusercontent.com/randomoperator/Bocado-Exquisito/refs/heads/landing_navidad/public/pure.jpeg"
                  alt="Delicioso pure de papas"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Manto Silencioso (Puré)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "Este puré de papas es la promesa de suavidad absoluta. Con una textura cremosa que se desliza sobre el paladar, cada cucharada es un susurro de confort y calidez. La mantequilla y las especias se fusionan en un abrazo que transforma lo sencillo en algo sublime. Es el plato que acompaña, pero nunca pasa desapercibido."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://raw.githubusercontent.com/randomoperator/Bocado-Exquisito/refs/heads/landing_navidad/public/ensalada.jpeg"
                  alt="Fresca y saludable ensalada con lechuga, tomates cherry y queso parmesano"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Brisa Refrescante (Ensalada)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "Una ensalada que captura la esencia misma de la frescura. Con ingredientes cuidadosamente seleccionados, esta combinación de sabores vibrantes y texturas ligeras revive el paladar con cada bocado. Tomates cherry confitados, crujientes lechugas y delicadas lascas de parmesano se entrelazan para ofrecer una experiencia revitalizante, como una brisa fresca en el corazón de la temporada."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h6" color="text.secondary" paragraph>
          Una experiencia gastronómica única, diseñada para que tú y tus seres queridos vivan una Navidad inolvidable.
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          ¡Vive la experiencia de la alta cocina, en la comodidad de tu propio hogar!
        </Typography>
        <img
          src="https://i.pinimg.com/originals/7b/67/b9/7b67b93e5a905e4dc09508f4c1a9e0b3.jpg"
          alt="Catering Service"
          style={{ width: '100%', borderRadius: 8, marginTop: '20px' }}
        />
        <Box sx={{ textAlign: 'center', mt: 6 }}>
        <DetallesCena />
        <Typography variant="h5" gutterBottom>
          ¿Quieres reservar?
        </Typography>
        <Link to="/booking" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" size="large">
            Reserva tu Servicio
          </Button>
        </Link>
      </Box>
        <Box sx={{ mt: 4 }}>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" size="large">
              Explora Nuestros Servicios
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Highlights Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          ¿Por qué elegirnos?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.coren.es/wp-content/uploads/2017/05/iStock-5325500961.jpg"
                alt="Ingredientes de calidad"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Ingredientes de Calidad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Usamos solo los ingredientes más frescos y de alta calidad para preparar nuestros platos, asegurando un sabor y calidad excepcionales.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.fda.gov/files/buffet3.jpg"
                alt="Menús Personalizados"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Menús Personalizados
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nuestros servicios de catering se adaptan a la temática de tu evento y las preferencias de tus invitados, haciendo de cada evento algo único.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://static.vecteezy.com/system/resources/thumbnails/002/721/925/small/premium-quality-gold-medal-badge-label-seal-isolated-on-white-background-illustration-eps10-free-vector.jpg"
                alt="Servicio Profesional"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Servicio Profesional
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nuestro equipo experimentado garantiza una ejecución perfecta de principio a fin, permitiéndote disfrutar de tu evento sin preocupaciones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          Lo que dicen nuestros clientes
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="body1" paragraph>
                  "Bocado Exquisito hizo que nuestra Navidad fuera verdaderamente especial. La comida estuvo increíble y el servicio impecable."
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  – Familia Gómez
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="body1" paragraph>
                  "El equipo de Bocado Exquisito se encargó de nuestra fiesta de fin de año, ¡y todos quedaron impresionados por la calidad y el servicio!"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  – Empresa XYZ
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          ¿Listo para planificar tu próxima celebración navideña?
        </Typography>
        <Link to="/booking" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" size="large">
            Reserva tu Servicio
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Navidad2024;
