import * as Layout from './ValuesCard.style';
import CardMedia from '@mui/material/CardMedia';
import { cards } from './data';

export default function ValuesCard() {
	return (
		<Layout.containerValues>
			<Layout.titleValues>Nossos valores</Layout.titleValues>
			<Layout.containerCardList>
				{cards.map(card => {
					return (
						<Layout.containerCard>
							<CardMedia
								component='img'
								height='300'
								image={card.bgImage}
								alt='Image Title'
							/>
							<Layout.itemsCard>
								<img src={card.topImage} />
								<Layout.titleCard>
									{card.title}
								</Layout.titleCard>
								<Layout.textCard>
									{card.description}
								</Layout.textCard>
							</Layout.itemsCard>
						</Layout.containerCard>
					);
				})}
			</Layout.containerCardList>
		</Layout.containerValues>
	);
}
