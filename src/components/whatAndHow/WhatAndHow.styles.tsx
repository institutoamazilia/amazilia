import { styled } from '@mui/material/styles';
import { Box, Typography, Card, Button } from '@mui/material';
import COLORS from '../layout/colors';

const mainContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '4rem',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

const sectionTitle = styled(Typography)(({ theme }) => ({
	color: '#522D6D',
	fontSize: '2rem',
	lineHeight: '120%',
	fontWeight: '900',
	marginBottom: '3.625rem',
}));

const card = styled(Card)(({ theme }) => ({
	position: 'relative',
	width: '14.563rem',
	height: '15.5rem',
	marginRight: '1rem',
	marginTop: '2rem',
	marginBottom: '2rem',
	display: 'flex',
	flexWrap: 'wrap',
	backgroundColor: COLORS.grays.gray40,

	[theme.breakpoints.down('md')]: {
		// minWidth: '140px',
		// height: '180px',
		// margin: 0,
		// padding: 0,
	},
}));

const cardTitle = styled(Typography)(({ theme }) => ({
	marginTop: '3rem',
	fontFamily: 'Fira Sans',
	color: '#495456',
	variant: 'body1',
	fontWeight: 'bold',
	fontSize: '1.333rem',
	lineHeight: '150%',
}));

const cardTitleClickable = styled(Typography)(({ theme }) => ({
	marginTop: '3rem',
	fontFamily: 'Fira Sans',
	color: '#495456',
	variant: 'body1',
	fontWeight: 'bold',
	fontSize: '1.333rem',
	lineHeight: '150%',
	'&:hover': {
		cursor: 'pointer',
	},
}));

const cardContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	height: 'auto',
	flexDirection: 'row',
	display: 'flex',
	alignItems: 'start',
	flexWrap: 'wrap',
	boxSizing: 'content-box',
	gap: '2rem',
	[theme.breakpoints.down('sm')]: {
		height: '100%',
	},
}));

const popup = styled(Box)(({ theme }) => ({
	position: 'fixed',
	top: '35%',
	left: '40%',
	backgroundColor: '#522D6D',
	width: '23.5rem',
	height: '16.875rem',
	borderRadius: '15px',
	alignItems: 'center',
	padding: '2.063rem',
	paddingRight: '4.5rem',
}));

const popupClose = styled('img')(({ theme }) => ({
	position: 'absolute',
	top: '0.875rem',
	right: '0.938rem',
	cursor: 'pointer',
}));

const popupText = styled(Typography)(({ theme }) => ({
	color: 'white',
	lineHeight: '150%',
	marginBottom: '1rem',
	width: '17.688rem',
}));

const overlay = styled(Typography)(({ theme }) => ({
	position: 'fixed',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	zIndex: '98',
	height: '100%',
	width: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.3)',
}));

const pdfButton = styled(Button)(({ theme }) => ({
	height: '1.313rem',
	color: '#522D6D',
	fontSize: '0.75rem',
	fontWeight: '900',
	marginBottom: '3.75rem',
}));

export {
	mainContainer,
	sectionTitle,
	card,
	cardTitle,
	cardTitleClickable,
	cardContainer,
	popup,
	popupClose,
	popupText,
	overlay,
	pdfButton,
};
