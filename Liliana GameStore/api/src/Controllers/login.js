const { Users } = require("../db");
const bcrypt = require('bcrypt');
const util = require('util');

const login = async (req, res) => {

    try {
        const { username, password, email } = req.body;

        if(username){ 
            const user = await Users.findOne({ where: { username } })
            if (user) {
                // Introducir un pequeño retraso artificial para evitar ataques de fuerza bruta
                await util.promisify(setTimeout)(100); // Esperar 100 ms
        
                // Comparo el password con el hash almacenado
                const passwordMatches = await bcrypt.compare(password, user.password);
    
                return passwordMatches 
                ? res.json(user)       
                : res.status(400).json({ error: 'Invalid Password' });
             };
         };

        if(email){ 
            const emailUser = await Users.findOne( { where: { email } })
            if (emailUser){ 
                await util.promisify(setTimeout)(100);
    
                const passwordMatches = await bcrypt.compare(password, emailUser.password);
        
                return passwordMatches 
                ? res.json(emailUser)       
                : res.status(400).json({ error: 'Invalid Password' });
            };
        };

        return res.status(400).json({ error: 'Invalid Username' });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = login;

