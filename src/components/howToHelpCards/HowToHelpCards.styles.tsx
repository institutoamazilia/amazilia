import { styled } from '@mui/material/styles';
import {
	Box,
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
} from '@mui/material';

const mainSection = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

const bgPurple = styled(Box)(({ theme }) => ({
	backgroundColor: '#522D6D',
	height: '31.75rem',
	marginBottom: '15rem',
}));

const sectionTitle = styled(Typography)(({ theme }) => ({
	fontSize: '2.5rem',
	color: 'white',
	lineHeight: '110%',
	fontWeight: 'bold',
	paddingTop: '4rem',
}));

const cardBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	marginLeft: '2rem',
	marginTop: '5rem',
	position: 'relative',
}));

const cardTextBox = styled(CardContent)(({ theme }) => ({
	maxWidth: '18.2rem',
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingBottom: '8.188rem',
}));

const cardTitle = styled(Typography)(({ theme }) => ({
	fontSize: '1.5rem',
	color: '#181D27',
	lineHeight: '150%',
	fontWeight: 'bold',
}));

const cardText = styled(Typography)(({ theme }) => ({
	color: '#181D27',
	lineHeight: '150%',
}));

const cardButton = styled(Button)(({ theme }) => ({
	fontSize: '0.875rem',
	color: '#FBFBFB',
	lineHeight: '150%',
	fontWeight: '900',
	letterSpacing: '0.89px',
	// marginLeft: 'auto',
	// marginRight: 'auto',
	alignSelf: 'flex-end',
	alignContent: 'flex-end',
	width: '11.98rem',
	height: '2.25rem',
	position: 'absolute',
	top: '85%',
	marginLeft: '3.5rem',
}));

export {
	mainSection,
	sectionTitle,
	cardBox,
	cardTextBox,
	cardTitle,
	cardText,
	cardButton,
	bgPurple,
};
