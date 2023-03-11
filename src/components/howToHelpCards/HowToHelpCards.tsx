import * as Layout from './HowToHelpCards.styles';
import { title, Cards } from './data';
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
} from '@mui/material';

export default function HowToHelpCards() {
	return (
		<Layout.bgPurple>
			<Layout.mainSection>
				<Layout.sectionTitle>{title}</Layout.sectionTitle>
				<Layout.cardBox>
					{Cards.map(item => {
						return (
							<Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
								<CardMedia
									component='img'
									alt='green iguana'
									height='140'
									image={item.image}
								/>
								<Layout.cardTextBox>
									<Layout.cardTitle gutterBottom>
										{item.title}
									</Layout.cardTitle>
									<Layout.cardText
										variant='body2'
										color='text.secondary'
									>
										{item.text}
									</Layout.cardText>
								</Layout.cardTextBox>
								<CardActions>
									<Layout.cardButton
										size='medium'
										style={{
											backgroundColor: item.buttonColor,
										}}
									>
										{item.buttonText}
									</Layout.cardButton>
								</CardActions>
							</Card>
						);
					})}
				</Layout.cardBox>
			</Layout.mainSection>
		</Layout.bgPurple>
	);
}
