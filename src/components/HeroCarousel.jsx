import React, { useEffect, useState } from "react";
import { Box, Typography, Fade } from "@mui/material";

const images = [
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      {images.map((img, i) => (
        <Fade in={i === index} timeout={1000} key={i} appear={false}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: i === index ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            {/* Overlay oscuro */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />
            {/* Texto centrado */}
            <Typography
              variant="h2"
              sx={{
                position: "relative",
                zIndex: 2,
                px: 2,
                textAlign: "center",
                textShadow: "0px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              Encuentra tu hogar en Inmuebles Acapulco
            </Typography>
          </Box>
        </Fade>
      ))}
    </Box>
  );
}
