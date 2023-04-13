import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import App from "./components/App";

// function App() {
//   return <Home />;
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
document.getElementById("root")
);
