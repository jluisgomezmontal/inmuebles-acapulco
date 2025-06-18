import React from "react";
import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        zIndex: 1,
      }}
    >
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />

      {/* Texto centrado */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          position: "relative",
          zIndex: 3,
          px: 2,
          textShadow: "0px 2px 4px rgba(0,0,0,0.6)",
        }}
      >
        Encuentra tu hogar en Inmuebles Acapulco
      </Typography>
    </Box>
  );
}
