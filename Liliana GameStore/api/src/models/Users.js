const { DataTypes } = require('sequelize');

const Users = (sequelize)=>{

    sequelize.define("users",{
        
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        },

        first_name : {
            type : DataTypes.STRING,
            allowNull : false,
        },

        last_name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        
        username : {
            type: DataTypes.TEXT,
            allowNull : false,
            unique: true
        },

        email : {
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        },

        password : {
            type : DataTypes.STRING,
            allowNull : false
        },

        cp : {
            type : DataTypes.INTEGER,
            allowNull : false
        },

        address : {
            type : DataTypes.STRING,
            allowNull : false
        },

        phone : {
            type : DataTypes.STRING,
            allowNull : false
        },

        avatar_img : {
            type : DataTypes.STRING,
            allowNull : true,
            defaultValue: 'https://static.thenounproject.com/png/5034901-200.png'
        },

        admin : {
            type: DataTypes.BOOLEAN,
            defaultValue : false
        },

        master : {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },

        disabled : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    
    }, {timestamps: false});

};

module.exports = Users;