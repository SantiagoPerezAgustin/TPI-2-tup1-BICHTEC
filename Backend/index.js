const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos.routes.js');
const pedidosRoutes = require('./routes/pedidos.routes.js');
const pedidosDetallesRoutes = require('./routes/pedidosDetalles.routes.js');
const usuariosRoutes = require('./routes/usuarios.routes.js');
const categoriasRoutes = require('./routes/categorias.routes.js');
const sequelize = require('./database/conexion.js');


require('./model/relations.js'); // Importar las relaciones aquí

// Middleware para procesar JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rutas
app.use("/productos", productosRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/pedidosDetalles", pedidosDetallesRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/categorias", categoriasRoutes);

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

