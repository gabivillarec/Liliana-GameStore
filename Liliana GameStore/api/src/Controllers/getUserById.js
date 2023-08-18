const { Users, Favorites, Orders } = require("../db");


const getUserById = async (req, res) => {

    try {
        const { id } = req.params
        
        const idUser = await Users.findOne({where: { id: id }, include:[{model:Favorites}, {model:Orders}]});

        return idUser 
        ?  res.json(idUser) 
        :  res.status(400).send("User not Found")
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getUserById;