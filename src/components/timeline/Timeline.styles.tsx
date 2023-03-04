import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const mainContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '15rem',
	paddingBottom: '4rem',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
	[theme.breakpoints.down(1200)]: {
		paddingTop: '10rem',
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
	paddingBottom: '1rem',
	fontWeight: 'bold',
	lineHeight: '150%',
	color: '#181D27',
}));

const sectionText = styled(Typography)(({ theme }) => ({
	fontSize: '1rem',
	lineHeight: '150%',
	color: '#181D27',
	maxWidth: '45.625rem',
}));

export { mainContainer, mainTitle, sectionTitle, sectionText };
