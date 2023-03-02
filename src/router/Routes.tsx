import { createBrowserRouter } from 'react-router-dom';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
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
		path: '/about',
		element: <About />,
	},
]);

export default browserRouter;
