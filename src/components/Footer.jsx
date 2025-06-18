import { Box, Typography, IconButton, Stack, useTheme } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Copyright,
} from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();
  console.log(theme.palette);
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 15,
        px: 2,
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.info.dark,
        borderTop: `1px solid ${theme.palette.divider}`,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={1}>
        InmueblesAcapulco
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton
          aria-label="Facebook"
          href="https://facebook.com"
          target="_blank"
        >
          <Facebook />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          href="https://instagram.com"
          target="_blank"
        >
          <Instagram />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          href="https://twitter.com"
          target="_blank"
        >
          <Twitter />
        </IconButton>
        <IconButton
          aria-label="YouTube"
          href="https://youtube.com"
          target="_blank"
        >
          <YouTube />
        </IconButton>
      </Stack>

      <Typography variant="body2">
        <Copyright sx={{ fontSize: 16, verticalAlign: "middle" }} />{" "}
        {new Date().getFullYear()} InmueblesAcapulco. Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
}
