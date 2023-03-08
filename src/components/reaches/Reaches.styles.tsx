import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const mainContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '4rem',
	paddingBottom: '6rem',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

const mainTitle = styled(Typography)(({ theme }) => ({
	color: '#522D6D',
	fontSize: '1.75rem',
	lineHeight: '120%',
	fontWeight: 'bold',
}));

const mainSubTitle = styled(Typography)(({ theme }) => ({
	color: '#260441',
	lineHeight: '150%',
	paddingBottom: '2rem',
}));

const dataContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

const dataItemContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '12.938rem',
}));

const dataTitle = styled(Typography)(({ theme }) => ({
	color: '#522D6D',
	fontSize: '1.5rem',
	lineHeight: '150%',
}));

const dataNumber = styled(Typography)(({ theme }) => ({
	color: '#522D6D',
	fontSize: '6rem',
	lineHeight: '110%',
	letterSpacing: '-1.5px',
	fontWeight: 'bold',
}));

const dataInfo = styled(Typography)(({ theme }) => ({
	color: '#522D6D',
	fontSize: '1.75rem',
	lineHeight: '120%',
	fontWeight: 'bold',
	paddingBottom: '3rem',
}));

const image = styled('img')(({ theme }) => ({
	[theme.breakpoints.down(434)]: {
		width: '15rem',
	},
}));

export {
	mainContainer,
	mainTitle,
	mainSubTitle,
	dataContainer,
	dataItemContainer,
	dataTitle,
	dataNumber,
	dataInfo,
	image,
};
