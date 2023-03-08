import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const mainContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '4rem',
	paddingBottom: '6rem',
	width: '100%',
	backgroundColor: '#ECEDEE',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

const mainTitle = styled(Typography)(({ theme }) => ({
	color: '#260441',
	fontSize: '1.75rem',
	lineHeight: '120%',
	fontWeight: 'bold',
	marginBottom: '3.563rem',
}));

const containerCard = styled(Box)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
}));

const card = styled(Box)(({ theme }) => ({
	width: '20rem',
	height: '24.063rem',
}));

const titleCard = styled(Typography)(({ theme }) => ({
	fontSize: '1.563rem',
	lineHeight: '150%',
	fontWeight: 'bold',
	position: 'relative',
	top: '-40px',
}));

const textCard = styled('li')(({ theme }) => ({
	lineHeight: '150%',
	color: '#495456',
	fontSize: '1rem',
	position: 'relative',
	top: '-20px',
}));

// const bullet = styled('li')(({ theme }) => ({
// 	lineHeight: '150%',
// 	color: '#495456',
// 	marginLeft: '1rem',
// 	fontSize: '12px',
// }));

export { mainContainer, mainTitle, containerCard, card, titleCard, textCard };
