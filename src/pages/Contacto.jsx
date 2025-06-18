import {
  Container,
  Typography,
  Box,
  Stack,
  Link,
  Divider,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

export default function Contacto() {
  return (
    <Container maxWidth="sm" sx={{ pt: 15, minHeight: "80vh" }}>
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{ textAlign: "Center", my: 1 }}
      >
        Centro de ayuda
      </Typography>
      <Typography
        variant="h3"
        fontWeight={600}
        gutterBottom
        sx={{ textAlign: "Center", mb: 5 }}
      >
        Como podemos ayudarte
      </Typography>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Contáctanos
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Stack spacing={3}>
        <Box display="flex" alignItems="center" gap={2}>
          <Email color="primary" />
          <Link href="mailto:contacto@inmueblesacapulco.com" underline="hover">
            contacto@inmueblesacapulco.com
          </Link>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Phone color="primary" />
          <Link href="tel:+527441234567" underline="hover">
            +52 744 123 4567
          </Link>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <LocationOn color="primary" />
          <Typography>Acapulco, Guerrero, México</Typography>
        </Box>
      </Stack>
    </Container>
  );
}
