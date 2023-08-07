const { Products , Socket} = require('../db');

const getProductById = async (req , res) => {
    try {
        
        const { id } = req.params;

        const foundProduct = await Products.findByPk(id,
            { include: [
                {
                  model: Socket,
                  through: {
                    attributes: {
                      exclude: ["createdAt", "updatedAt"],
                    },
                  },
                },
              ],
            });
            
            return foundProduct 
            ?  res.status(200).json(foundProduct) 
            :  res.status(400).send("Product not Found")

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getProductById;