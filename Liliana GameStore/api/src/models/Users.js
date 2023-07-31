const {DataTypes} = require('sequelize');

const Users = (sequelize)=>{

    sequelize.define("users",{
        
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        },

        name : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    
      }, {timestamp : false});

};

module.exports = Users;