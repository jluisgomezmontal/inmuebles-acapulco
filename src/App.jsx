import { Outlet } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import { useState, useMemo } from "react";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
