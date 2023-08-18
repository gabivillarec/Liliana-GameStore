const { Products } = require('../db');

// Controlador para eliminar URL de imagen por posición en el array
const deleteImage = async (req, res) => {
    const { id, position } = req.params; // Recibir los parámetros de la URL

    try {
        // Obtener el producto desde la base de datos
        const product = await Products.findByPk(id);
        if (!product) return res.status(404).send("Producto no encontrado");

        // Realizar cambios en las propiedades del producto
        const images = [...product.images];
        if (position >= 0 && position < images.length) {
            images.splice(position, 1); // Eliminar la imagen en la posición indicada

            // Actualizar el array de imágenes en la base de datos
            product.images = images;
            await product.save();

            return res.status(200).send(product);
        } else {
            return res.status(400).send("Posición inválida");
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteImage;


