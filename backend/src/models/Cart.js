const {DataTypes} = require('sequelize')
const sequelize = require('../server'); // Import sequelize instance from server.js

module.exports = (sequelize) =>{
    const Cart = sequelize.define("Order",{
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    })
}