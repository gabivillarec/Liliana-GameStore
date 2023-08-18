const { Users } = require("../db");


const getUserByEmail = async (req, res) => {

    try {
        const { email } = req.body
        
        const emailUser = await Users.findOne({where: { email: email }});

        return emailUser 
        ?  res.json(emailUser) 
        :  res.status(400).send("User not Found")
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getUserByEmail;