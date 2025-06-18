import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  IconButton,
  Chip,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { formatToMXN, toSlug } from "../utils";
import { Link } from "react-router-dom";

export default function PropertyCard({ propertie }) {
  return (
    <Card
      component={Link}
      to={`/propiedades/${toSlug(propertie.title)}-${propertie.id}`}
      sx={{
        textDecoration: "none", // elimina subrayado
        color: "inherit", // mantiene el color
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: 1,
        my: 5,
        gap: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box sx={{ position: "relative", width: { xs: "100%", md: 300 } }}>
        <CardMedia
          component="img"
          image={propertie.images[0]}
          alt="property"
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: 200,
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            display: "flex",
            gap: 1,
          }}
        >
          {propertie.type.map((t, index) => (
            <Chip
              key={index}
              label={t}
              color={t === "venta" ? "primary" : "success"}
              size="small"
            />
          ))}
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "white",
            px: 1,
            borderRadius: 1,
            fontSize: 12,
            display: "flex",
            alignItems: "center", // <- aquí
            gap: 0.5, // opcional: separa un poco el texto y el ícono
          }}
        >
          <Typography>{propertie.images.length}</Typography>{" "}
          <CameraAltIcon sx={{ fontSize: 15 }} />
        </Box>
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: 1 }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid>
              <Typography variant="h6" fontWeight="bold">
                MN {formatToMXN(propertie.salePrice)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${propertie.location.city}, ${propertie.location.state}`}
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body2" sx={{ mt: 1 }}>
            {`${propertie.info.area} m²  ${propertie.info.bathrooms} rec  ${propertie.info.bathrooms} baño  ${propertie.info.parking} estac.`}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }} noWrap>
            {propertie.description}
          </Typography>
        </CardContent>

        <Box
          sx={{
            px: 2,
            pb: 2,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "flex-end", // <-- Agregado
            width: "100%", // <-- Agregado
          }}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              // lógica de llamada
            }}
            startIcon={<PhoneIcon />}
            variant="outlined"
            color="error"
            size="small"
          >
            Llamar
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              // lógica de llamada
            }}
            startIcon={<WhatsAppIcon />}
            variant="contained"
            color="success"
            size="small"
          >
            WhatsApp
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
