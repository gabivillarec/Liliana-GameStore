const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('orders', {
        order_numer: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        estado:{
            type: DataTypes.STRING,
            allowNull: false
        }
        ,
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue : false
        }
    }, { timestamps: false});
};