// const { DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/database');  // Import sequelize instance from your configuration

// const Admin = sequelize.define('Admin', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false, 
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false, 
//         unique: true, // Ensure email is unique
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false, 
//     },
//     /*image: {
//         type: DataTypes.STRING,
//         allowNull: false, 
//     },*/
//     role: {
//         type: DataTypes.STRING,
//         defaultValue: 'admin', 
//     },
// }, {
//     tableName: 'admins', // Specify the table name (any name 🟢)
//     timestamps: false,
//     hooks: {
//         beforeCreate: async (user) => {
//             const saltRounds = 10;
//             user.password = await bcrypt.hash(user.password, saltRounds); 
//         },
//     },
// }
// );

// module.exports = Admin; 