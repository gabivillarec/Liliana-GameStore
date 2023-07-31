const {DataTypes} = require('sequelize');

const SubCategory = (Sequelize) => {

    Sequelize.define("subCategory", {
        
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

module.exports = SubCategory;