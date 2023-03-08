import map from '../../assets/impact/map.png';

interface IMainTitle {
	title: string;
	subtitle: string;
}

interface IData {
	title: string;
	number: string;
	info: string;
}

const MainTitle: IMainTitle = {
	title: 'Quais resultados já alcançamos?',
	subtitle: 'Dados acumulados de 2020 a janeiro de 2023.',
};

const Data: IData[] = [
	{
		title: 'Impacto direto em',
		number: '160',
		info: 'gestores sociais',
	},
	{
		title: '',
		number: '67',
		info: 'OSCs participantes',
	},
	{
		title: 'Sedes das OSCs',
		number: '17',
		info: 'Estados brasileiros',
	},
];

export { MainTitle, Data, map };
