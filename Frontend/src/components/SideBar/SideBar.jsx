import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiltroContext } from "../../context/FiltroContext";

const SIDEBAR_WIDTH = 250;

const SideBar = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // SidebarContent solo se renderiza una vez y se muestra en el lugar correcto
  const SidebarContent = (
    <ul className="nav flex-column p-3">
      <li className="mb-3">
        <label className="form-label text-white mb-1">Buscar:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </li>
      <hr className="bg-light" />
      {(categoriaSeleccionadaObj || marcaSeleccionadaObj) && (
        <li className="mb-3">
          {categoriaSeleccionadaObj && (
            <div className="badge bg-primary mb-1">
              Categoría:{" "}
              {categoriaSeleccionadaObj.nombre || categoriaSeleccionadaObj.name}
            </div>
          )}
          {marcaSeleccionadaObj && (
            <div className="badge bg-secondary">
              Marca: {marcaSeleccionadaObj.nombre || marcaSeleccionadaObj.name}
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
              <span className="dropdown-item">Seleccione una categoría</span>
            </li>
          ) : marcas.length === 0 ? (
            <li>
              <span className="dropdown-item text-black">Sin marcas</span>
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

      <hr className="bg-light" />
      <li className="mb-3">
        <label className="form-label text-white mb-1">Precio:</label>
        <input
          type="number"
          className="form-control mb-1"
          placeholder="Mínimo"
          value={precioMin}
          min={0}
          onChange={(e) => setPrecioMin(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Máximo"
          value={precioMax}
          min={0}
          onChange={(e) => setPrecioMax(e.target.value)}
        />
      </li>
    </ul>
  );

  return (
    <FiltroContext.Provider
      value={{
        categoriaSeleccionada,
        setCategoriaSeleccionada,
        marcaSeleccionada,
        setMarcaSeleccionada,
        busqueda,
        setBusqueda,
        precioMin,
        setPrecioMin,
        precioMax,
        setPrecioMax,
      }}
    >
      {/* Botón para móviles */}
      <div className="d-md-none p-2 text-end">
        <button
          className="btn btn-outline-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          Filtros
        </button>
      </div>

      {/* Sidebar fijo para escritorio */}
      {windowWidth >= 768 && (
        <div
          className="d-none d-md-block"
          style={{
            width: SIDEBAR_WIDTH,
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
            backgroundColor: "#1a1a1a",
            paddingTop: "4%",
            color: "white",
            zIndex: 100,
          }}
        >
          {SidebarContent}
        </div>
      )}

      {/* Sidebar offcanvas para móviles */}
      <div
        className="offcanvas offcanvas-start d-md-none"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
        style={{ width: "75vw", backgroundColor: "#1a1a1a" }}
      >
        <div
          className="offcanvas-header text-white"
          style={{ backgroundColor: "#1a1a1a" }}
        ></div>
        <div
          className="offcanvas-body text-white"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {SidebarContent}
        </div>
      </div>

      {/* Contenido principal ajustable */}
      <div
        className="main-with-sidebar"
        style={{
          marginLeft: windowWidth >= 768 ? SIDEBAR_WIDTH : 0,
          padding: "20px",
          background: "#ececec",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </FiltroContext.Provider>
  );
};

export default SideBar;