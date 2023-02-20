import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#ECEDEE",
  paddingLeft: "6rem",
  paddingTop: "3rem",
  paddingBottom: "3rem",
  width: "100%",
  gap: "4rem",
  minWidth: "450px",
  [theme.breakpoints.down(1190)]: {
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem",
  },
}));

const aside = styled(Box)(({ theme }) => ({
  width: "100%",
}));

const image = styled("img")(({ theme }) => ({
  objectFit: "contain",

  [theme.breakpoints.down("md")]: {
    maxWidth: "300px",
    height: "auto",
  },
}));

export { section, aside, image };
