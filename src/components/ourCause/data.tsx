import telescope from '../../assets/impact/telescope.png';
import babyCarriage from '../../assets/impact/Baby-Carriage.png';
import heart from '../../assets/impact/heart.png';
import cup from '../../assets/impact/cup.png';
import cancel from '../../assets/impact/Cancel.png';

const questionTitle: string = 'Qual a nossa causa?';

const sectionTitle: string = 'Desenvolvimento das OSCs (ONGs) e suas pessoas';

interface ICards {
	image: string;
	title: string;
	text: string;
	font: string;
	link: string;
}

const spanCard1: string = '236 mil e 820 mil';

const Cards: ICards[] = [
	{
		image: telescope,
		title: 'Quantidade de OSCs no Brasil',
		text: `Há entre ${spanCard1} ONGs e OSCs no Brasil.`,
		font: 'Fontes: IBGE, IPEA e Mapa do impacto social',
		link: '',
	},
	{
		image: babyCarriage,
		title: 'Foco em micro e pequenas OSCs',
		text: 'Ao olharmos as que empregam até 49 pessoas (sem contar voluntários), são 98%, sendo que 65% não têm profissionais assalariados, contando exclusivamente com voluntários.',
		font: 'Fonte: FASFIL 2016',
		link: 'https://biblioteca.ibge.gov.br/visualizacao/livros/liv101647.pdf',
	},
	{
		image: heart,
		title: 'Cuidar dos que cuidam',
		text: 'A saúde mental e o acolhimento humanizado dos gestores das OSCs são prioridades na forma como fazemos.',
		font: '',
		link: '',
	},
	{
		image: cup,
		title: 'Sustentabilidade das OSCs menores',
		text: 'As micro e pequenas OSCs tendem a ser as mais frágeis.  Fortalecer sua gestão é essencial para que continuem a gerar impacto social positivo.',
		font: '',
		link: '',
	},
];

interface IPopup {
	text: string;
	close: string;
}

const popUp: IPopup = {
	text: 'A imprecisão dos dados é uma barreira, bem como os inúmeros CNPJs ativos e sem atividade em execução ou iniciativas ativas, mas sem CNPJ.',
	close: cancel,
};

export { questionTitle, sectionTitle, Cards, popUp };
