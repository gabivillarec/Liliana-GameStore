import axios from 'axios'

export const deleteFavorite = async( productId) =>{
    const URLfav = `http://localhost:3001/LilianaGameStore/Favorites/${productId}`
    try {
        let response= await axios.delete(URLfav)
        return response.data
    } catch (error) {
        return error.message
    }
}