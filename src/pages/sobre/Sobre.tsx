import React from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from '../../components/navbar/NavBar';
import { ThemeProvider } from '@emotion/react';
import { responsiveTheme } from '../../styles/sobreStyles';
import Header from '../../components/header/Header';
import { dataHeader } from '../../components/header/data2';
import Info from '../../components/sobre/info/Info';

export default function Sobre() {
	return (
		<>
			<ThemeProvider theme={responsiveTheme}>
				<CssBaseline />
				<NavBar />
				<Header header={dataHeader} color={'#22595E'} />
				<Info />
			</ThemeProvider>
		</>
	);
}
