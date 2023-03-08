import quality from '../../../assets/impact/ed-quality.png';
import health from '../../../assets/impact/health.png';
import peace from '../../../assets/impact/peace.png';
import work from '../../../assets/impact/good-work.png';

interface ISubtitle {
	sub1: string;
	sub2: string;
}

const Subtitle: ISubtitle = {
	sub1: 'Os ODS - Objetivos de desenvolvimento sustentável - são uma coleção de 17 objetivos globais e 169 metas, estabelecidas pela ONU em 2015, para se atingir até 2030.',
	sub2: 'Aqui, no Instituto Amazilia, focamos contribuir especialmente para estes quatro ODS:',
};

const images: string[] = [quality, health, peace, work];

export { Subtitle, images };
