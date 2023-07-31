const { DataTypes } = require('sequelize');

<<<<<<< HEAD
const Users = (sequelize) => {
	sequelize.define(
		'users',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
=======
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
        },

        username : {
            type : DataTypes.STRING,
            allowNull : false,
        },

        email : {
            type: DataTypes.STRING,
            allowNull : false
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
            type : DataTypes.INTEGER,
            allowNull : false
        },

        phone : {
            type : DataTypes.STRING,
            allowNull : false
        },

        avatar_img : {
            type : DataTypes.STRING,
            allowNull : false
        },

        admin : {
            type: DataTypes.BOOLEAN,
            defaultValue : false
        }
    
      }, {timestamp : false});
>>>>>>> 4df57a7d8cee7603dd23da1170e3b0c7706c8ddf

			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ timestamp: false }
	);
};

module.exports = Users;
