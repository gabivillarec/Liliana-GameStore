const { Socket } = require('../db')

const getSocket = async (req, res) => {
    try {
        const response = await Socket.findAll()
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getSocket,
}