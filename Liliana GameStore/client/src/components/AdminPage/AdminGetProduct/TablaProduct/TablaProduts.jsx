import { useEffect,  useState} from 'react';
import AdminItem from './AdminItem'
import axios from "axios";
import { URL } from '../../../../main';
import Toast from '../../../Toast/Toast';
import ErrorToast from '../../../Toast/ErrorToast';

const TablaProduts = ({products , setDeleteTrigger, deleteTrigger}) => {
    const [message , setMessage] = useState('')
    let title = "AdminPage"
    const handlerDelete =async (checkbox , id) => {
        if(checkbox){
                try {
                const UR = `${URL}products/`
                await axios.delete(UR +id)
                setMessage(`Producto  Eliminado`)
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
                toastBootstrap.show();
                } catch (error) {
                    const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastError"));
                    setMessage(error.message)
                    toastBootstrapError.show();
                }
            }else{
                setMessage(`El checkbox debe estar en true para poder eliminar un producto`)
                const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastError"))
                toastBootstrapError.show();
            }
            
        setDeleteTrigger(!deleteTrigger); 
    }

    const inCatalogue = async(id , habilitado) =>{
        try {
            await axios.put(`${URL}products/${id}`, {disabled:!habilitado})
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
            setMessage(`Producto en ID ${id} pausa`)
            toastBootstrap.show();
        } catch (error) {
            const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastError"))
            setMessage(`${error.message}`)
            toastBootstrapError.show();
        }
        setDeleteTrigger(!deleteTrigger);
    }

    useEffect(()=> {
    },[handlerDelete])
    
    return(
        <tbody>
            {
                products.map((product , index)=> <AdminItem key={index} product={product} handlerDelete={handlerDelete} inCatalogue={inCatalogue} title={title} message={message}/>)
            }
            <Toast title={title} message={message}/>
            <ErrorToast title={title} message={message}/>
        </tbody>
    )
}

export default TablaProduts;

