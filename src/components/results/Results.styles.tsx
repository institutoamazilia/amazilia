import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const knowMore = styled(Button)(({ theme }) => ({
	color: '#4C4B8F',
	textDecoration: 'underline',
	textTransform: 'none',
	'&:hover': {
		textDecoration: 'underline',
	},
	marginTop: '4rem',
}));

export { knowMore };
