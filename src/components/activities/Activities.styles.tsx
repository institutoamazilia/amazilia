import { styled } from "@mui/material/styles";
import { Box, Card, Typography } from "@mui/material";
import COLORS from "../layout/colors";

const section = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  paddingLeft: "6rem",
  paddingRight: "6rem",
  paddingTop: "4rem",
  paddingBottom: "4rem",

  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "2rem",
  },
}));
const title = styled(Typography)(({ theme }) => ({
  marginTop: 1,
  fontWeight: 600,
  color: COLORS.primary,
  [theme.breakpoints.down("md")]: {},
}));

const subtitle = styled(Typography)(({ theme }) => ({
  maxWidth: "500px",
  color: COLORS.grays.lightGray,
  lineHeight: "30px",
  fontFamily: "Open Sans",
  [theme.breakpoints.down("md")]: {
    maxWidth: "900px",
  },
}));

const card = styled(Card)(({ theme }) => ({
  // minWidth: 233,
  width: "20%",
  height: 233,
  maxWidth: 233,
  marginRight: "1rem",
  marginTop: "2rem",
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: COLORS.grays.gray40,

  [theme.breakpoints.down("md")]: {
    minWidth: "140px",
    height: "180px",
    margin: 0,
    padding: 0,
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
  gap: "1rem",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
}));

const textContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",

  flexDirection: "column",
  width: "70%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gap: "1rem",
  },
}));
export {
  title,
  subtitle,
  card,
  cardTitle,
  cardContainer,
  textContainer,
  section,
};
