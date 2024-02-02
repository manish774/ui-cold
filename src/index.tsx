import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./context/Theme/ThemeProvider";

import "./style.css";
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
