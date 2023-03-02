interface IAboutUsChallenge {
	title: string;
	text1: string;
	text2: string;
}

interface IAboutUsMore {
	title: string;
	subtitle: string;
}

const AboutUsTitle: string =
	'Você conhece alguma OSC que nasceu do sonho de mudar uma realidade?';

const AboutUsChallenge: IAboutUsChallenge = {
	title: 'Essa organização enfrenta desafios ligados a gestão?',
	text1: 'Estudos realizados no Brasil apontam que organizações sociais pequenas e médias lutam para sobreviver dia a dia, elas nascem de uma intenção genuína mas não conseguem prosperar. ',
	text2: 'O Instituto Amazilia surgiu do sonho de ajudar quem quer fazer a diferença no Brasil, apoiar as OSCs no aperfeiçoamento da sua gestão e no fortalecimento das competências de seus líderes.',
};

const AboutUsMore: IAboutUsMore[] = [
	{
		title: 'Nossa missão',
		subtitle:
			'Transformar boas intenções em realidade, fortalecendo Organizações Sociais por meio do desenvolvimento de competências de gestão e do acolhimento de seus líderes para que possam gerar impacto efetivo e sustentável.',
	},
	{
		title: 'Nossa visão',
		subtitle:
			'Ser referência de excelência no suporte a organizações, coletivos e movimentos sociais que atuam em desenvolvimento social, educação, inclusão produtiva e artes & cultura.',
	},
];

export { AboutUsTitle, AboutUsChallenge, AboutUsMore };
