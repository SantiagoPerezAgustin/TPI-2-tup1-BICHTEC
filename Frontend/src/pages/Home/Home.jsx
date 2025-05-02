import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="page-layout">
        <Header />
        <div className="home-container">
          <h2>Bienvenido a la página principal</h2>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
