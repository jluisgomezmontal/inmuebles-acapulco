import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const inmuebles = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    title: "Renta · Departamento",
    price: 45000,
    maintenance: null,
    address: "Cerrada Ferrocarril de Cuernavaca 779",
    location: "Granada, Miguel Hidalgo",
    area: "75 m²",
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    title: "Renta · Departamento",
    price: 55000,
    maintenance: 4500,
    address: "Lago Zurich 219",
    location: "Ampliación Granada, Miguel Hidalgo",
    area: "120 m²",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
    title: "Renta · Departamento",
    price: 45000,
    maintenance: null,
    address: "C. Lago Zurich 168",
    location: "Ampliación Granada, Miguel Hidalgo",
    area: "105 m²",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
    title: "Renta · Departamento",
    price: 42000,
    maintenance: null,
    address: "Ampliación Granada, Miguel Hidalgo",
    location: "",
    area: "100 m²",
    bedrooms: null,
    bathrooms: null,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    title: "Renta · Departamento",
    price: 40000,
    maintenance: 4000,
    address: "Lago Zurich 96",
    location: "Ampliación Granada, Miguel Hidalgo",
    area: "118 m²",
    bedrooms: 2,
    bathrooms: 2,
  },
];

export default function InmueblesSimilares() {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Encuentra inmuebles similares
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 1,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {inmuebles.map((item) => (
          <Card
            key={item.id}
            sx={{
              minWidth: 250,
              maxWidth: 280,
              flexShrink: 0,
              borderRadius: 2,
              boxShadow: 3,
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={item.image}
              alt="Imagen del departamento"
              sx={{ objectFit: "cover" }}
            />
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "white",
                boxShadow: 1,
              }}
              size="small"
            >
              <ChevronRight />
            </IconButton>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="caption" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="h6" fontWeight={600} color="text.primary">
                MN {item.price.toLocaleString()}
              </Typography>
              {item.maintenance && (
                <Typography variant="caption" color="text.secondary">
                  Mantenimiento MN {item.maintenance.toLocaleString()}
                </Typography>
              )}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, lineHeight: 1.3 }}
              >
                {item.address}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {item.location}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                mt={2}
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Chip label={item.area} size="small" />
                {item.bedrooms !== null && (
                  <Chip label={`${item.bedrooms} Rec.`} size="small" />
                )}
                {item.bathrooms !== null && (
                  <Chip
                    label={`${item.bathrooms} Baño${
                      item.bathrooms > 1 ? "s" : ""
                    }`}
                    size="small"
                  />
                )}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
