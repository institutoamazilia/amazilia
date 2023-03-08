import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const mainSection = styled(Box)(({ theme }) => ({
	backgroundColor: '#ECEDEE',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '3rem',
	paddingBottom: '3rem',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
	},
}));

const Title = styled(Typography)(({ theme }) => ({
	color: '#260441',
	fontSize: '1.75rem',
	lineHeight: '120%',
	fontWeight: 'bold',
}));

const sectionTop = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	[theme.breakpoints.down(900)]: {
		flexDirection: 'column',
	},
}));

const sectionSubtitle = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '33.25rem',
	minWidth: '10rem',
}));

const subtitle = styled(Typography)(({ theme }) => ({
	color: '#181D27',
	lineHeight: '150%',
	paddingTop: '1.625rem',
}));

const onuImage = styled('img')(({ theme }) => ({
	objectFit: 'contain',
	[theme.breakpoints.down(900)]: {
		maxWidth: '300px',
		height: 'auto',
		marginTop: '2rem',
	},
}));

export { mainSection, Title, sectionTop, sectionSubtitle, subtitle, onuImage };
