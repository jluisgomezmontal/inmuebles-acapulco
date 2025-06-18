import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";

const listas = [
  "Departamentos en renta más vistos",
  "Departamentos más nuevos en Venta",
  "Los inmuebles recién publicados",
];

export default function ListadosSugeridos() {
  const theme = useTheme();

  return (
    <Box
      sx={{ py: 6, px: 2, backgroundColor: theme.palette.background.default }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        gutterBottom
        textAlign="center"
        sx={{ mb: 5 }}
      >
        Listados de inmuebles que te pueden interesar
      </Typography>

      <Grid container spacing={3} justifyContent="center" mt={2}>
        {listas.map((titulo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight={500}>
                  {titulo}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
