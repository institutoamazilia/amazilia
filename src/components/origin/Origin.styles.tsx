import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const mainContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '100%',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '4rem',
	[theme.breakpoints.down(668)]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

const mainTitle = styled(Typography)(({ theme }) => ({
	fontSize: '1.75rem',
	fontWeight: 'bold',
	lineHeight: '120%',
	color: '#260441',
}));

const sectionTitle = styled(Typography)(({ theme }) => ({
	paddingTop: '2.125rem',
	fontSize: '1.5rem',
	fontWeight: 'regular',
	lineHeight: '150%',
	color: '#522D6D',
}));

const sectionText = styled(Typography)(({ theme }) => ({
	paddingTop: '1.5rem',
	fontSize: '1rem',
	fontWeight: 'regular',
	lineHeight: '150%',
	color: '#181D27',
}));

const spanText = styled('span')(({ theme }) => ({
	fontSize: '1rem',
	fontWeight: 'bold',
	lineHeight: '150%',
	letterSpacing: '0.009rem',
	color: '#181D27',
}));

const image = styled('img')(({ theme }) => ({
	paddingTop: '3.25rem',
	[theme.breakpoints.down(1200)]: {
		marginBottom: '20rem',
	},
	[theme.breakpoints.down(524)]: {
		width: '20rem',
		marginBottom: '25rem',
	},
}));

const curiosity = styled(Box)(({ theme }) => ({
	padding: '4rem',
	backgroundColor: '#522D6D',
	color: '#FBFBFB',
	fontWeight: 'bold',
	fontSize: '1.563rem',
	lineHeight: '150%',
	justifyContent: 'center',
	textAlign: 'center',
	borderRadius: '10px',
	width: '34.75rem',
	position: 'absolute',
	top: '80%',
	[theme.breakpoints.down(600)]: {
		fontSize: '1rem',
		width: '30rem',
	},
	[theme.breakpoints.down(524)]: {
		fontSize: '1rem',
		width: '18rem',
		padding: '2rem',
	},
}));

export {
	mainContainer,
	mainTitle,
	sectionTitle,
	sectionText,
	spanText,
	image,
	curiosity,
};
