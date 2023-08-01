const { Product } = require("../db");

const createUser = async (req , res) => {
    try {

        const {name , price , image , stock , rating , description} = req.body;

        if(!name || !price || !image || !stock || !rating || !description) return res.status(401).send("Faltan datos");

    } catch (error) {
        
    }
};

module.exports = createProduct;