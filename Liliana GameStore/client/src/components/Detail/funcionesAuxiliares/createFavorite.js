import axios from 'axios'

export const createFavorite = async(userId , productId) =>{
    const URLfav = 'http://localhost:3001/LilianaGameStore/Favorites'
    let objet = {
        product:productId,
        userId:userId
    }
    try {
        console.log(URLfav)
        console.log(objet)
        let response= await axios.post(URLfav, objet)
        console.log(response ,'response')
        return response.data
    } catch (error) {
        return error.message
    }
}