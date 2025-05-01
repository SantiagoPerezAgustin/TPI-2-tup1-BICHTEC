import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <h2>Bienvenido a la página principal</h2>
      </div>
      <Footer />
    </>
  );
};

export default Home;
