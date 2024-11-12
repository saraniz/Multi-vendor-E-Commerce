const {DataTypes} = require('sequelize')
const sequelize = require('../config/database'); // Import sequelize instance from server.js


    const Cart = sequelize.define("Order",{
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    })

    module.exports = Cart;