import { ThemeProvider } from '@emotion/react';
import { responsiveTheme } from '../../styles/impactStyles';
import { dataHeader } from '../../components/header/dataImpact';
import { CssBaseline } from '@mui/material';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import OurCause from '../../components/ourCause/OurCause';

function Impact() {
	return (
		<>
			<ThemeProvider theme={responsiveTheme}>
				<CssBaseline />
				<NavBar />
				<Header header={dataHeader} color='#C62C46' />
				<OurCause />
			</ThemeProvider>
		</>
	);
}

export default Impact;
