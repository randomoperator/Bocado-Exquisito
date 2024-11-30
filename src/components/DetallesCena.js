import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent } from '@mui/material';

function DetallesCena() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          🥂 Información Importante sobre la Cena Navideña 2024 🍴
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Nuestra cena navideña se entrega cuidadosamente en moldes de aluminio, listos para disfrutar en la comodidad de tu hogar. Los ingredientes son frescos y seleccionados para ofrecerte una experiencia culinaria única.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🐟 Salmón Glaseado (1.5 libras)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rinde aproximadamente 8 porciones de salmón de 187g. Ideal para compartir en familia.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🥔 Puré de Papas (2 libras)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aproximadamente 8 porciones de puré cremoso de 250gr, perfecto para acompañar el salmón.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🥗 Ensalada Fresca (1.5 libras)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aproximadamente 8 porciones de ensalada fresca de 185gr, un toque ligero para equilibrar el menú.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h2" color="text.secondary" paragraph sx={{ mt: 4 }}>
          Detalles de Pago:
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Para confirmar la separación de tu cena navideña, es necesario realizar un abono del 50% del valor total de la reserva por adelantado, esto para garantizar el cupo ya que son limitados. El 50% restante se deberá abonar el día de la entrega.
          Cada unidad tiene un precio de $600.000, puedes ordenar tantas unidades como desees, siempre y cuando haya disponibilidad en el sitio.
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph sx={{ mt: 4 }}>
          Opciones de Entrega:
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Puedes recoger la cena en nuestra dirección, o si lo prefieres, podemos entregarla directamente en tu domicilio por un cargo adicional. ¡Hacemos todo lo posible para que tu experiencia sea cómoda y sin preocupaciones!
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph sx={{ mt: 4 }}>
          **Alergenos**:
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Este menú contiene: pescado, lácteos (mantequilla en el puré), frutos secos (en el salmón) y gluten (en el proceso de preparación de los ingredientes). Si tienes alguna alergia alimentaria, por favor notifícalo al momento de realizar tu pedido.
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph sx={{ mt: 4 }}>
          **Importante**:
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Recuerda que el servicio está sujeto a disponibilidad y debe confirmarse con al menos 72 horas de anticipación. Los pedidos deben realizarse antes del 20 de diciembre para garantizar la entrega en Nochebuena.
        </Typography>       
      </Box>
    </Container>
  );
}

export default DetallesCena;
