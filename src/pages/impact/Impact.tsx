import { ThemeProvider } from '@emotion/react';
import { responsiveTheme } from '../../styles/impactStyles';
import { dataHeader } from '../../components/header/dataImpact';
import { CssBaseline } from '@mui/material';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import OurCause from '../../components/ourCause/OurCause';
import Strategies from '../../components/strategies/Strategies';
import Reaches from '../../components/reaches/Reaches';
import Footer from '../../components/footer/Footer';
import TestimonyVideo from '../../components/testimonyVideo/TestimonyVideo';
import ContributionImpact from '../../components/contribution/contributionImpact/ContributionImpact';

function Impact() {
	return (
		<>
			<ThemeProvider theme={responsiveTheme}>
				<CssBaseline />
				<NavBar />
				<Header header={dataHeader} color='#C62C46' />
				<OurCause />
				<Strategies />
				<Reaches />
				<TestimonyVideo />
				<ContributionImpact />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default Impact;
