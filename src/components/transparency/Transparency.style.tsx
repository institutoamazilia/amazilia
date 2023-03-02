import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import bgImage from '../../assets/about/transparency-background.jpg';

const mainContainer = styled(Box)(({ theme }) => ({
	backgroundImage: bgImage,
	backgroundSize: 'cover',
}));

export { mainContainer };
