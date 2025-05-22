import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import FormPage from "./pages/FormPage/FormPage.jsx";
import Register from "./components/Register/Register.jsx";
import FormPageRegister from "./pages/FormPage/FormPageRegister.jsx";
import Productos from "./pages/Productos/Productos.jsx";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
import Perfil from "./pages/Perfil/Perfil.jsx";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<FormPage />} />
          <Route path="/register" element={<FormPageRegister />} />
          <Route
            path="/productos"
            element={
              <SideBar>
                <Productos />
              </SideBar>
            }
          />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route
            path="/carrito"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
