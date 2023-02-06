import { ThemeProvider } from "@emotion/react";
import Home from "./pages/home/Home";
import { responsiveTheme } from "./styles/globalStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
