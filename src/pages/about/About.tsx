import React from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from '../../components/navbar/NavBar';
import { ThemeProvider } from '@emotion/react';
import { responsiveTheme } from '../../styles/sobreStyles';
import Header from '../../components/header/Header';
import { dataHeader } from '../../components/header/dataAbout';
import AboutUs from '../../components/aboutUs/AboutUs';
import ValuesCard from '../../components/valuesCard/ValuesCard';
import Transparency from '../../components/transparency/Transparency';

export default function About() {
	return (
		<>
			<ThemeProvider theme={responsiveTheme}>
				<CssBaseline />
				<NavBar />
				<Header header={dataHeader} color={'#22595E'} />
				<AboutUs />
				<ValuesCard />
				<Transparency />
			</ThemeProvider>
		</>
	);
}
