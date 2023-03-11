import { styled, keyframes } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';

const mainSection = styled(Box)(({ theme }) => ({
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingBottom: '3rem',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
	},
}));

const mainTitle = styled(Typography)(({ theme }) => ({
	color: '#181D27',
	lineHeight: '150%',
	marginBottom: '2.5rem',
}));

const containerVideo = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '5.25rem',
	flexWrap: 'wrap',
}));

const boxVideo = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '17.938rem',
}));

const name = styled(Typography)(({ theme }) => ({
	color: '#522D6D',
	lineHeight: '150%',
	fontWeight: '700',
}));

const text = styled(Typography)(({ theme }) => ({
	color: '#181D27',
	lineHeight: '150%',
	fontSize: '0.875rem',
}));

const bgVideo = styled(Box)(({ theme }) => ({
	position: 'fixed',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	background: 'rgba(28, 28, 28, 0.19)',
	backdropFilter: 'blur(6px)',
	opacity: '1',
	animationTimingFunction: 'ease-out',
	animationDuration: '0.3s',
	animationName: 'modal-video',
	//   -webkit-transition: 'opacity 0.3s ease-out',
	//   -moz-transition: 'opacity 0.3s ease-out',
	//   -ms-transition: 'opacity 0.3s ease-out',
	//   -o-transition: 'opacity 0.3s ease-out',
	transition: 'opacity 0.3s ease-out',
	zIndex: '100',
}));

const videoAlign = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
}));

const videoContent = styled(Box)(({ theme }) => ({
	width: '800px',
	height: '500px',
	boxShadow:
		'0px 100px 80px rgba(184, 184, 184, 0.07) 0px 25.8162px 19px 4px rgba(178, 178, 178, 0.0456112) 0px 7.779px 7.30492px rgba(0, 0, 0, 0.035) 0px 1.48838px 2.0843px rgba(0, 0, 0, 0.0243888)',
	borderRadius: '20px',
	background: 'transparent',
	color: '#000',
	margin: '0rem 4rem',
}));

const videoClose = styled(IoCloseOutline)(({ theme }) => ({
	backgroundColor: 'white',
	borderRadius: '50%',
	cursor: 'pointer',
	position: 'relative',
	bottom: '50px',
	width: '32px',
	height: '32px',
	padding: '0',
}));

const modalVideoAlign = styled(Box)(({ theme }) => ({
	display: 'flex',
	position: 'relative',
	bottom: '37px',
}));

const videoSpinner = styled(Box)(({ theme }) => ({
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	animation: `${spin} 2s linear infinite`,
	fontSize: '40px',
	color: '#1b6aae',
}));

const spin = keyframes({
	'0%': {
		transform: 'rotate(0deg)',
	},
	'100%': {
		transform: 'rotate(360deg)',
	},
});

const videoStyle = styled('iframe')(({ theme }) => ({
	borderRadius: '20px',
	zIndex: '100',
}));

const checkMoreButton = styled(Button)(({ theme }) => ({
	color: '#522D6D',
	height: '3.25rem',
	fontWeight: '700',
	letterSpacing: '0.9%',
	marginTop: '3rem',
	marginLeft: '35%',
	marginRight: 'auto',
	maxWidth: '22.625rem',
	minWidth: '10rem',
	[theme.breakpoints.down(850)]: {
		marginLeft: '0',
	},
}));

export {
	mainSection,
	mainTitle,
	containerVideo,
	boxVideo,
	name,
	text,
	bgVideo,
	videoAlign,
	videoContent,
	videoClose,
	modalVideoAlign,
	videoSpinner,
	videoStyle,
	checkMoreButton,
};
