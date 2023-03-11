import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

const section = styled(Box)(({ theme }) => ({
	padding: '6rem',
	paddingTop: '4rem',
	paddingBottom: '4rem',
	height: '100%',
	[theme.breakpoints.down('md')]: {
		padding: '0',
	},
}));

const supportersContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	flexWrap: 'wrap',
	gap: '6rem',
	paddingRight: '2rem',
	paddingTop: '2rem',
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		gap: '2rem',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const supporterPhotographer = styled(Button)(({ theme }) => ({
	marginLeft: 'auto',
}));

const teamItem = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	diplay: 'flex',
	textAlign: 'center',
	[theme.breakpoints.down('md')]: {},
}));

const teamContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	height: 'auto',
	flexDirection: 'row',
	display: 'flex',
	alignItems: 'start',
	[theme.breakpoints.down('md')]: {
		overflow: 'scroll',
		padding: '0px!important',
	},
}));

const teamImage = styled('img')(({ theme }) => ({
	width: '21.5rem',
	heigh: '21.25rem',
}));

const meetTeam = styled(Button)(({ theme }) => ({
	fontWeight: '800',
	letterSpacing: '0.9%',
	marginBottom: '2rem',
	marginTop: '2rem',
}));

export {
	section,
	supportersContainer,
	supporterPhotographer,
	teamItem,
	teamContainer,
	teamImage,
	meetTeam,
};
