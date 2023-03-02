import { styled } from '@mui/material/styles';
import { Box, Typography, Card, CardContent } from '@mui/material';
import test from '../../assets/about/mobilization.png';

const containerValues = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingBottom: '4rem',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

const titleValues = styled(Typography)(({ theme }) => ({
	color: '#260441',
	fontSize: '1.75rem',
	lineHeight: '120%',
	fontWeight: 'bold',
	paddingBottom: '2.063rem',
}));

const containerCardList = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '55px',
	flexWrap: 'wrap',
}));

const containerCard = styled(Card)(({ theme }) => ({
	position: 'relative',
}));

const itemsCard = styled(CardContent)(({ theme }) => ({
	position: 'absolute',
	top: '0',
}));

const titleCard = styled(Typography)(({ theme }) => ({
	color: 'white',
	fontWeight: 'bold',
	fontSize: '1.75rem',
	lineHeight: '120%',
}));

const textCard = styled(Typography)(({ theme }) => ({
	color: 'white',
	fontSize: '1.25rem',
	lineHeight: '150%',
}));

export {
	containerValues,
	titleValues,
	containerCardList,
	containerCard,
	itemsCard,
	titleCard,
	textCard,
};
