import CardsContainer from "../CardsContainer/CardsContainer"
import { useState , useEffect } from "react";
import Botones from "./Botones/Botones";


const Categorias = ({}) => {
    const [favoritos , setFavoritos] = useState([])

    let favoArray = [ {
        id: 1,
        name: 'Laptop Acer Aspire',
        price: 800,
        image: 'https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/a/s/aspire-3---foto-5-con-solapa.jpg',
        stock: 25,
        rating: 4.5,
        description: 'Laptop Acer Aspire con procesador Intel Core i5 y pantalla Full HD de 15.6 pulgadas.'
      },
      {
        id: 2,
        name: 'Smartphone Samsung Galaxy S20',
        price: 1000,
        image: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g781bzblaro/gallery/ar-galaxy-s20-fe-5g-g781-sm-g781bzblaro-532206751?$650_519_PNG$',
        stock: 15,
        rating: 4.8,
        description: 'Smartphone Samsung Galaxy S20 con pantalla AMOLED de 6.2 pulgadas y cámara de 64MP.'
      }]
    

    
    
    useEffect(()=>{
        setFavoritos(favoArray)
    }, [favoritos])
    console.log(favoritos)
    return(
        <div className="container">
            <h2>Favoritos: Usuario Name</h2>
            <div>
                <Botones/>
            </div>
            <CardsContainer products={favoritos}/>
        </div>
    )
}

export default Categorias;