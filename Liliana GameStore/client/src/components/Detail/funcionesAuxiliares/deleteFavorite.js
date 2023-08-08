import axios from 'axios'

export const deleteFavorite = async( productId) =>{
    const URLfav = `http://localhost:3001/LilianaGameStore/Favorites/${productId}`
    console.log(URLfav ,"url")
    try {
        let response= await axios.delete(URLfav)
        console.log(response ,'response')
        return response.data
    } catch (error) {
        return error.message
    }
}