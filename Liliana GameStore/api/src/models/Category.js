const {DataTypes} = require('sequelize');

const Category = (Sequelize) => {

    Sequelize.define("category", {
        
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

module.exports = Category;