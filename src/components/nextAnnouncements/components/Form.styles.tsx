import { styled } from "@mui/material/styles";
import { Box, FormControl, TextField } from "@mui/material";

const form = styled(FormControl)(({ theme }) => ({
  paddingLeft: "6.5rem",
  maxWidth: "50%",
  paddingTop: "2.5rem",
  paddingBottom: "1.9rem",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1rem",
    maxWidth: "100%",
    width: "100%",
  },
}));

const inputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

const input = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "6px",
  color: "#160226",
  width: "auto",
  minWidth: "200px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export { form, input, inputContainer };
