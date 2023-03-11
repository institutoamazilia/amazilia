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

const sectionImages = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	marginBottom: '4rem',
	height: '22.063rem',
	flexWrap: 'wrap',
}));

const outro = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-end',
	flexWrap: 'wrap',
}));

const boxImages = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: 'min-content',
	alignItems: 'flex-end',
}));

const imagesInfo = styled(Typography)(({ theme }) => ({
	color: '#495456',
	lineHeight: '150%',
	width: 'auto',
}));

const bottomLink = styled('a')(({ theme }) => ({
	color: '#4C4B8F',
	letterSpacing: '0.15px',
	lineHeight: '150%',
	textDecoration: 'underline',
	fontWeight: '600',
}));

export {
	mainSection,
	Title,
	sectionTop,
	sectionSubtitle,
	subtitle,
	onuImage,
	sectionImages,
	boxImages,
	imagesInfo,
	outro,
	bottomLink,
};
