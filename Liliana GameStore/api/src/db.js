require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_RENDER } = process.env;
const { Sequelize } = require('sequelize'); // para interactuar con postgresSQL
const fs = require('fs'); //manipula sistemas de archivos
const path = require('path');


// Local Host
const sequelize = new Sequelize(
 `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/lilianadb`,
 {
 		logging: false, // set to console.log to see the raw SQL queries
		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
 }
);

//? Render
//  const sequelize = new Sequelize(
// 	DB_RENDER,
// 	{
// 		logging: false, // set to console.log to see the raw SQL queries
// 		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// 	}
// ); 

const basename = path.basename(__filename); // Obtiene el nombre base del archivo actual.

const modelDefiners = []; // Crea un arreglo para almacenar los definidores de modelos.

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Users, Products, Orders, Favorites, Cart, Socket, Brand, Category, SubCategory, Review } = sequelize.models;

Users.beforeCreate((user, options) => {
	if (!user.avatar_img) {
	  // Asigno la imagen por defecto al avatar solo si la URL de la imagen no se pasa
	  user.avatar_img = 'https://static.thenounproject.com/png/5034901-200.png';
	}
  });

// Relación de Users

Users.hasMany(Orders, {as:'users'});

Users.hasOne(Cart, { foreignKey: 'userId' });
Cart.hasOne(Users, { foreignKey: 'userId' });

Users.hasMany(Favorites,{foreignKey: 'userId'});
Favorites.belongsTo(Users, {foreignKey: 'userId'});

Users.hasMany(Orders, {foreignKey: 'userId'});
Orders.belongsTo(Users, {foreignKey: 'userId'});

// Relación de Products
Products.belongsToMany(Orders, {through:"orders_products"});
Orders.belongsToMany(Products, {through:"orders_products"});

Products.belongsToMany(Cart, {through:"cart_products"});
Cart.belongsToMany(Products, {through:"cart_products"});

Products.belongsToMany(Favorites, {through:"favorites_products"});
Favorites.belongsToMany(Products, {through:"favorites_products"});

Products.belongsToMany(Socket, {through:"socket_products"});
Socket.belongsToMany(Products, {through:"socket_products"});

Products.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(Products, { foreignKey: 'productId' });

Users.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(Users, { foreignKey: 'userId' });


//Products.belongsTo(Category);
Category.hasMany(Products, {as:'products-category'});

//Products.belongsTo(SubCategory);
SubCategory.hasMany(Products, {as:'products-subcategory'});

//Products.belongsTo(Brand);
Brand.hasMany(Products, {as:'products-brand'});



module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize,
};