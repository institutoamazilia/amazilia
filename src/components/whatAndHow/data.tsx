import approveUser from '../../assets/impact/approve-user.png';
import feedback from '../../assets/impact/Feedback.png';
import openBook from '../../assets/impact/open-book.png';
import assistiveListening from '../../assets/impact/assistive-listening-systems.png';
import pen from '../../assets/impact/Pen.png';
import helpFile from '../../assets/impact/help-file.png';
import car from '../../assets/impact/car.png';
import shareFile from '../../assets/impact/share-file.png';
import cancel from '../../assets/impact/Cancel.png';

const mainTitle: string = 'Saiba mais sobre o que e como fazemos';

interface ICards {
	icon: string;
	text: string;
	info?: string;
}

const Cards: ICards[] = [
	{
		icon: approveUser,
		text: 'Seleção de OSCs por meio de Editais ',
		info: 'ⓘ',
	},
	{
		icon: feedback,
		text: 'Diagnósticos das Capacidades da OSC',
	},
	{
		icon: openBook,
		text: 'Capacitações online ou presenciais em gestão no 3º setor',
	},
	{
		icon: assistiveListening,
		text: 'Mentores do 2º e 3º setor',
	},
	{
		icon: pen,
		text: 'Atividades práticas',
	},
	{
		icon: helpFile,
		text: 'Plantões de dúvidas',
	},
	{
		icon: car,
		text: 'Visitas técnicas às OSCs',
	},
	{
		icon: shareFile,
		text: 'Fomento à atuação em rede',
	},
];

interface IPopUp {
	text1: string;
	text2: string;
	close: string;
}

const modal: IPopUp = {
	text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	close: cancel,
};

interface IPdfButton {
	name: string;
	link: string;
}

const PdfButton: IPdfButton = {
	name: 'teoria de mudança',
	link: '',
};

export { mainTitle, Cards, modal, PdfButton };
