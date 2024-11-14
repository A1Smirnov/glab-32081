// ./src/App.js

import "./style.css";
import Nav from "./components/Nav.js";
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies.js";
import Main from "./pages/Main.js";
import Price from "./pages/Price.js";

export default function App() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/price/:symbol" element={<Price />} />
        </Routes>
      </div>
    );
  }
