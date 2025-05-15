const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos.routes.js');
const pedidosRoutes = require('./routes/pedidos.routes.js');
const pedidosDetallesRoutes = require('./routes/pedidosDetalles.routes.js');
const usuariosRoutes = require('./routes/usuarios.routes.js');
const categoriasRoutes = require('./routes/categorias.routes.js');
const marcasRoutes = require('./routes/marcas.routes.js'); 
const authRoutes = require('./routes/auth.routes.js');
const CategoriaMarcaRoutes = require('./routes/categoriaMarca.routes.js'); 
const sequelize = require('./database/conexion.js');


require('./model/relations.js'); // Importar las relaciones aquí

// Middleware para procesar JSON
app.use(express.json());

// Middleware para procesar datos de formularios
app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    });

// Rutas
app.use("/productos", productosRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/pedidosDetalles", pedidosDetallesRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/categorias", categoriasRoutes);
app.use("/marcas", marcasRoutes);
app.use("/auth", authRoutes);
app.use("/categoriaMarca", CategoriaMarcaRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(3000, () => {
          console.log('Server is running on port 3000');
        })
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

