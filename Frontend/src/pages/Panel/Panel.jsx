import React, { useEffect, useState } from "react";
import FormAgregarProducto from "../../components/AgregarProducto/FormAgregarProducto";
import FormAgregarCategoria from "../../components/AgregarCategoria/FormAgregarCategoria";
import CardCategoria from "../../components/CardCategoria/CardCategoria";
import CardModificarCategoria from "../../components/CardModificarCategoria/CardModificarCategoria";
import CardMarca from "../../components/CardMarca/CardMarca";
import CardModificarMarca from "../../components/CardModificarMarca/CardModificarMarca";
import FormAgregarMarca from "../../components/AgregarMarca/FormAgregarMarca";
import CardCategoriaMarca from "../../components/CardCategoriaMarca/CardCategoriaMarca";
import FormAgregarRelacion from "../../components/AgregarRelacion/FormAgregarRelacion";
import { toast } from "react-toastify";

const Panel = () => {
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [relaciones, setRelaciones] = useState([]);
  const [categoriaAModificar, setCategoriaAModificar] = useState(null);
  const [marcaAModificar, setMarcaAModificar] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/marcas")
      .then((res) => res.json())
      .then((data) => setMarcas(data.marcas || []));

    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((data) => setCategorias(data.categorias || []));

    fetch("http://localhost:3000/categoriaMarca")
      .then((res) => res.json())
      .then((data) => setRelaciones(data.relaciones || []));
  }, []);

  const handleEliminarCategoria = (categoria) => {
    toast.info(
      <div>
        ¿Deseas eliminar la categoría <b>{categoria.nombre}</b>?
        <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
          <button
            style={{
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={async () => {
              toast.dismiss();
              try {
                const res = await fetch(
                  `http://localhost:3000/categorias/${categoria.id}`,
                  {
                    method: "DELETE",
                  }
                );
                if (res.ok) {
                  setCategorias((prev) =>
                    prev.filter((c) => c.id !== categoria.id)
                  );
                  toast.success("Categoría eliminada");
                } else {
                  toast.error("No se pudo eliminar la categoría.");
                }
              } catch {
                toast.error("Error de conexión al eliminar.");
              }
            }}
          >
            Sí
          </button>
          <button
            style={{
              background: "#ffe066",
              color: "#222",
              border: "1px solid #bfa100",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      { autoClose: false }
    );
  };

  // Función para modificar categoría con confirmación toast (ejemplo)
  const handleModificarCategoria = (categoria) => {
    toast.info(
      <div>
        ¿Deseas modificar la categoría <b>{categoria.nombre}</b>?
        <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
          <button
            style={{
              background: "#ffe066",
              color: "#222",
              border: "1px solid #bfa100",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => {
              toast.dismiss();
              setCategoriaAModificar(categoria);
            }}
          >
            Sí
          </button>
          <button
            style={{
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      { autoClose: false }
    );
  };

  const handleEliminarMarca = (marca) => {
    toast.info(
      <div>
        ¿Deseas eliminar la marca <b>{marca.nombre}</b>?
        <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
          <button
            style={{
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={async () => {
              toast.dismiss();
              try {
                const res = await fetch(
                  `http://localhost:3000/marcas/${marca.id}`,
                  { method: "DELETE" }
                );
                if (res.ok) {
                  setMarcas((prev) => prev.filter((m) => m.id !== marca.id));
                  toast.success("Marca eliminada");
                } else {
                  toast.error("No se pudo eliminar la marca.");
                }
              } catch {
                toast.error("Error de conexión al eliminar.");
              }
            }}
          >
            Sí
          </button>
          <button
            style={{
              background: "#ffe066",
              color: "#222",
              border: "1px solid #bfa100",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      { autoClose: false }
    );
  };

  const handleModificarMarca = (marca) => {
    toast.info(
      <div>
        ¿Deseas modificar la marca <b>{marca.nombre}</b>?
        <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
          <button
            style={{
              background: "#ffe066",
              color: "#222",
              border: "1px solid #bfa100",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => {
              toast.dismiss();
              setMarcaAModificar(marca);
            }}
          >
            Sí
          </button>
          <button
            style={{
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      { autoClose: false }
    );
  };

  // En tu Panel.jsx
  const handleEliminarRelacion = (relacion) => {
    toast.info(
      <div>
        ¿Deseas eliminar la relación <b>#{relacion.id}</b>?
        <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
          <button
            style={{
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={async () => {
              toast.dismiss();
              try {
                const res = await fetch(
                  `http://localhost:3000/categoriaMarca/${relacion.id}`,
                  { method: "DELETE" }
                );
                if (res.ok) {
                  setRelaciones((prev) =>
                    prev.filter((r) => r.id !== relacion.id)
                  );
                  toast.success("Relación eliminada");
                } else {
                  toast.error("No se pudo eliminar la relación.");
                }
              } catch {
                toast.error("Error de conexión al eliminar.");
              }
            }}
          >
            Sí
          </button>
          <button
            style={{
              background: "#ffe066",
              color: "#222",
              border: "1px solid #bfa100",
              padding: "5px 16px",
              borderRadius: 5,
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      { autoClose: false }
    );
  };

  return (
    <>
      {categoriaAModificar && (
        <CardModificarCategoria
          categoria={categoriaAModificar}
          onClose={() => setCategoriaAModificar(null)}
          onCategoriaModificada={(catActualizada) => {
            setCategorias((prev) =>
              prev.map((cat) =>
                cat.id === catActualizada.id ? catActualizada : cat
              )
            );
          }}
        />
      )}
      {marcaAModificar && (
        <CardModificarMarca
          marca={marcaAModificar}
          onClose={() => setMarcaAModificar(null)}
          onMarcaModificada={(marcaActualizada) => {
            setMarcas((prev) =>
              prev.map((m) =>
                m.id === marcaActualizada.id ? marcaActualizada : m
              )
            );
            setMarcaAModificar(null);
          }}
        />
      )}
      <div
        className="panel-container"
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          background: "rgb(248, 232, 139)",
          paddingTop: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8px #ffe066",
            alignSelf: "center",
          }}
        >
          Panel de Administración
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#7c6f00",
            background: "#fffde7",
            padding: "1.5rem 2.5rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 24px 0 rgba(191,161,0,0.08)",
            maxWidth: "800px",
            width: "600px",
            marginTop: "0",
          }}
        >
          Bienvenido al panel de administración.
          <br />
          Aquí puedes gestionar los productos, usuarios y más.
        </p>

        <br />
        <br />
        <br />

        <hr
          style={{
            width: "80%",
            border: "none",
            borderTop: "2px solid rgb(30, 30, 29)",
            margin: "2rem auto",
          }}
        />

        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8px #ffe066",
            alignSelf: "center",
          }}
        >
          Productos
        </h1>
        <h1
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8pxrgb(230, 190, 27)",
            alignSelf: "center",
          }}
        >
          Agregar nuevo Producto:
        </h1>

        <FormAgregarProducto marcas={marcas} categorias={categorias} />

        <br />
        <br />
        <br />

        <hr
          style={{
            width: "80%",
            border: "none",
            borderTop: "2px solid rgb(30, 30, 29)",
            margin: "2rem auto",
          }}
        />

        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8px #ffe066",
            alignSelf: "center",
          }}
        >
          Categorías
        </h1>
        <h1
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8pxrgb(230, 190, 27)",
            alignSelf: "center",
          }}
        >
          Todas las categorías:
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {categorias.map((categoria) => (
            <CardCategoria
              key={categoria.id}
              categoria={categoria}
              onEliminar={() => handleEliminarCategoria(categoria)}
              onModificar={setCategoriaAModificar}
            />
          ))}
        </div>

        <br />
        <br />

        <h1
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8pxrgb(230, 190, 27)",
            alignSelf: "center",
          }}
        >
          Agregar nueva Categoría:
        </h1>

        <FormAgregarCategoria
          onCategoriaAgregada={(nuevaCategoria) => {
            setCategorias((prev) => [...prev, nuevaCategoria]);
          }}
        />

        <br />
        <br />

        <hr
          style={{
            width: "80%",
            border: "none",
            borderTop: "2px solid rgb(30, 30, 29)",
            margin: "2rem auto",
          }}
        />

        <br />

        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8px #ffe066",
            alignSelf: "center",
          }}
        >
          Marcas
        </h1>
        <h1
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8pxrgb(230, 190, 27)",
            alignSelf: "center",
          }}
        >
          Todas las marcas:
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {marcas.map((marca) => (
            <CardMarca
              key={marca.id}
              marca={marca}
              onEliminar={() => handleEliminarMarca(marca)}
              onModificar={setMarcaAModificar}
            />
          ))}
        </div>
        <br />
        <br />

        <h1
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8pxrgb(230, 190, 27)",
            alignSelf: "center",
          }}
        >
          Agregar nueva Marca:
        </h1>
        <FormAgregarMarca
          onMarcaAgregada={(nuevaMarca) => {
            setMarcas((prev) => [...prev, nuevaMarca]);
          }}
        />
        <br />
        <br />

        <hr
          style={{
            width: "80%",
            border: "none",
            borderTop: "2px solid rgb(30, 30, 29)",
            margin: "2rem auto",
          }}
        />

        <br />

        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8px #ffe066",
            alignSelf: "center",
          }}
        >
          Relaciones entre Categorías y Marcas
        </h1>
        <h1
          style={{
            fontSize: "1.0rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8pxrgb(230, 190, 27)",
            alignSelf: "center",
          }}
        >
          Categorías y Marcas deben estar relacionadas para el correcto
          funcionamiento de los filtros de búsqueda de productos.
        </h1>
        <br />
        <h1
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8pxrgb(230, 190, 27)",
            alignSelf: "center",
          }}
        >
          Todas las relaciones categoría-marca:
        </h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {relaciones.map((rel) => (
            <CardCategoriaMarca
              key={rel.id}
              categoriaMarca={rel}
              onEliminar={() => handleEliminarRelacion(rel)}
            />
          ))}
        </div>
        <br />
        <h1
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#bfa100",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8pxrgb(230, 190, 27)",
            alignSelf: "center",
          }}
        >
          Agregar nueva Relación:
        </h1>
        <FormAgregarRelacion
          categorias={categorias}
          marcas={marcas}
          onRelacionAgregada={(nuevaRelacion) => {
            setRelaciones((prev) => [...prev, nuevaRelacion]);
          }}
        />
        <br />
        <br />

        <hr
          style={{
            width: "80%",
            border: "none",
            borderTop: "2px solid rgb(30, 30, 29)",
            margin: "2rem auto",
          }}
        />

        <br />
      </div>
    </>
  );
};

export default Panel;
