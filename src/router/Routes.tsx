import { createBrowserRouter } from "react-router-dom";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Home from "../pages/home/Home";
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/politica-de-privacidade",
    element: <PrivacyPolicy />,
  },
]);

export default browserRouter;
