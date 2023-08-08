import axios from 'axios'

export const createFavorite = async(userId , productId) =>{
    const URLfav = 'http://localhost:3001/LilianaGameStore/Favorites'
    let objet = {
        product:productId,
        userId:userId
    }
    try {
        
        let response= await axios.post(URLfav, objet)
        return response.data
    } catch (error) {
        return error.message
    }
}