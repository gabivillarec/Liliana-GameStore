const { Users } = require("../db");

const updateUsers = async (req,res) =>{
    
    const { id } = req.params;
    const { first_name, last_name, username, email, password, cp, address, phone, avatar_img, admin, disabled } = req.body;

    try {

        const result = await Users.update({
            first_name, last_name, username, email, password, cp, address, phone, avatar_img, admin, disabled
        }, {where : {id: id}});

        if (result[0] === 1) {
            return res.json({ message: "Profile updated successfully." });
        } else {
            return res.status(400).json({ error: "Could not update user profile." });
        }      
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = updateUsers;