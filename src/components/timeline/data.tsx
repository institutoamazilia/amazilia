const MainTitle: string = 'Linha do tempo do Amazilia';

interface ITimeline {
	year: string;
	marks: string[];
}

const TimelineInfo: ITimeline[] = [
	{
		year: '2020',
		marks: [
			'Maio: Abertura de CNPJ do Instituto Amazilia.',
			'Julho a novembro: Turma piloto de 16 OSCs convidadas e 24 horas de conteúdos aos sábados.',
			'Dezembro: Lançamento do 1º Edital para o Programa de fortalecimento de OSCs em 2021.',
		],
	},
	{
		year: '2021',
		marks: [
			'Março a Novembro: Turma selecionada via Edital, de 31 OSCs de 12 Estados Brasileiros, sendo 16 OSCs recebendo mentoria e 15 OSCs sem mentoria.',
			'Outubro: Lançamento do 2º Edital para o Programa de fortalecimento de OSCs em 2021.',
		],
	},
	{
		year: '2022',
		marks: [
			'Março a Novembro: Turma selecionada via Edital e parceria, de 26 OSCs de 11 Estados Brasileiros, sendo 100% de OSCs recebendo mentoria.',
		],
	},
];

export { MainTitle, TimelineInfo };
