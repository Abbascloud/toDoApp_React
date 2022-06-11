import React from "react";
import ReactDOM from "react-dom/client";
import "./normolize.css";
import { Landing } from "./pages";
import { Header } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Landing />
  </React.StrictMode>
);
