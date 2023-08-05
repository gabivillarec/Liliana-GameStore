import CardsContainer from "../../CardsContainer/CardsContainer"
import Botones from '../../Favorites/Botones/Botones'
import { useState , useEffect } from "react";
import { ordenamiento } from "../../Favorites/Botones/ordenamientos";


const Products = ({products }) => {
  /*   const [productsRender , setProductsRender] = useState([])
    useEffect(()=>{
        setProductsRender(products)
    },[])
    console.log(productsRender) */
    const handlerOrder = (tipo) => {
       alert('hola')
    }

    return(
        <div className="container">
            <h2>Productos en Stock</h2>
            <Botones handlerOrder={handlerOrder}/>
            <CardsContainer products={products}/>
        </div>
    )
}

export default Products;