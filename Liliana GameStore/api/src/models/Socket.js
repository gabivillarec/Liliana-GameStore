const {DataTypes} = require('sequelize');

const Socket = (sequelize) => {

    sequelize.define("socket", {
        
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

module.exports = Socket;