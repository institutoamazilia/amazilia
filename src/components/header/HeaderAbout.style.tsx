import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import COLORS from '../layout/colors';
import headerImage from '../../assets/hearder-background.png';

const pageContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	height: '700px',
	position: 'relative',
	[theme.breakpoints.down('md')]: {
		height: '100%',
	},
}));

const grid = styled(Grid)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	paddingLeft: '2rem',
	height: '700px',
	gap: '1.313rem',
	width: '100%',
	animation: 'fadeIn',
	animationDuration: '2s',

	[theme.breakpoints.down('sm')]: {
		paddingLeft: 0,
	},
}));

const titleContainer = styled(Box)(({ theme }) => ({
	width: '40rem',
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '6rem',
	justifyContent: 'center',
	[theme.breakpoints.down(700)]: {
		paddingLeft: '1rem',
		width: '400px',
	},
	[theme.breakpoints.down(400)]: {
		width: '280px',
	},
}));

const image = styled('img')(({ theme }) => ({
	bottom: '12%',
	right: '20rem',
	position: 'absolute',
	zIndex: '0',
	[theme.breakpoints.down('md')]: {},
	[theme.breakpoints.down(1580)]: {
		opacity: '0.08',
		right: '5rem',
		bottom: '20%',
	},
	[theme.breakpoints.down(1200)]: {
		right: '5rem',
		bottom: '20%',
		width: '40rem',
	},
	[theme.breakpoints.down(860)]: {
		right: 0,
	},
	[theme.breakpoints.down(564)]: {
		left: '-5rem',
	},
}));

const bgImage = styled('img')(({ theme }) => ({
	width: '100%',
	position: 'absolute',
	zIndex: '-1',
	minWidth: '860px',
	height: '100%',
	right: 0,
	[theme.breakpoints.down(564)]: {
		left: '-18rem',
	},
}));

export { pageContainer, grid, titleContainer, image, bgImage };
