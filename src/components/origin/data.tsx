import image from '../../assets/about/hummingbird.png';

const MainTitle: string = 'Origem do nome Amazilia';
const BoxText: string =
	'Amazilia é um beija-flor típico das Américas Central e do Sul, e mais que isso, é a nossa inspiração para ter atitude, fazer a nossa parte, amplificar vozes e transformar gerações.';

interface ILeftSection {
	title: string;
	text1: string;
	text2: string;
	text3: string;
	text4: string;
	highlight: string;
}

interface IRightSection {
	title: string;
	text1: string;
	text2: string;
	highlight: string;
	image: string;
}

const LeftSection: ILeftSection = {
	title: 'Segundo uma lenda...',
	text1: '...contada pelo povo Quechua,  houve um incêndio na floresta. Enquanto as chamas do fogo consumiam  seus lares, os animais assustados  fugiram e ficaram olhando a floresta queimar.',
	text2: 'Surgiu entao um beija-flor, com o máximo de água que seu pequeno bico conseguia carregar e jogou em cima do fogo. Ele ia e voltava diversas vezes até os animais perguntarem ao pequeno beija-flor o que ele estava fazendo.',
	text3: 'Com naturalidade, ele respondeu: ',
	text4: 'Não foi a água de seu pequeno bico que acabou com o fogo da floresta, a atitude e a esperança inspiraram os outros animais que também puderam colaborar no combate ao fogo.',
	highlight: '“Só estou dando o melhor para fazer minha parte.”',
};

const RightSection: IRightSection = {
	title: 'Nossa inspiração',
	text1: ' Ao invés de lamentarmos os grandes desafios e problemas do mundo, fazemos acontecer, executando soluções e projetos efetivos.',
	text2: 'Não importa se somos pequenos, damos o nosso melhor para fazer a nossa parte e lhe convidamos a se juntar.',
	highlight:
		'O legado do pequeno beija-flor é de nos inspirar, inspirar nossa missão.',
	image: image,
};

export { MainTitle, BoxText, LeftSection, RightSection };
