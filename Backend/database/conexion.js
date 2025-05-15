const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sql10779075', 'sql10779075', '8j5mwcABh1', {
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql',
    port: 3306
})

//sequelize.sync({force: false})
    //.then(() => {
      //  console.log('Base de datos sincronizada correctamente');
   // })
    //.catch((error) => {
      //  console.error('Error al sincronizar la base de datos:', error);
    //});

module.exports = sequelize;