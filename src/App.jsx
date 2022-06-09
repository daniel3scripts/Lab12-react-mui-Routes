import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
//import { HomeView } from "./pages";
import "./App.css";

import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
{/*       <div className="App">
        <HomeView />
      </div> */}
      <Router />
    </ThemeProvider>
  );
}

export default App;
