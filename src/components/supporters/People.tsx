import { Box, Typography, Button } from '@mui/material';
import { data } from './data';
import { v4 as uuidv4 } from 'uuid';
import COLORS from '../layout/colors';
import * as Layout from './People.styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function People() {
	return (
		<Layout.section id='Apoiadores'>
			<Typography
				variant='h3'
				fontWeight='600'
				color={COLORS.primaryDark}
				sx={{ paddingTop: '4rem', padding: { xs: '2rem', md: '0' } }}
			>
				{data.title3}
			</Typography>
			<Box
				sx={{
					marginTop: '2rem',
					marginBottom: '2rem',
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Layout.teamContainer
					sx={{ paddingLeft: { sm: '2rem', md: 0 } }}
				>
					{data.images3.map((item, index) => (
						<Layout.teamItem key={uuidv4()}>
							<Box>
								<Layout.teamImage src={item.img} />
							</Box>
							<Layout.teamName>{item.title}</Layout.teamName>
							<Layout.teamRole>
								{item.responsibility}
							</Layout.teamRole>
							<Layout.teamMore>{item.more}</Layout.teamMore>
							<Layout.linkedinButton aria-label='linkedin'>
								<a
									href={item.linkedin}
									target='_blank'
									style={{
										color: 'inherit',
										textDecoration: 'inherit',
									}}
								>
									<LinkedInIcon />
								</a>
							</Layout.linkedinButton>
						</Layout.teamItem>
					))}
				</Layout.teamContainer>
			</Box>
		</Layout.section>
	);
}
