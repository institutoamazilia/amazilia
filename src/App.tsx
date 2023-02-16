import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Home from "./pages/home/Home";
import { responsiveTheme } from "./styles/globalStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
