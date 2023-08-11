import { useEffect,  } from 'react';
import AdminItem from './AdminItem'
import axios from "axios";
import { URL } from '../../../../main';


const TablaProduts = ({products , setDeleteTrigger, deleteTrigger}) => {

    const handlerDelete =async (checkbox , id) => {
        if(checkbox){
            const UR = `${URL}products/`
            await axios.delete(UR +id)
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