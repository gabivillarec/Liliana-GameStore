const {DataTypes} = require('sequelize');

const Brand = (sequelize) => {

    sequelize.define("brand", {
        
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        },

        name : {
            type: DataTypes.STRING,
            allowNull : false,
        }

    },{timestamps : false});
};

module.exports = Brand;