import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';

const title: string = 'Como apoiar a causa do Instituto Amazilia?';

interface ICard {
	image: string;
	title: string;
	text: string;
	buttonText: string;
	buttonColor: string;
}

const Cards: ICard[] = [
	{
		image: card1,
		title: 'Seja um doador',
		text: 'Sua doação faz a diferença para impactarmos a vida de milhares de pessoas.',
		buttonText: 'COMO DOAR',
		buttonColor: '#80589C',
	},
	{
		image: card2,
		title: 'Seja um patrocinador',
		text: 'Venha com o Amazilia ser parte da solução de problemas sociais no Brasil.',
		buttonText: 'como patrocinar',
		buttonColor: '#C62C46',
	},
	{
		image: card3,
		title: 'Seja um voluntário',
		text: 'Some suas habilidades a uma equipe comprometida com uma grande causa social.',
		buttonText: 'COMO se voluntariar',
		buttonColor: '#2E5DAF',
	},
];

export { title, Cards };
