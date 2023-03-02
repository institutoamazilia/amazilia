import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import COLORS from '../layout/colors';

const containerAboutUs = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '4rem',
	paddingBottom: '4rem',
}));

const mainTitle = styled(Typography)(({ theme }) => ({
	fontSize: '2.5rem',
	fontWeight: 'bold',
	color: '#260441',
	lineHeight: '130%',
}));

const challengeTitle = styled(Typography)(({ theme }) => ({
	fontSize: '1.563rem',
	fontWeight: 'bold',
	color: '#260441',
	lineHeight: '150%',
}));

const challengeText = styled(Typography)(({ theme }) => ({
	fontSize: '1rem',
	lineHeight: '150%',
	paddingTop: '1rem',
}));

const moreTitle = styled(Typography)(({ theme }) => ({
	color: '#260441',
	fontSize: '1.75rem',
	lineHeight: '120%',
	fontWeight: 'bold',
	paddingBottom: '1.25rem',
}));

const moreText = styled(Typography)(({ theme }) => ({
	fontSize: '1rem',
	lineHeight: '150%',
}));

export {
	containerAboutUs,
	mainTitle,
	challengeTitle,
	challengeText,
	moreTitle,
	moreText,
};
