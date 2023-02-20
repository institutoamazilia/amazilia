import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import COLORS from "../layout/colors";
import headerImage from "../../assets/hearder-background.png";

const pageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "700px",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
  [theme.breakpoints.down(1247)]: {
    overflow: "hidden",
  },
}));

const grid = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  paddingLeft: "2rem",
  height: "700px",
  gap: "1.313rem",
  width: "100%",
  animation: "fadeIn",
  animationDuration: "2s",
  [theme.breakpoints.down(1247)]: {
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    // Adicione aqui as propriedades que deseja aplicar para telas menores ou iguais a 1247px de largura
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
  },
}));

const titleContainer = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "6rem",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    paddingTop: "6rem",
    padding: "2rem",
  },
}));

const title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(1247)]: {},
}));

const image = styled("img")(({ theme }) => ({
  objectFit: "contain",
  bottom: "-12%",
  right: 0,
  position: "absolute",
  zIndex: "0",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down(1247)]: {
    opacity: "0.08",
  },
}));

export { pageContainer, grid, titleContainer, image, title };
