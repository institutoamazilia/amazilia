import image1 from '../../assets/google.png';
import image2 from '../../assets/machado.png';
import image3 from '../../assets/mindsight.png';
import imageRenan from '../../assets/Renan.png';
import ibab from '../../assets/ibab.png';
import melissa from '../../assets/melissa.png';
import doug from '../../assets/doug.png';
import fernanda from '../../assets/fernanda.png';
import braga from '../../assets/braga.png';
import taina from '../../assets/taina.png';
import betania from '../../assets/betania.png';

const data = {
	title: 'Agradecemos nossos apoiadores pro bono',
	images: [image1, image2, image3],
	imageRenan: imageRenan,
	linkRenan: 'https://www.instagram.com/renanbenedit/',
	title2: 'Agradecemos nossos parceiros de projetos',
	images2: ibab,
	title3: 'Gente que faz o Amazilia acontecer',
	button: 'conheça todo o nosso time',
};

const dataHome = [
	{
		img: melissa,
		title: 'Melissa Weng',
		responsibility: 'Presidente',
	},
	{
		img: doug,
		title: 'Douglas Alves',
		responsibility: 'Vice-Presidente',
	},
	{
		img: fernanda,
		title: 'Cristina Rocha',
		responsibility: 'Cultura e pessoas',
	},
	{
		img: fernanda,
		title: 'Fernanda Ribela',
		responsibility: 'Programas e Projetos',
	},
];

const dataAbout = [
	{
		img: melissa,
		title: 'Melissa Weng',
		responsibility: 'Presidente',
		more: 'Formada em Gestão Financeira para Faculdade Saint Paul (2015).',
		linkedin: 'https://www.linkedin.com/in/wengmelissa/',
	},
	{
		img: doug,
		title: 'Douglas Alves',
		responsibility: 'Vice-Presidente',
		more: 'Quinze anos de experiência em gestão de projetos sociais (cultura, educação e comunicação) na Fundação Tide Setubal, CENPEC e Itaú Cultural. ',
		linkedin: 'https://www.linkedin.com/in/doug-alves-brand/',
	},
	{
		img: braga,
		title: 'Cristina Rocha',
		responsibility: 'Cultura e pessoas',
		more: '',
		linkedin: 'https://www.linkedin.com/in/cristinna-roca-79b4068a/',
	},
	{
		img: fernanda,
		title: 'Fernanda Ribela',
		responsibility: 'Programas e Projetos',
		more: 'Formada em Gestão de Recursos Humanos - FAAL (2018). Pós graduanda em Coaching e Carreira com ênfase em Gestão de Pessoas - Faculdade Metropolitana (2022).',
		linkedin: 'https://www.linkedin.com/in/fernandaribela/',
	},
	{
		img: betania,
		title: 'Betania Melo',
		responsibility: 'Comunicação',
		more: 'Graduada em Publicidade e Propaganda pela Universidade Mackenzie (2004-2007), atuou por 15 anos na área de Marketing do Banco Paulista S.A.',
		linkedin: 'https://www.linkedin.com/in/betania-melo/',
	},
	{
		img: taina,
		title: 'Tainá Saboia',
		responsibility: 'Full stack developer',
		more: 'Graduada em Publicidade e Propaganda pela Universidade (2004-2007), atuou por 15 anos na área de Marketing do Banco Paulista S.A.',
		linkedin: 'https://www.linkedin.com/in/tasaboia/',
	},
];

const trustees = [
	{
		title: 'Andreas G. de Salis',
		responsibility: 'Presidente do Conselho e administrador',
	},
	{
		title: 'Fabio Fukuda Marques',
		responsibility: 'Economista',
	},
	{
		title: 'Barbara Franco',
		responsibility: 'Advogada',
	},
];

export { data, dataHome, dataAbout, trustees };
