import { Box, Container, Stack, Typography } from "@mui/material";
import { properties } from "../../mocks";
import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import ListadosSugeridos from "../components/ListadosSugeridos";
import BasicSelect from "../components/BasicSelect";
import InmueblesSimilares from "../components/InmueblesSimilares";

const modo = ["Comprar", "Rentar", "Vacacional", "Traspaso"];
const tipo = ["Casa", "Departamento", "Villa", "Terreno", "Local Comercial"];
const recamaras = [
  "1 Recamara",
  "2 Recamaras",
  "3 Recamaras",
  "4  Recamaras",
  "5 Recamaras",
];
const bathroom = ["1 Baño", "2 Baños", "3 Baños", "4  Baños", "5 Baños"];
const colonias = [
  "Costa Azul",
  " Magallanes",
  " Icacos",
  " Hornos",
  " Condesa",
  " Brisas del Mar",
  " Las Brisas",
  " Brisas Marqués",
  "Centro",
  " La Playa",
  " Caleta",
  " Caletilla",
  " La Quebrada",
  " El Farallón",
  " Las Cruces",
  " Las Palmas",
  "Fraccionamiento Las Brisas II",
  " Pichilingue",
  " Brisas del Marqués",
  " Cumbres de Llano Largo",
  " Fraccionamiento Marina Diamante.",
];
export const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <Stack
            sx={{ my: 5, width: "max-content" }}
            direction="row"
            spacing={2}
          >
            <BasicSelect label="Colonias" items={colonias} />
            <BasicSelect label="Interes" items={modo} />
            <BasicSelect label="Tipo" items={tipo} />
            <BasicSelect label="Recamaras" items={recamaras} />
            <BasicSelect label="Baños" items={bathroom} />
          </Stack>
        </Box>
        <Typography sx={{ mt: 5 }} variant="h5" gutterBottom>
          Listados de inmuebles que te pueden interesar
        </Typography>
        {properties.map((propertie) => (
          <PropertyCard key={propertie.id} propertie={propertie} />
        ))}
        <ListadosSugeridos />
        <InmueblesSimilares />
      </Container>
    </>
  );
};
