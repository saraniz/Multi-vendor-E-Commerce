// // models/user.js
// const { DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/database'); // Import sequelize instance from server.js


//     const User = sequelize.define('User', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         fullName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         mobileNo:{
//             type: DataTypes.STRING,
//             allowNull:false,
//         },
//         gender:{
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         address:{
//             type: DataTypes.STRING,
//             allowNull:false,
//         },
//         role:{
//             type: DataTypes.STRING,
//             defaultValue: "customer",
//         },
//         isSeller:{
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//     }, {
//         tableName: 'users',
//         timestamps: false,
//         hooks: {
//             beforeCreate: async (user) => {
//                 const saltRounds = 10;
//                 user.password = await bcrypt.hash(user.password, saltRounds);
//             },
//         },
//     });

//   module.exports = User;

