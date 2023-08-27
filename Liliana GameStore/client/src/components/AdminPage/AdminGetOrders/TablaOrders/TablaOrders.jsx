import { useEffect,  } from 'react';
import OrderItem from './OrderItem';
import axios from "axios";
import { URL } from '../../../../main';


const TablaOrder = ({orders , deleteTrigger ,setDeleteTrigger}) => {
    
    const handlerDelete = async (checkbox, id) => {
        if (checkbox) {
            try {
                await axios.delete(`${URL}order/${id}`);
                setDeleteTrigger(!deleteTrigger); 
            } catch (error) {
                console.error("Error deleting order:", error);
            }
        } else {
            alert(`El checkbox debe estar en true para poder eliminar un producto`);
        }}

    useEffect(()=> {

    },[handlerDelete ])
    
    return(
        <tbody>
            {
                orders.map((order , index)=> <OrderItem key={index} order={order} handlerDelete={handlerDelete}/>)
            }
        </tbody>
    )
}

export default TablaOrder