const { Sequelize } = require('sequelize')
require('dotenv').config()  //load env variables from .env file

const sequelize = new Sequelize('pro1', 'root', 'Amie233#', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
    logging: console.log  // Enable SQL logging
  });
  
  
  // Test the connection to MySQL
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  
  // Sync all models (creates tables based on models if they don't exist)
  sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synced with force.');
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });


  module.exports = sequelize;