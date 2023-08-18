const { Users } = require("../db");



const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        
        const emailUser = await Users.findOne({ where: { email } });

        if (emailUser) {
            return res.json(true);
        } else {
            return res.status(200).json(false);
        }
    } catch (error) {
        // Captura y loguea el error para diagnóstico
        console.error("Error in getUserByEmail:", error);
        return res.status(500).json({ error: "An error occurred" });
    }
};

module.exports = getUserByEmail;