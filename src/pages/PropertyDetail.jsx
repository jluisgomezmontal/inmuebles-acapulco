import {
  Box,
  Container,
  Typography,
  Dialog,
  Card,
  CardMedia,
  Chip,
  CardContent,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatToMXN } from "../utils";
import {
  BedroomParent,
  Bathtub,
  DirectionsCar,
  Pets,
  SquareFoot,
  CalendarMonth,
  LocationOn,
  AttachMoney,
} from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import InmueblesSimilares from "../components/InmueblesSimilares";

export default function PropertyDetail() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % itemData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + itemData.length) % itemData.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const departamento = {
    id: 1,
    type: ["venta", "renta"],
    title: "Modern house in residential area",
    salePrice: 2500000,
    rentPrice: 10000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit finibus quam, non rhoncus ipsum sagittis et. Pellentesque commodo, ante id efficitur interdum, quam quam porttitor augue, nec mollis libero nibh porta purus. Suspendisse ac tellus tempus, venenatis urna a, rhoncus lorem. Nulla facilisi. Suspendisse condimentum vulputate purus quis tempor.",
    propertyType: "Casa",
    info: {
      bedrooms: 3,
      bathrooms: 1,
      area: 120,
      parking: 1,
      petsAllowed: true,
      years: "15",
    },
    location: {
      address: "123 Robles St, Jardines",
      state: "Guerrero",
      city: "Acapulco",
    },
    images: [
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://example.com/img/house1_2.jpg",
      "https://example.com/img/house1_3.jpg",
    ],
    available: true,
    postedAt: "2025-06-01",
  };

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
    },
  ];

  const { slugId } = useParams();
  const id = slugId.split("-").pop();
  console.log(id);

  return (
    <Box sx={{ pt: 10 }}>
      <Container sx={{ mt: 4 }}>
        <Card
          sx={{
            maxWidth: 1000,
            mx: "auto",
            my: 4,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: isMobile ? 200 : 400,
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              height={isMobile ? 200 : 400}
              image={departamento.images[0]}
              alt={departamento.title}
              sx={{ objectFit: "cover", width: "100%" }}
            />
            <Chip
              label={departamento.type.join(" / ").toUpperCase()}
              color="primary"
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                fontWeight: "bold",
              }}
            />
          </Box>

          <CardContent>
            <Typography variant="h5" fontWeight={600}>
              {departamento.title}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Publicado el{" "}
              {new Date(departamento.postedAt).toLocaleDateString()}
            </Typography>

            <Typography variant="body1" mt={1}>
              {departamento.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <BedroomParent color="action" />
                  <Typography>
                    {departamento.info.bedrooms} Recámaras
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Bathtub color="action" />
                  <Typography>{departamento.info.bathrooms} Baños</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <DirectionsCar color="action" />
                  <Typography>
                    {departamento.info.parking} Estacionamiento
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Pets color="action" />
                  <Typography>
                    {departamento.info.petsAllowed
                      ? "Se permiten mascotas"
                      : "Sin mascotas"}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <SquareFoot color="action" />
                  <Typography>{departamento.info.area} m²</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CalendarMonth color="action" />
                  <Typography>{departamento.info.years} años</Typography>
                </Stack>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <LocationOn color="action" />
              <Typography variant="body2">
                {departamento.location.address}, {departamento.location.city},{" "}
                {departamento.location.state}
              </Typography>
            </Stack>

            <Stack direction={isMobile ? "column" : "row"} spacing={2} mt={2}>
              <Chip
                icon={<AttachMoney />}
                label={`Venta: ${formatToMXN(departamento.salePrice)}`}
                color="success"
                variant="outlined"
                sx={{ fontWeight: "bold" }}
              />
              <Chip
                icon={<AttachMoney />}
                label={`Renta: ${formatToMXN(departamento.rentPrice)}`}
                color="warning"
                variant="outlined"
                sx={{ fontWeight: "bold" }}
              />
            </Stack>
          </CardContent>
        </Card>
      </Container>
      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          px: 2,
          scrollSnapType: "x mandatory",
        }}
      >
        {itemData.map((item, index) => {
          const isVerticalPair = index % 3 === 1;

          if (isVerticalPair && index + 1 < itemData.length) {
            return (
              <Box
                key={`group-${index}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 300,
                  height: 400,
                  gap: 2,
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                }}
              >
                {[0, 1].map((i) => {
                  const realIndex = index + i;
                  const it = itemData[realIndex];
                  return (
                    <Box
                      key={it.img}
                      sx={{
                        height: "50%",
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpen(realIndex)}
                    >
                      <img
                        src={`${it.img}?w=300&h=200&fit=crop&auto=format`}
                        alt={it.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            );
          }

          if ((index - 1) % 3 === 0) return null;

          return (
            <Box
              key={item.img}
              sx={{
                minWidth: 300,
                height: 400,
                flexShrink: 0,
                scrollSnapAlign: "start",
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(index)}
            >
              <img
                src={`${item.img}?w=300&h=400&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          );
        })}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Container>
        <InmueblesSimilares />
      </Container>

      {/* Modal para ver imagen en grande */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        PaperProps={{
          sx: { backgroundColor: "black" },
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "default",
          }}
        >
          {/* Flecha Izquierda */}
          <Box
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: 40,
              cursor: "pointer",
              zIndex: 10,
              userSelect: "none",
            }}
          >
            ◀
          </Box>

          {/* Imagen actual */}
          {currentIndex !== null && (
            <img
              src={itemData[currentIndex]?.img}
              alt="Imagen ampliada"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              onClick={handleClose}
            />
          )}

          {/* Flecha Derecha */}
          <Box
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: 40,
              cursor: "pointer",
              zIndex: 10,
              userSelect: "none",
            }}
          >
            ▶
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
