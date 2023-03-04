import { CssBaseline } from '@mui/material';
import NavBar from '../../components/navbar/NavBar';
import { ThemeProvider } from '@emotion/react';
import { responsiveTheme } from '../../styles/sobreStyles';
import Header from '../../components/header/HeaderAbout';
import { dataHeader } from '../../components/header/dataAbout';
import AboutUs from '../../components/aboutUs/AboutUs';
import ValuesCard from '../../components/valuesCard/ValuesCard';
import Transparency from '../../components/transparency/Transparency';
import Footer from '../../components/footer/Footer';
import Origin from '../../components/origin/Origin';
import Timeline from '../../components/timeline/Timeline';
import People from '../../components/supporters/People';
import Trustees from '../../components/supporters/Trustees';

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
				<Origin />
				<Timeline />
				<People />
				<Trustees />
				<Footer />
			</ThemeProvider>
		</>
	);
}
