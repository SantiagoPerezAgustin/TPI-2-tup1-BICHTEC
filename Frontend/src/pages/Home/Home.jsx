import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousels from "../../components/CarouselsExample/Carousels";

const Home = () => {
  return (
    <>
      <Header />
      <Carousels />
      <Footer />
    </>
  );
};

export default Home;
