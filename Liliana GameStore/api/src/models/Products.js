const { DataTypes } = require('sequelize');

const Products = (sequelize) => {
	sequelize.define('products', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		rating: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		description_text: {
			type: DataTypes.STRING,
			allowNull: false
		},
		characteristics: {
			type: DataTypes.JSON,
			allowNull: true,
		},
		category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
		subcategory_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
		brand_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
	});
};

module.exports = Products;
