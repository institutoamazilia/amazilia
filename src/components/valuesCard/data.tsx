import bgCard1 from '../../assets/about/mobilization.png';
import handsTogether from '../../assets/about/hands-together.png';
import bgCard2 from '../../assets/about/love-for-the-cause.png';
import holdingPlanet from '../../assets/about/holding-planet.png';
import bgCard3 from '../../assets/about/empathy.png';
import groupChatting from '../../assets/about/group-chatting.png';
import bgCard4 from '../../assets/about/learning.png';
import paperBird from '../../assets/about/paper-bird.png';
import bgCard5 from '../../assets/about/bg-integrity.png';

export interface ICard {
	bgImage: string;
	topImage: string;
	title: string;
	description: string;
}

export const cards: ICard[] = [
	{
		bgImage: bgCard1,
		topImage: handsTogether,
		title: '1. Mobilização em rede',
		description:
			'Cada um fazendo sua parte, seremos exemplos para inspirar outros.',
	},
	{
		bgImage: bgCard2,
		topImage: holdingPlanet,
		title: '2. Amor pela causa',
		description: 'Motivados a fazer o nosso melhor.',
	},
	{
		bgImage: bgCard3,
		topImage: groupChatting,
		title: '3. Empatia para acolher',
		description: 'Conexões com empatia são as mais transformadoras.',
	},
	{
		bgImage: bgCard4,
		topImage: paperBird,
		title: '4. Aprendizado contínuo',
		description:
			'Ambiente de troca, em que todos podem ensinar e aprender.',
	},
	{
		bgImage: bgCard5,
		topImage: handsTogether,
		title: '5. Integridae e transparência',
		description:
			'Comunicação clara e verdadeira, mesmo em momentos difíceis.',
	},
];
