import * as Layout from './People.styles';
import { Typography } from '@mui/material';
import COLORS from '../layout/colors';
import { trustees } from './data';

export default function Trustees() {
	return (
		<Layout.section>
			<Typography
				variant='h3'
				fontWeight='600'
				color={COLORS.primaryDark}
				sx={{
					marginBottom: '2.625rem',
				}}
			>
				Conselho curador
			</Typography>
			{trustees.map(item => {
				return (
					<>
						<Layout.teamName>{item.title}</Layout.teamName>
						<Layout.teamRole
							sx={{
								marginBottom: '1.813rem',
							}}
						>
							{item.responsibility}
						</Layout.teamRole>
					</>
				);
			})}
		</Layout.section>
	);
}
