import { Box, Typography, Container, Divider } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ pt: 15, minHeight: "80vh" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Acerca de InmueblesAcapulco
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="body1" paragraph>
        InmueblesAcapulco es una plataforma dedicada a ofrecerte la mejor
        experiencia para encontrar propiedades en venta y renta en Acapulco.
        Nuestro objetivo es facilitar la búsqueda de tu próximo hogar o
        inversión inmobiliaria de forma rápida, segura y confiable.
      </Typography>

      <Typography variant="body1" paragraph>
        Nuestro catálogo incluye casas, departamentos y terrenos en las zonas
        más populares de Acapulco. Trabajamos con agentes confiables y brindamos
        información detallada para que tomes la mejor decisión.
      </Typography>

      <Typography variant="body1" paragraph>
        Ya sea que estés buscando mudarte, invertir o rentar, en
        InmueblesAcapulco encontrarás opciones para cada necesidad y
        presupuesto. Nuestra misión es conectarte con tu próximo inmueble ideal.
      </Typography>
    </Container>
  );
}
