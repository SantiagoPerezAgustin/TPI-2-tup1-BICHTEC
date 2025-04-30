import React from "react";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
    <div className="app-layout">
      <Footer />
    </div>
  );
}

export default App;
