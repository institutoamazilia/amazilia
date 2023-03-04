import { Typography, Box } from '@mui/material';
import * as Layout from '../../components/header/HeaderAbout.style';
import COLORS from '../layout/colors';
import 'animate.css';
import bgImage from '../../assets/about/bg-praying.png';

export default function Header(props: any) {
	return (
		<Box sx={{ position: 'relative' }}>
			<Layout.pageContainer id='Home'>
				<Layout.bgImage src={bgImage} />
				<Layout.grid>
					<Layout.titleContainer>
						<Typography
							zIndex={4}
							variant='h1'
							fontWeight='600'
							color={COLORS.white}
							gutterBottom
						>
							{props.header.title}
						</Typography>
						<Typography
							variant='body1'
							color={COLORS.white}
							gutterBottom
						>
							{props.header.subtitle}
						</Typography>
					</Layout.titleContainer>
					<Layout.image
						className='animate__animated animate__slideInRight'
						src={props.header.img}
						alt='foto equipe amazilia'
					/>
				</Layout.grid>
			</Layout.pageContainer>
		</Box>
	);
}
