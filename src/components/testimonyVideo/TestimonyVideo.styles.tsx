import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const mainSection = styled(Box)(({ theme }) => ({
	paddingLeft: '6rem',
	paddingRight: '6rem',
	paddingTop: '3rem',
	paddingBottom: '3rem',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '2rem',
	},
}));

export { mainSection };
