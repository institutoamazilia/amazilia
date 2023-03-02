interface IMain {
	title: string;
	text: string;
}

interface IReports {
	title: string;
	fileName: string;
	fileLink: string;
}

interface IEthics {
	title: string;
	fileName1: string;
	fileName2: string;
	fileName3: string;
	fileLink1: string;
	fileLink2: string;
	fileLink3: string;
}

interface IWhatWeDid {
	number: string;
	location: string;
	bottomText: string;
}

const mainText: IMain = {
	title: 'Transparência',
	text: 'Sabemos da importância de sermos transparentes para criarmos um ambiente sólido e de confiança. Acompanhe nossas atividades anuais e prestação de contas para a sociedade.',
};

const Reports: IReports = {
	title: 'Relatórios',
	fileName: 'Relatório anual 2020',
	fileLink: 'link',
};

const Ethics: IEthics = {
	title: 'Ética e governança',
	fileName1: 'estatuto social',
	fileName2: 'CÓDIGO DE ÉTICA E CONDUTA',
	fileName3: 'organograma',
	fileLink1: 'link',
	fileLink2: 'link',
	fileLink3: 'link',
};

const WhatWeDid: IWhatWeDid[] = [
	{
		number: '70',
		location: 'OSCs (ONGs)',
		bottomText: 'capacitadas de 2020 a 2022',
	},
	{
		number: '42',
		location: 'OSCs (ONGs)',
		bottomText: 'sendo capacitadas atualmente em 2023',
	},
	{
		number: '17',
		location: 'Estados brasileiros',
		bottomText: 'tiveram OSCs participantes das capacitações',
	},
];

export { mainText, Reports, Ethics, WhatWeDid };
