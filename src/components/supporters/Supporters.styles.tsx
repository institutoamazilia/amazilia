import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

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
	justifyContent: 'space-between',

	[theme.breakpoints.down('md')]: {
		gap: '2rem',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
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
export { section, supportersContainer, teamItem, teamContainer, teamImage };
