import { useEffect,  } from 'react';
import UserItem from './UsetItem'
import axios from "axios";
import { URL } from '../../../../main';


const TablaUsers = ({users , deleteTrigger ,setDeleteTrigger}) => {
    
    const handlerDelete = async (checkbox, id) => {
        if (checkbox) {
            try {
                await axios.delete(`${URL}user/${id}`);
                setDeleteTrigger(!deleteTrigger); 
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        } else {
            alert(`El checkbox debe estar en true para poder eliminar un producto`);
        }}

    useEffect(()=> {

    },[handlerDelete ])
    
    return(
        <tbody>
            {
                users.map((product , index)=> <UserItem key={index} product={product} handlerDelete={handlerDelete}/>)
            }
        </tbody>
    )
}

export default TablaUsers