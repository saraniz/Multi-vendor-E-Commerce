// const { Sequelize } = require('sequelize');
// require('dotenv').config(); // Load environment variables from .env file

// // Initialize Sequelize with connection options
// const sequelize = new Sequelize(
//   process.env.SUPABASE_DB, 
//   process.env.SUPABASE_USER, 
//   process.env.SUPABASE_PASSWORD, 
//   {
//     host: process.env.SUPABASE_HOST,
//     port: 6543, // Supabase default port for PostgreSQL
//     dialect: 'postgres',
//     // logging: process.env.NODE_ENV === 'development' ? console.log : false, // Log SQL only in development mode
//     dialectOptions:{
//       connectTimeout: 60000,
//     }
//   }
// );

// // Test the connection
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('✅ Connection to the database established successfully.');
//   } catch (error) {
//     console.error('❌ Unable to connect to the database:', error);
//   }
// })();

// module.exports = sequelize;