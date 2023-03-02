import image from '../../assets/about/header-about-background.png';

interface header {
	title: string;
	subtitle: string;
	img: string;
}

export const dataHeader: header = {
	title: `Sobre o Instituto Amazilia`,
	subtitle:
		'Somos uma Organização da Sociedade Civil (OSC) que tem como missão fortalecer causas sociais relevantes para o Brasil, dando suporte a organizações e líderes que atuam em desenvolvimento social, educação, inclusão produtiva, arte e cultura.',
	img: image,
};
