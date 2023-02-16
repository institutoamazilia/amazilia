import { styled } from "@mui/material/styles";
import { Box, Card, Typography } from "@mui/material";
import COLORS from "../layout/colors";

const title = styled(Typography)(({ theme }) => ({
  marginTop: 1,
  fontFamily: "Fira Sans",
  color: COLORS.primary,

  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
  },
}));

const subtitle = styled(Typography)(({ theme }) => ({
  color: COLORS.grays.lightGray,
  lineHeight: "30px",
  fontFamily: "Open Sans",
  [theme.breakpoints.up("md")]: {},
}));

const card = styled(Card)(({ theme }) => ({
  minWidth: 233,
  width: 233,
  height: 233,
  marginRight: "1rem",
  marginTop: "2rem",
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: COLORS.grays.gray40,

  [theme.breakpoints.down("md")]: {
    minWidth: 140,
    width: 140,
    height: "180px",
    margin: 0,
    padding: 0,
    gap: ".5rem",
  },
}));

const cardTitle = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  fontFamily: "Fira Sans",
  color: COLORS.grays.darkGray,
  variant: "body1",
}));

const cardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  flexDirection: "row",
  display: "flex",
  alignItems: "start",
  flexWrap: "wrap",
  boxSizing: "content-box",
  [theme.breakpoints.down("sm")]: {
    gap: "1.8rem",
    height: "100%",
  },
}));
export { title, subtitle, card, cardTitle, cardContainer };
