import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const TitleContainer = styled(Box)(({ theme }) => ({
  width: "55%",
  paddingLeft: "6.5rem",
  paddingTop: "2.5rem",
  paddingBottom: "1.9rem",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1rem",
    width: "100%",
    padding: "2rem",
  },
}));

const RelativePosition = styled(Box)(({ theme }) => ({
  position: "absolute",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export { TitleContainer, RelativePosition };
