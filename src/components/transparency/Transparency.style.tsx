import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

//Falta responsividade
const mainContainer = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: 0,
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '5.943rem',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

const image = styled('img')(({ theme }) => ({
	width: '100%',
	height: '41.25rem',
}));

const mainTitle = styled(Typography)(({ theme }) => ({
	color: 'white',
	fontSize: '2.5rem',
	fontWeight: 'medium',
	lineHeight: '110%',
	letterSpacing: '-1.5px',
	marginBottom: '1.067rem',
}));

//Open Sans?
const mainText = styled(Typography)(({ theme }) => ({
	color: 'white',
	fontSize: '1rem',
	lineHeight: '150%',
	marginBottom: '8.75rem',
}));

const sectionTitle = styled(Typography)(({ theme }) => ({
	color: 'white',
	fontSize: '1.25rem',
	fontWeight: 'bold',
	lineHeight: '150%',
	paddingBottom: '1.651rem',
}));

const containerFile = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
}));

const fileButton = styled(Button)(({ theme }) => ({
	color: '#522D6D',
	backgroundColor: 'white',
	borderRadius: '4px',
	marginBottom: '16px',
	maxWidth: 'fit-content',
	'&:hover': {
		backgroundColor: 'white',
	},
}));

const containerWhatWeDid = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '16.75rem',
}));

const bottomNumber = styled(Typography)(({ theme }) => ({
	color: 'white',
	fontSize: '2.5rem',
	fontWeight: 'medium',
	lineHeight: '110%',
	letterSpacing: '-1.5px',
}));

const location = styled(Typography)(({ theme }) => ({
	color: 'white',
	fontSize: '1.777rem',
	fontWeight: 'bold',
	lineHeight: '150%',
}));

const bottomText = styled(Typography)(({ theme }) => ({
	color: 'white',
	fontSize: '1rem',
	lineHeight: '150%',
}));

export {
	mainContainer,
	image,
	mainTitle,
	mainText,
	sectionTitle,
	containerFile,
	fileButton,
	containerWhatWeDid,
	bottomNumber,
	location,
	bottomText,
};
