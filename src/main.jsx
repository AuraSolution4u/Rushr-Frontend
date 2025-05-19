import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <Router>
        
      <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
