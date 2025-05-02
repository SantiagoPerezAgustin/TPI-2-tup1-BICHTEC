import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import FormPage from "./pages/FormPage/FormPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<FormPage />} />
        
      </Routes>
    </>
  );
}

export default App;
