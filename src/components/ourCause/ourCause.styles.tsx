import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

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

const questionTitle = styled(Typography)(({ theme }) => ({
	color: '#E15383',
	fontSize: '2rem',
	lineHeight: '120%',
	fontWeight: 'bolder',
}));

const sectionTitle = styled(Typography)(({ theme }) => ({
	color: '#4C4B8F',
	fontSize: '3.75rem',
	lineHeight: '120%',
	fontWeight: 'bold',
	maxWidth: '55rem',
	marginTop: '2rem',
	wordBreak: 'break-word',
}));

const sectionCardsContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	marginTop: '3.25rem',
}));

const containerCard = styled(Box)(({ theme }) => ({
	width: '17.75rem',
	height: '20rem',
	paddingLeft: '1.25rem',
	paddingRight: '2rem',
	paddingTop: '1rem',
	'&:nth-child(even)': {
		backgroundColor: '#F7EFC5',
	},
}));

const titleCard = styled(Typography)(({ theme }) => ({
	color: '#F38020',
	fontSize: '1.75rem',
	fontWeight: 'bold',
	maxWidth: '14.813rem',
	lineHeight: '120%',
	marginBottom: '0.875rem',
}));

//Open Sans?
const textCard = styled(Typography)(({ theme }) => ({
	color: '#000000',
	fontSize: '0.75rem',
	fontWeight: '300',
	lineHeight: '150%',
	marginBottom: '1rem',
}));

const fontCard = styled(Button)(({ theme }) => ({
	color: '#000000',
	fontSize: '0.75rem',
	fontWeight: '300',
	lineHeight: '150%',
	marginBottom: '1rem',
	justifyContent: 'left',
	textAlign: 'left',
	border: 'none',
	padding: 0,
	textTransform: 'none',
}));

const popup = styled(Box)(({ theme }) => ({
	position: 'fixed',
	top: '35%',
	left: '40%',
	backgroundColor: '#522D6D',
	width: '23.5rem',
	height: '10.125rem',
	borderRadius: '15px',
	alignItems: 'center',
	padding: '2.063rem',
	paddingRight: '4.5rem',
	display: 'flex',
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

export {
	mainContainer,
	questionTitle,
	sectionTitle,
	sectionCardsContainer,
	containerCard,
	titleCard,
	textCard,
	fontCard,
	popup,
	popupClose,
	popupText,
	overlay,
};
