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
            

        if(foundProduct) return res.status(200).json(foundProduct);

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = getProductById;