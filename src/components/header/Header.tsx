import Typography from '@mui/material/Typography';
// import { dataHeader } from './data';
import * as Layout from '../../components/header/Header.styles';
import COLORS from '../layout/colors';
import 'animate.css';

export default function Header(props: any) {
	return (
		<Layout.pageContainer id='Home' bgcolor={props.color}>
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
	);
}
