const {DataTypes} = require('sequelize')
const sequelize = require('../config/database'); // Import sequelize instance from server.js


    const Product = sequelize.define("Product",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })

module.exports = Product;
