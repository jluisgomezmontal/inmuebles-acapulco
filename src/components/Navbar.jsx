import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Box,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link as RouterLink } from "react-router-dom";
import NightlightIcon from "@mui/icons-material/Nightlight";

export default function Navbar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          InmueblesAcapulco
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              {menuItems.map(({ label, to }) => (
                <MenuItem
                  key={to}
                  component={RouterLink}
                  to={to}
                  onClick={closeMenu}
                >
                  {label}
                </MenuItem>
              ))}
              <MenuItem onClick={toggleDarkMode}>
                {darkMode ? "Tema Claro" : "Tema Oscuro"}
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {menuItems.map(({ label, to }) => (
              <Button key={to} color="inherit" component={RouterLink} to={to}>
                {label}
              </Button>
            ))}
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <NightlightIcon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
