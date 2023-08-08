import { useState , useEffect } from "react";
import Item from './Item'
import Totalizar from "./Totalizar";
import style from './ProducCarrito.module.css'
import { calcualarTotal } from './funcionesAuxiliares'

const ProducCarrito = ({estado}) => {
    const [products , setProducts] = useState([])
    
    useEffect(()=>{
        setProducts(estado)
    },[estado])

    const handlerDelete = (id) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    };

    const handlerCantidad = (id, operacion) => {
        setProducts(prevProducts => {
            // Busca el producto con el id correspondiente
            const updatedProducts = prevProducts.map(product => {
                if (product.id === id) {
                    // Realiza la operación de agregar o restar cantidad
                    if (operacion === "agregar") {
                        return { ...product, cantidad: product.cantidad + 1 };
                    } else if (operacion === "restar") {
                        return { ...product, cantidad: product.cantidad - 1 };
                    }
                }
                return product;
            });
            return updatedProducts;
        });
    };

    return(
        <tbody>
            {
                products.map((product , index)=> <Item key={index} product={product} handlerCantidad={handlerCantidad} handlerDelete={handlerDelete}/>)
            }
            <Totalizar total={calcualarTotal(products )}/>
        </tbody>
    )
}

export default ProducCarrito;