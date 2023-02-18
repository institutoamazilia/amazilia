import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const titleContainer = styled(Box)(({ theme }) => ({
  gap: "1rem",
  display: "flex",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  flexDirection: "column",
  width: "50%",
  justifyContent: "center",
  alignItems: " center",
  animation:
    "fadeIn" /* referring directly to the animation's @keyframe declaration */,
  animationDuration: "2s" /* don't forget to set a duration! */,
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
    paddingRight: 0,
    width: "100%",
  },
}));

const headerContainer = styled(Box)(({ theme }) => ({
  height: "50%",
  [theme.breakpoints.down("md")]: {
    height: "90vh",
  },
}));

export { headerContainer, titleContainer };
