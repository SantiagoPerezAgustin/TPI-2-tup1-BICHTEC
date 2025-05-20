import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiltroContext } from "../../context/FiltroContext";

const SIDEBAR_WIDTH = 250;

const SideBar = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((data) =>
        setCategorias(Array.isArray(data) ? data : data.categorias || [])
      );
  }, []);

  useEffect(() => {
    if (categoriaSeleccionada) {
      fetch(
        `http://localhost:3000/categoriaMarca/categoria/${categoriaSeleccionada}`
      )
        .then((res) => res.json())
        .then((data) =>
          setMarcas(Array.isArray(data.marcas) ? data.marcas : [])
        );
      setMarcaSeleccionada(null);
    } else {
      setMarcas([]);
      setMarcaSeleccionada(null);
    }
  }, [categoriaSeleccionada]);

  const handleCategoriaClick = (cat) => {
    setCategoriaSeleccionada(cat.id || cat._id);
  };

  const handleMarcaClick = (marca) => {
    setMarcaSeleccionada(marca.id || marca._id);
  };

  const categoriaSeleccionadaObj = categorias.find(
    (cat) => (cat.id || cat._id) === categoriaSeleccionada
  );

  const marcaSeleccionadaObj = marcas.find(
    (marca) => (marca.id || marca._id) === marcaSeleccionada
  );

  return (
    <FiltroContext.Provider
      value={{ categoriaSeleccionada, marcaSeleccionada }}
    >
      <div
        className="sidebar-fixed"
        style={{
          width: SIDEBAR_WIDTH,
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
          backgroundColor: "#1a1a1a",
          color: "black",
          zIndex: 100,
          padding: "24px 0 0 0",
        }}
      >
        <ul className="nav flex-column p-3 mt-5">
          {(categoriaSeleccionadaObj || marcaSeleccionadaObj) && (
            <li className="mb-3">
              {categoriaSeleccionadaObj && (
                <div className="badge bg-primary mb-1">
                  Categoría:{" "}
                  {categoriaSeleccionadaObj.nombre ||
                    categoriaSeleccionadaObj.name}
                </div>
              )}
              {marcaSeleccionadaObj && (
                <div className="badge bg-secondary">
                  Marca:{" "}
                  {marcaSeleccionadaObj.nombre || marcaSeleccionadaObj.name}
                </div>
              )}
            </li>
          )}
          <li className="nav-item dropdown mb-2">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="categoriasDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </a>
            <ul className="dropdown-menu" aria-labelledby="categoriasDropdown">
              {categorias.length === 0 ? (
                <li>
                  <span className="dropdown-item">Cargando...</span>
                </li>
              ) : (
                categorias.map((cat) => (
                  <li key={cat.id || cat._id}>
                    <button
                      className={`dropdown-item${
                        categoriaSeleccionada === (cat.id || cat._id)
                          ? " active"
                          : ""
                      }`}
                      onClick={() => handleCategoriaClick(cat)}
                    >
                      {cat.nombre || cat.name}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </li>

          <li className="nav-item dropdown mb-2">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="marcasDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Marcas
            </a>
            <ul className="dropdown-menu" aria-labelledby="marcasDropdown">
              {categoriaSeleccionada === null ? (
                <li>
                  <span className="dropdown-item">
                    Seleccione una categoría
                  </span>
                </li>
              ) : marcas.length === 0 ? (
                <li>
                  <span className="dropdown-item">Sin marcas</span>
                </li>
              ) : (
                marcas.map((marca) => (
                  <li key={marca.id || marca._id}>
                    <button
                      className={`dropdown-item${
                        marcaSeleccionada === (marca.id || marca._id)
                          ? " active"
                          : ""
                      }`}
                      onClick={() => handleMarcaClick(marca)}
                    >
                      {marca.nombre || marca.name}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Servicios
            </a>
          </li>
        </ul>
      </div>

      <div
        className="main-with-sidebar"
        style={{
          marginLeft: SIDEBAR_WIDTH,
          minHeight: "100vh",
          padding: "20px",
          background: "#ececec",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </FiltroContext.Provider>
  );
};

export default SideBar;
