import axios from 'axios'

const createProduct = async (create) =>{
    try {
        let productsExport = [create]

        const response = await axios.post('/LilianaGameStore/products' , productsExport);
        console.log(response)
        return alert(response.data)
        
    } catch (error) {
        return alert(error.message)
    }

}

export default createProduct