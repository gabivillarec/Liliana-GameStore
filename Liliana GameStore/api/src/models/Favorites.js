const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('favorites', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
        }
    }, { timestamps: false});
    
};