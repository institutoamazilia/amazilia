import * as Layout from './Results.styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { data } from './data';
import { v4 as uuidv4 } from 'uuid';
import COLORS from '../layout/colors';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

export default function Results() {
	return (
		<>
			<Box id='results' sx={{ padding: { xs: '2rem', md: '6rem' } }}>
				<Box>
					<Typography
						variant='h2'
						color={COLORS.primary}
						fontWeight='600'
					>
						{data.title}
					</Typography>
					<Typography fontFamily='Open Sans' color='#260441'>
						{data.subt}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', sm: 'row' },
							width: '100%',
							marginTop: '3rem',
							gap: { xs: '3rem', sm: 0 },
						}}
					>
						{data.cards.map((item, index) => (
							<Box
								key={uuidv4()}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%',
								}}
							>
								<Typography
									key={uuidv4()}
									color={COLORS.primary}
									variant='h5'
								>
									{item.title}
								</Typography>
								<Box
									key={uuidv4()}
									sx={{
										display: 'flex',
										flexDirection: 'row',
										width: { xs: '100%', md: '90%' },
										justifyContent: 'space-between',
										textAlign: {
											xs: 'center',
											sm: 'start',
										},
									}}
								>
									{item.values.map((i, key) => (
										<Box
											key={uuidv4()}
											sx={{
												display: 'flex',
												marginRight: '1rem',
												flexDirection: 'column',
											}}
										>
											<Typography
												key={uuidv4()}
												color='#4C4B8F'
												fontFamily='Fira Sans'
												fontWeight='700'
												sx={{
													fontSize: {
														xs: '60px',
														md: '96px',
													},
												}}
											>
												{i.value}
											</Typography>
											<Typography
												key={uuidv4()}
												sx={{
													width: {
														xs: '80%',
														sm: '70%',
													},
													textAlign: {
														xs: 'center',
														sm: 'start',
													},
												}}
												variant='h3'
												color={COLORS.primary}
												fontWeight='600'
											>
												{' '}
												{i.title}
											</Typography>
										</Box>
									))}
								</Box>
							</Box>
						))}
					</Box>
				</Box>
				<Link to='/impact' target='_blank'>
					<Layout.knowMore endIcon={<ArrowRightIcon />}>
						Ver mais sobre nosso Impacto
					</Layout.knowMore>
				</Link>
			</Box>
		</>
	);
}
