import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import COLORS from "./colors";

const section = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "50%",
  display: "flex",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    justifyContent: "start",
    height: "100%",
  },
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

export { section, Title, Subtitle };
