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
import WhatAndHow from '../../components/whatAndHow/WhatAndHow';

function Impact() {
	return (
		<>
			<CssBaseline />
			<NavBar color='#C62C46' />
			<Header header={dataHeader} color='#C62C46' />
			<OurCause />
			<Strategies />
			<Reaches />
			<TestimonyVideo />
			<ContributionImpact />
			<WhatAndHow />
			<Footer />
		</>
	);
}

export default Impact;
