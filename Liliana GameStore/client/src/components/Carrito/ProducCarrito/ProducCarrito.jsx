import { useState , useEffect } from "react";
import Item from './Item'
import Totalizar from "./Totalizar";
import style from './ProducCarrito.module.css'
import { calcualarTotal } from './funcionesAuxiliares'

const ProducCarrito = ({estado}) => {
    const [products , setProducts] = useState([])
    
    useEffect(()=>{
        setProducts(estado)
    },[])

    return(
        <section className={style.containerProduct}>
            {
                products.map((product , index)=> <Item key={index} product={product} />)
            }
            <Totalizar total={calcualarTotal(products)}/>
        </section>
    )
}

export default ProducCarrito;