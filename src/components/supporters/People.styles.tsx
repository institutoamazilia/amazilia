import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton, Button } from '@mui/material';

const section = styled(Box)(({ theme }) => ({
	padding: '6rem',
	paddingTop: '4rem',
	paddingBottom: '1rem',
	height: '100%',
	[theme.breakpoints.down('md')]: {
		paddingLeft: '2rem',
		paddingRight: '1rem',
	},
}));

const teamItem = styled(Box)(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center',
	alignItems: 'center',
	height: '37rem',
	marginBottom: '2rem',
	[theme.breakpoints.down('md')]: {},
}));

const teamContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	height: 'auto',
	flexDirection: 'row',
	display: 'flex',
	alignItems: 'start',
	flexWrap: 'wrap',
	[theme.breakpoints.down('md')]: {
		overflow: 'scroll',
		padding: '0px!important',
	},
}));

const teamImage = styled('img')(({ theme }) => ({
	width: '21.5rem',
	heigh: '21.25rem',
}));

const teamName = styled(Typography)(({ theme }) => ({
	minWidth: '150px',
	color: '#522D6D',
	fontSize: '1.5rem',
}));

const teamRole = styled(Typography)(({ theme }) => ({
	fontWeight: 'bold',
	color: '#B06C18',
	fontSize: '1.25rem',
}));

const teamMore = styled(Typography)(({ theme }) => ({
	width: '16.75rem',
	textAlign: 'left',
	marginTop: '0.875rem',
}));

const linkedinButton = styled(IconButton)(({ theme }) => ({
	width: '1.375rem',
	color: '#7F8893',
	position: 'absolute',
	top: '95%',
}));

export {
	section,
	teamItem,
	teamContainer,
	teamImage,
	teamName,
	teamRole,
	teamMore,
	linkedinButton,
};
