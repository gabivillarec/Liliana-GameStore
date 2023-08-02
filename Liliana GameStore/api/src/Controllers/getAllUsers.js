const { Users, Favorites, PurchaseHistory } = require("../db");
const { Op } = require('sequelize');

const getAllUsers = async (req,res)=>{

    try {

        const users = await Users.findAll({where : {admin : {
            [Op.or]: [true, false]
        }
    }, include:[{model:Favorites}, {model:PurchaseHistory}]});

        const usersArray = [...users];

        if (usersArray) return res.json(usersArray);

    } catch (error) {
        return res.status(500).json({error: error.message});
    };
};

module.exports = getAllUsers