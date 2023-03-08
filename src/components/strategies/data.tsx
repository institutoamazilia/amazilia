import image1 from '../../assets/impact/strategy1.png';
import image2 from '../../assets/impact/strategy2.png';
import image3 from '../../assets/impact/strategy3.png';
import image4 from '../../assets/impact/strategy4.png';

const mainTitle: string = 'Nossa estratégia de impacto social';

interface ICard {
	image: string;
	theme: string;
	title: string;
	topics: string[];
}

const Card: ICard[] = [
	{
		image: image1,
		theme: '#E15383',
		title: 'Desafio das OSCs',
		topics: [
			'Baixa capacidade de mobilizar recursos',
			'Baixa efetividade de impacto',
			'Falta de gestores capacitados',
		],
	},
	{
		image: image2,
		theme: '#522D6D',
		title: 'O que fazemos?',
		topics: [
			'Capacitação de Gestores em competências técnicas e comportamentais',
			'Seleções e capacitações',
			'Diagnósticos e mentorias',
		],
	},
	{
		image: image3,
		theme: '#22595E',
		title: 'Resultados esperados',
		topics: [
			'OSCs executando intervenções eficazes',
			'Equipes de OSCs aprofundam propostas e estratégias',
		],
	},
	{
		image: image4,
		theme: '#2E5DAF',
		title: 'Impacto gerado nas OSCs',
		topics: [
			'Aumento da capacidade de mobilizar recursos',
			'Aumento da efetividade de impacto',
		],
	},
];

export { mainTitle, Card };
