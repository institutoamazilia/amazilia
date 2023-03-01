import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#22595E',
		},
		secondary: {
			main: '#F2A03D',
		},
	},
	typography: {
		fontFamily: 'Fira Sans',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontSize: '3rem',
			lineHeight: 1.1,
			letterSpacing: '-0.094rem',
		},
		h2: {
			fontSize: '2.5rem',
			lineHeight: 1.2,
			letterSpacing: '-0.094rem',
		},
		h3: {
			fontSize: '2rem',
			lineHeight: 1.2,
		},
		h4: {
			fontSize: '1.75rem',
			lineHeight: 1.5,
		},
		h5: {
			fontSize: '1.313rem',
			lineHeight: 1.5,
		},
		h6: {
			fontSize: '1rem',
			lineHeight: 1.5,
		},
		subtitle1: {
			fontWeight: 500,
			fontSize: '1rem',
			lineHeight: 1.5,
			letterSpacing: '0.009em',
		},
		subtitle2: {
			fontFamily: "'Fira Sans', sans-serif",
			fontWeight: 300,
			fontSize: '0.9rem',
			lineHeight: 1.5,
			letterSpacing: '0.009em',
		},
		body1: {
			fontFamily: "'Open Sans', sans-serif",
		},
		body2: {
			fontFamily: "'Open Sans', sans-serif",
			fontSize: '0.9rem',
		},
		button: {
			fontFamily: "'Fira Sans', sans-serif",
			fontWeight: 700,
			fontSize: '0.9rem',
			lineHeight: 1.5,
			textTransform: 'uppercase',
		},
		caption: {
			fontFamily: "'Open Sans', sans-serif",
			fontWeight: 400,
			fontSize: '0.8rem',
			lineHeight: 1.66,
			letterSpacing: '0.03333em',
		},
		overline: {
			fontFamily: "'Open Sans', sans-serif",
			fontWeight: 300,
			fontSize: '0.6rem',
			lineHeight: 1.5,
			letterSpacing: '0.094rem',
			textTransform: 'uppercase',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
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
