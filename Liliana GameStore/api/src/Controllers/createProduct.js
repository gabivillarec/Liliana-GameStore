const { Products , Category , SubCategory , Brand , Socket } = require("../db");
const { Op } = require("sequelize");

const createProduct = async (req , res) => {

    //Inicio transacción.

    try {
        
        const {name , price , image , stock , rating , description , category , subcategory , brand , socket} = req.body;

        if(!name || !price || !image || !stock || !rating || !description) return res.status(400).send("Faltan datos");

        //Validación repetidos

        const productExist = await Products.findOne({         
            where:{
                name: { [Op.iLike]: name} 
            },
        });

        if(productExist) {
            throw new Error(`El producto ${name} ya existe.`); 
        }
            
        
        const [catDB] = await Category.findOrCreate({
            where: {
                name: { [Op.iLike]: category }
            },
            defaults: {
                name: category
            }
        });

    
        const [subCatDB]  = await SubCategory.findOrCreate({
            where: {
                name: { [Op.iLike]: subcategory }
            },
            defaults: {
                name: subcategory
            }
        });

        
        const [brandDB]  = await Brand.findOrCreate({
            where: {
                name: { [Op.iLike]: brand }
            },
            defaults: {
                name: brand
            }         
        });


        const socketDBs = await Promise.all((socket).map(async (socketValue) => {
            const [socketDB] = await Socket.findOrCreate({
                where: {
                    name: { [Op.iLike]: socketValue }
                },
                defaults: {
                    name: socketValue
                }
            });
            return socketDB;
        }));

        console.log(socketDBs)

        const newProduct = await Products.create(
            {
                name: name,
                price: price,
                image: image,
                stock: stock,
                rating: rating,
                description: description,
                category_name:catDB.dataValues.name,
                subcategory_name:subCatDB.dataValues.name,
                brand_name:brandDB.dataValues.name,
                categoryId: catDB.dataValues.id,
                subCategoryId: subCatDB.dataValues.id,
                brandId: brandDB.dataValues.id
            },
        );

        //Asocio la tabla Socket con el producto creado (en caso de que exista)
        if (socketDBs.length > 0) {
            await newProduct.setSockets(socketDBs);
        }
        
        return res.status(200).json({newProduct});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = createProduct;