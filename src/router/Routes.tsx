import { createBrowserRouter } from 'react-router-dom';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Impact from '../pages/impact/Impact';
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
	{
		path: '/impact',
		element: <Impact />,
	},
]);

export default browserRouter;
