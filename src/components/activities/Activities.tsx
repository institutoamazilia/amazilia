import { ActivitiesCards, IActivitiesCard } from './data';
import CardContent from '@mui/material/CardContent';
import { v4 as uuidv4 } from 'uuid';
import * as Layout from './Activities.styles';
import Typewriter from 'typewriter-effect';

export default function Activities() {
	return (
		<Layout.section id='O que fazemos'>
			<Layout.textContainer>
				<Layout.title variant='h1' id='title'>
					<Typewriter
						options={{
							loop: true,
						}}
						onInit={typewriter => {
							typewriter
								.typeString(
									'Transformando boas intenções em realidade de impacto'
								)
								.pauseFor(2000)
								.deleteAll()
								.typeString('pipipipopopo')
								.deleteAll()
								.start();
						}}
					/>
					{/* Transformando boas intenções
					<br />
					em realidade de impacto */}
				</Layout.title>
				<Layout.subtitle gutterBottom>
					{ActivitiesCards.subtitle1}
				</Layout.subtitle>
				<Layout.subtitle gutterBottom>
					{ActivitiesCards.subtitle2}
				</Layout.subtitle>
			</Layout.textContainer>
			<Layout.cardContainer>
				{ActivitiesCards.cards.map((item: IActivitiesCard, index) => (
					<Layout.card key={uuidv4()}>
						<CardContent key={uuidv4()}>
							<img
								key={uuidv4()}
								src={item.icon}
								alt={`icone ${item.title}`}
							/>
							<Layout.cardTitle key={uuidv4()}>
								{item.title}
							</Layout.cardTitle>
						</CardContent>
					</Layout.card>
				))}
			</Layout.cardContainer>
		</Layout.section>
	);
}
