const {DataTypes} = require('sequelize')
const sequelize = require('../config/database'); // Import sequelize instance from server.js

    const Order = sequelize.define ("Order",{
        userId:{
                type: DataTypes.INTEGER,
        },
        productId:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity:{
            type: DataTypes.INTEGER,

        },
        totalPrice:{
            type: DataTypes.DECIMAL(10,2),
        },
        status:{
            type: DataTypes.STRING,
            defaultValue: "Pending",
        },
    })

module.exports = Order;
