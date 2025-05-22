const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
    port: 3306
})


sequelize.authenticate().then(() => {
    return sequelize.query('PRAGMA foreign_keys = ON;');
}).then(() => {
    console.log('Foreign keys activadas en SQLite');
}).catch((error) => {
    console.error('Error al activar foreign keys:', error);
});
//sequelize.sync({force: false})
    //.then(() => {
      //  console.log('Base de datos sincronizada correctamente');
   // })
    //.catch((error) => {
      //  console.error('Error al sincronizar la base de datos:', error);
    //});

module.exports = sequelize;