import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import BirthdayPage from "./Pages/BirthdayPage/BirthdayPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/BirthdayPage" element={<BirthdayPage />}/>
    </Routes>
  </BrowserRouter>
);