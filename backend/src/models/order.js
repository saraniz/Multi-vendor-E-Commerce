const {DataTypes} = require('sequelize')
const sequelize = require('../server'); // Import sequelize instance from server.js

module.exports = (sequelize) =>{
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
    return Order;
}