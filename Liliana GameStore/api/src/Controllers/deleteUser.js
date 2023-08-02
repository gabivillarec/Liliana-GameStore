const { Users } = require("../db");

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        
        const deletedUserCount = await Users.destroy({
            where: { id: id }
        });

        if (deletedUserCount === 1) {
            return res.json({ message: "User deleted successfully." });
        } else {
            return res.status(400).json({ error: "Could not delete user. User not found." });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteUser;