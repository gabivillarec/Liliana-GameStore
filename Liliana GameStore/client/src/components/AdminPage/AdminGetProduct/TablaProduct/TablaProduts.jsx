import { useEffect, useState } from 'react';
import AdminItem from './AdminItem'
import axios from "axios";



const TablaProduts = ({products , setDeleteTrigger, deleteTrigger}) => {
    const [productRender , setProductRender] = useState([])

    

    const handlerDelete =async (checkbox , id) => {
        if(checkbox){
            const URL = 'http://localhost:3001/LilianaGameStore/products/'
            let response = await axios.delete(URL +id)
            alert(`Producto con id ${id} eliminado con exito`)
            setDeleteTrigger(!deleteTrigger); 
        }else{
            alert(`El checkbox debe estar en true para poder eliminar un producto`)
        }
    }
    useEffect(()=> {

    },[handlerDelete])
    
    return(
        <tbody>
            {
                products.map((product , index)=> <AdminItem key={index} product={product} handlerDelete={handlerDelete}/>)
            }
        </tbody>
    )
}

export default TablaProduts;