import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App"
import Jokes from "./components/jokes";
import Facts from "./components/facts";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/facts" element={<Facts />} />
      </Route>
      <Route
        // default for when the link is wrong
        // like this http://localhost:3000/hjklhjklh
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1 className="backLinkH2">There's nothing here!</h1>
            <p className="backLink">
              <a href="/">To go back click here!</a>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);