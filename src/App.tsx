import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Home from "./pages/home/Home";
import { responsiveTheme } from "./styles/globalStyles";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./router/Routes";

function App() {
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <RouterProvider router={browserRouter} />
      </ThemeProvider>
    </>
  );
}

export default App;
