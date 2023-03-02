import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const donateButton = styled(Button)(({ theme }) => ({
	color: 'white',
	width: '8.438rem',
	height: '2.75rem',
	fontSize: '1.125rem',
	alignSelf: 'center',
	lineHeight: '1.75rem',
	marginLeft: '3.5rem',
	borderRadius: '8px',
}));

const donateButtonMenu = styled(Button)(({ theme }) => ({
	marginLeft: '1rem',
	color: 'white',
}));

export { donateButton, donateButtonMenu };
