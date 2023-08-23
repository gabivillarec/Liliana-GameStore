import { useState , useEffect } from "react";
import Item from './Item'
//import MercadoPago from "../MercadoPago/MercadoPago";
import Toast from "../../Toast/Toast";
import ErrorToast from "../../Toast/ErrorToast";
import {  deleteCart , putCart} from './funcionesAuxiliares'

const ProducCarrito = ({estado , deleteTrigger, setDeleteTrigger , preferenceId}) => {
    const [products , setProducts] = useState([])
    const [message , setMessage] = useState('')
    useEffect(()=>{
        setProducts(estado)
    },[estado])
    let titleToast = `Carrito`
    const handlerDeleteItem = async(itemCartId) =>{
        try {
            await deleteCart(itemCartId)
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
            setMessage(`Producto eliminado con exito.`)
            toastBootstrap.show();
        } catch (error) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
            setMessage(`${error.message}`)
            toastBootstrap.show();
        }
        setDeleteTrigger(!deleteTrigger)
    }


    const handlerAgregar = async(itemCartId , cantidad) =>{
        try {
            await putCart(itemCartId , cantidad)
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
            setMessage(`Producto agregado con exito.`)
            toastBootstrap.show();
        } catch (error) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
            setMessage(`Error al agregar producto.`)
            toastBootstrap.show();
        }
        setDeleteTrigger(!deleteTrigger)
    }

    const handlerQuitar = async(itemCartId , cantidad) => {
        try {
            if(cantidad === 0){
                await deleteCart(itemCartId)
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
                setMessage(`Producto quitado con exito.`)
                toastBootstrap.show();
                setDeleteTrigger(!deleteTrigger)
            }else{
                await putCart(itemCartId , cantidad)
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
                setMessage(`Producto quitado con exito.`)
                toastBootstrap.show();
                setDeleteTrigger(!deleteTrigger)
            }
        } catch (error) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
            setMessage(`${error.message}`)
            toastBootstrap.show();
            
        }
        setDeleteTrigger(!deleteTrigger)
    }

    return(
        <tbody>
            {
                products.map((product , index)=> <Item key={index} product={product}  handlerDeleteItem={handlerDeleteItem}  handlerAgregar={handlerAgregar} handlerQuitar={handlerQuitar}/>)
            }
            <ErrorToast title={titleToast} message={message}/>
            <Toast title={titleToast} message={message}/>
        </tbody>
    )
}

export default ProducCarrito;