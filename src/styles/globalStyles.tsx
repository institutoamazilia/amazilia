import { createTheme, responsiveFontSizes } from '@mui/material/styles';

 const theme = createTheme({
  palette: {
    primary: {
      main: "#522D6D",
    },
    secondary: {
      main: "#F2A03D",
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme)