import { styled } from '@mui/material/styles';
import {
	Box,
	Button,
	Card,
	TextField,
	FormControl,
	Typography,
} from '@mui/material';
import COLORS from '../layout/colors';
import BackgroundFooter from '../../assets/footer-background.png';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/material/styles';

const section = styled(Box)(({ theme }) => ({
	backgroundImage: 'url(' + BackgroundFooter + ')',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	objectFit: 'cover',
	width: '100%',
	height: 'auto',
	paddingBottom: '6rem',
	paddingLeft: '6rem',
	paddingRight: '6rem',

	flexDirection: 'column',
	[theme.breakpoints.down('md')]: {
		padding: '1.5rem',
	},
}));

const floatingButton = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'flex-end',
	padding: '2rem',
	paddingRight: '4rem',
	[theme.breakpoints.down('md')]: {
		paddingRight: '0',
		padding: '0',
	},
}));

const backHomeButton = styled(IconButton)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {},
}));

const newsLetterContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	paddingBottom: '2rem',
	flexDirection: 'row',
	marginBottom: '2rem',
	justifyContent: 'space-between',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
}));

const inputContainer = styled(Box)(({ theme }) => ({
	marginBottom: '2rem',
	gap: '1rem',
	[theme.breakpoints.down('md')]: {
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const buttonReport = styled(Button)(({ theme }) => ({
	width: 'auto',
	minWidth: '150px',
	color: 'white',
	backgroundColor: '#522D6D',
	'&:disabled': {
		color: 'white!important',
		backgroundColor: '#522D6D!important',
		cursor: 'not-allowed!important',
		pointerEvents: 'auto',
		boxShadow:
			'0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
	},
	[theme.breakpoints.down('xs')]: {
		width: '100%',
	},
	[theme.breakpoints.down(374)]: {
		marginBottom: '1rem',
	},
}));

const sectionFooterRedirects = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
}));

const footerRedirects = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '10.625rem',
}));

const footerRedirectsTitle = styled(Typography)(({ theme }) => ({
	color: '#FBFBFB',
	fontSize: '0.875rem',
	fontWeight: '900',
	letterSpacing: '1px',
	lineHeight: '150%',
	marginBottom: '1rem',
}));

const footerRedirectsTopics = styled('a')(({ theme }) => ({
	color: '#FBFBFB',
	fontSize: '0.938rem',
	letterSpacing: '-0.5px',
	lineHeight: '150%',
	marginBottom: '0.25rem',
}));

const bottomText = styled(Typography)(({ theme }) => ({
	fontWeight: '400',
	letterSpacing: '1.5px',
	color: 'white',
}));

export {
	section,
	floatingButton,
	backHomeButton,
	newsLetterContainer,
	inputContainer,
	buttonReport,
	sectionFooterRedirects,
	footerRedirects,
	footerRedirectsTitle,
	footerRedirectsTopics,
	bottomText,
};
