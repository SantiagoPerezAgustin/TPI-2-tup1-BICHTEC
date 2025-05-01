import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Carousels from "./pages/Carousels/Carousels.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Carousels />} />
          <Route path="/Home" element={<Home />} />
        </Routes>\
        <div className="app-layout">
        </div>
    </>
  );
}


export default App;
