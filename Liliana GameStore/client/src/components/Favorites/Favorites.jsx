import CardsContainer from "../CardsContainer/CardsContainer"
import { useState , useEffect } from "react";
import Botones from "./Botones/Botones";
import {ordenamiento} from './Botones/ordenamientos'
import styles from './Favorites.module.css'

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
      },
      {
        id: 5,
        name: 'Tablet Apple iPad Pro',
        price: 900,
        image: 'https://images.fravega.com/f500/9dfd3d3abcd86de7eca96ca7c02ad1d2.jpg',
        stock: 20,
        rating: 4.6,
        description: 'Tablet Apple iPad Pro con pantalla Liquid Retina de 11 pulgadas y chip M1.'
      },
    ]
    
    const handlerOrder = (tipo) => {
        setFavoritos(ordenamiento(favoArray , tipo ))
    }
    
    useEffect(()=>{
        setFavoritos(favoArray)
    }, [])

    return(
        <div className={styles.inicio}>
            <div className="container">
                <h2>Favoritos: Usuario Name</h2>
                <div>
                    <Botones handlerOrder={handlerOrder}/>
                </div>
                <CardsContainer products={favoritos}/>
            </div>
        </div>
    )
}

export default Categorias;