import React from "react";
import ReactDOM from "react-dom/client";
import "./normolize.css";
import { Landing } from "./pages";
import { Provider } from "react-redux";
import { Header } from "./components";
import { store } from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Landing />
    </Provider>
  </React.StrictMode>
);
