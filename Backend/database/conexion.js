const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('tanhambur', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//sequelize.sync({force: false})
    //.then(() => {
      //  console.log('Base de datos sincronizada correctamente');
   // })
    //.catch((error) => {
      //  console.error('Error al sincronizar la base de datos:', error);
    //});

module.exports = sequelize;