import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#522D6D",
    },
    secondary: {
      main: "#F2A03D",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Bree';
          src: url('../../fonts/Bree/Bree-Regular.woff') format('truetype');
          font-weight: normal;
          font-style: normal;
        },
        *::-webkit-scrollbar {
          width: 10px;
        }
        
        *::-webkit-scrollbar-track {
          background: gb(255, 255, 255);
        }
        
        *::-webkit-scrollbar-thumb {
          background-color: rgb(183, 183, 183);
          border-radius: 20px;
          border: 3px solid gb(255, 255, 255);
        }

      `,
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);
