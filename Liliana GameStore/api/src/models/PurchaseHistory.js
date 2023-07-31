const {DataTypes} = require('sequelize');

const PurchaseHistory = (Sequelize) => {

    Sequelize.define("purchaseHistory", {
        
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false,
        }

    },{timestamps : false});
};

module.exports = PurchaseHistory;