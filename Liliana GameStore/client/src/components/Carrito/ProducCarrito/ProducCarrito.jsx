import { useState , useEffect } from "react";
import Item from './Item'
import Totalizar from "./Totalizar";
import style from './ProducCarrito.module.css'
import { calcualarTotal  , deleteCart , putCart} from './funcionesAuxiliares'

const ProducCarrito = ({estado , deleteTrigger, setDeleteTrigger }) => {
    const [products , setProducts] = useState([])
    
    useEffect(()=>{
        setProducts(estado)
    },[estado])


    const handlerDeleteItem = async(itemCartId) =>{
        await deleteCart(itemCartId)
        setDeleteTrigger(!deleteTrigger)
    }


    const handlerAgregar = async(itemCartId , cantidad) =>{
        alert(itemCartId + 'agrear'  + cantidad)
        await putCart(itemCartId , cantidad)
        setDeleteTrigger(!deleteTrigger)
    }

    const handlerQuitar = async(itemCartId , cantidad) => {
        alert(itemCartId, 'quitar' , cantidad)
        if(cantidad === 0){
            await deleteCart(itemCartId)
            setDeleteTrigger(!deleteTrigger)
        }else{
            await putCart(itemCartId , cantidad)
            setDeleteTrigger(!deleteTrigger)

        }
    }

    return(
        <tbody>
            {
                products.map((product , index)=> <Item key={index} product={product}  handlerDeleteItem={handlerDeleteItem}  handlerAgregar={handlerAgregar} handlerQuitar={handlerQuitar}/>)
            }
            <Totalizar total={calcualarTotal(products )}/>
        </tbody>
    )
}

export default ProducCarrito;