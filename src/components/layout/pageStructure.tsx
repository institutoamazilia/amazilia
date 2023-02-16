import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const PageContent = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 700,
  display: "flex",
  flexDirection: "column",
  padding: "6rem",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: "2rem",
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

export { PageContent, Section };
