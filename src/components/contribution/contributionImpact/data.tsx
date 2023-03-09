import quality from '../../../assets/impact/ed-quality.png';
import health from '../../../assets/impact/health.png';
import peace from '../../../assets/impact/peace.png';
import work from '../../../assets/impact/good-work.png';

interface ISubtitle {
	sub1: string;
	sub2: string;
}

interface IImages {
	image: string;
	info: string;
}

interface IBottomLink {
	text: string;
	link: string;
}

const Subtitle: ISubtitle = {
	sub1: 'Os ODS - Objetivos de desenvolvimento sustentável - são uma coleção de 17 objetivos globais e 169 metas, estabelecidas pela ONU em 2015, para se atingir até 2030.',
	sub2: 'Aqui, no Instituto Amazilia, focamos contribuir especialmente para estes quatro ODS:',
};

const Images: IImages[] = [
	{
		image: quality,
		info: 'ODS 4: Assegurar uma vida saudável e promover o bem-estar para todo(a)s, em todas as idades.',
	},
	{
		image: health,
		info: 'ODS 3: Assegurar uma vida saudável e promover o bem-estar para todo(a)s, em todas as idades.',
	},
	{
		image: peace,
		info: 'ODS 16: Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável.',
	},
	{
		image: work,
		info: 'ODS 8: Promover o crescimento econômico sustentado, inclusivo e sustentável.',
	},
];

const BottomLink: IBottomLink = {
	text: 'Veja mais sobre os ODS no site da ONU',
	link: 'https://brasil.un.org/pt-br/sdgs',
};

export { Subtitle, Images, BottomLink };
