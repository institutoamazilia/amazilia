import { styled } from "@mui/material/styles";
import { Box, Card, TextField, FormControl } from "@mui/material";
import COLORS from "../layout/colors";
import BackgroundFooter from "../../assets/footer-background.png";
import IconButton from "@mui/material/IconButton";

const section = styled(Box)(({ theme }) => ({
  backgroundImage: "url(" + BackgroundFooter + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  objectFit: "cover",
  width: "100%",
  height: "auto",
  paddingBottom: "6rem",
  paddingLeft: "6rem",
  paddingRight: "6rem",

  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "1.5rem",
  },
}));

const floatingButton = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: "2rem",
  paddingRight: "4rem",
  [theme.breakpoints.down("md")]: {
    paddingRight: "0",
    padding: "0",
  },
}));

const backHomeButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},
}));

const newsLetterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: "2rem",
  flexDirection: "row",
  marginBottom: "2rem",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
}));

const inputContainer = styled(Box)(({ theme }) => ({
  marginBottom: "2rem",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
  },
}));
export {
  section,
  floatingButton,
  backHomeButton,
  newsLetterContainer,
  inputContainer,
};
