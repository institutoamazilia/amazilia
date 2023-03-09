import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

const mainContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '4rem',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
}));

export { mainContainer };
