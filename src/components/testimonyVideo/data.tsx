import video1 from '../../assets/impact/video1.png';
import video2 from '../../assets/impact/video2.png';
import video3 from '../../assets/impact/video3.png';

const title: string = 'Assista a depoimentos de gestores impactados:';

interface IVideos {
	image: string;
	name: string;
	text: string;
	link: string;
}

const Videos: IVideos[] = [
	{
		image: video1,
		name: 'Julia Hofig',
		text: 'Presidente da OSC Fundação AH, OSC no Mato Grosso do Sul',
		link: '',
	},
	{
		image: video2,
		name: 'Glenda Costa',
		text: 'Gestora de Programas Sociais da ASCOMED, OSC em Minas Gerais',
		link: 'https://youtu.be/Kb49ahKanSg',
	},
	{
		image: video3,
		name: 'Rita Clares',
		text: 'Presidente da ADESCE, OSC no Ceará',
		link: 'https://youtu.be/YgGT8IEz480',
	},
];

const checkMoreButton: string = 'saiba mais sobre nossa transparÊncia';

export { title, Videos, checkMoreButton };
