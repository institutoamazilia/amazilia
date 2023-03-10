import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const slide = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	width: '100%',
	transform: `translate3d(${-(currentIndex - 1) * 40}%, 0, 0)`,
	marginLeft: '6rem',
	transition: 'transform 0.5s ease',
}));
