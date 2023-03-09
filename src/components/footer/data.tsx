import ellipseFooter from '../../assets/ellipse-footer.png';
import MIcon from '../../assets/Micon.png';

interface IFooterRedirects {
	title: string;
	topic1: string;
	topic2: string;
	topic3?: string;
	topic4?: string;
	topic5?: string;
	link1?: string;
	link2?: string;
	link3?: string;
	link4?: string;
	link5?: string;
	contact?: boolean;
}

const FooterRedirects: IFooterRedirects[] = [
	{
		title: 'MAPA DO SITE',
		topic1: 'Quem somos',
		topic2: 'Impacto',
		topic3: 'Fortalecimento de OSC',
		topic4: 'Fundo Amazilia',
		topic5: 'Contato',
		link1: '/about',
		link2: '/impact',
		link3: '',
		link4: '',
		link5: '',
	},
	{
		title: 'DESTAQUES',
		topic1: 'Transparência',
		topic2: 'Invista no Fundo Amazilia',
		link1: '/about#trasparency',
		link2: '',
	},
	{
		title: 'CONTEÚDO',
		topic1: 'Glossário de impacto social',
		topic2: 'Publicações',
		link1: '',
		link2: '',
	},
	{
		title: 'FALE CONOSCO',
		topic1: 'contato@amazilia.org.br',
		topic2: 'ouvidoria@amazilia.org.br',
		topic3: 'Trabalhe conosco',
		link3: '',
		contact: true,
	},
];

export { FooterRedirects, ellipseFooter, MIcon };
