import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import COLORS from "./colors";

const PageContent = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "6rem",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: "2rem",
    justifyContent: "start",
    height: "100%",
  },
}));

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  marginTop: 1,
  fontFamily: "Fira Sans",
  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  lineHeight: "30px",
  fontFamily: "Open Sans",
  [theme.breakpoints.down("md")]: {
    lineHeight: "20px",
  },
}));

export { PageContent, Section, Title, Subtitle };
