import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

//files
import "./index.css";
import App from "./App";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
