import { createBrowserRouter } from 'react-router-dom';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Home from '../pages/home/Home';
import Sobre from '../pages/sobre/Sobre';
const browserRouter = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/politica-de-privacidade',
		element: <PrivacyPolicy />,
	},
	{
		path: '/sobre',
		element: <Sobre />,
	},
]);

export default browserRouter;
