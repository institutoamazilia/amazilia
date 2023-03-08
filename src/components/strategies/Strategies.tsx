import * as Layout from './Strategies.styles';
import { mainTitle, Card } from './data';

export default function Strategies() {
	return (
		<Layout.mainContainer>
			<Layout.mainTitle>{mainTitle}</Layout.mainTitle>
			<Layout.containerCard>
				{Card.map((item, i) => {
					return (
						<Layout.card>
							<img src={item.image} />
							<Layout.titleCard color={item.theme}>
								{i + 1}º
							</Layout.titleCard>
							<Layout.titleCard color={item.theme}>
								{item.title}
							</Layout.titleCard>
							{item.topics.map(topic => {
								return (
									<Layout.textCard>{topic}</Layout.textCard>
								);
							})}
						</Layout.card>
					);
				})}
			</Layout.containerCard>
		</Layout.mainContainer>
	);
}
