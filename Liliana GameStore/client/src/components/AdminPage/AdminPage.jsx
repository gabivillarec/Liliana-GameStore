import AdminForm from "./AdminForm/AdminForm"
import AdminGetProduct from "./AdminGetProduct/AdminGetProduct"
import AdminNav from "./AdminNav/AdminNav"
import AdminUsers from './AdminUsers/AdminUsers'
import PerfilData from "../Perfil/Sections/PerfilData"
import AdminCreateUser from "./AdminCreateUser/AdminCreateUser"
import AdminGetOrders from "./AdminGetOrders/AdminGetOrders"
import AdminReview from "./AdminReview/AdminReview"
import style from "./AdminPage.module.css"
import { useState , useEffect } from "react"
import axios from "axios"
import { URL } from "../../main"
import { useNavigate } from "react-router-dom"
import ValidationLoginCard from "../ValidationLoginCard/ValidationLoginCard"

const AdminPage = () => {
    const [client , setCliente] = useState({})
    const [selectedComponent, setSelectedComponent] = useState('AdminGetProduct'); // Nuevo estado
    const [logueado, setLogueado] = useState(false)

    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem("user"))

        if(!usuario){
            setLogueado(false)
        }else{
            axios.get(`${URL}user/${usuario.id}`)
                .then(response =>{
                    setLogueado(true)
                    setCliente(response.data)
                })
        }
    },[])

    const handlerRender = (render) => {
        setSelectedComponent(render); // Actualiza el componente seleccionado
    }

    return(
        <div className={style.fondo}>
        <div className={style.fondoBlureado}>
            {
                logueado ? (
                    <div className="pt-5 pb-3">
                        <AdminNav handlerRender={handlerRender} />
                        <div className="container">
                            <PerfilData client={client} />
                        </div>
                        {selectedComponent === 'AdminGetProduct' && <AdminGetProduct />} 
                        {selectedComponent === 'AdminForm' && <AdminForm />} 
                        {selectedComponent === 'AdminUsers' && <AdminUsers/>} 
                        {selectedComponent === 'AdminCreateUser' && <AdminCreateUser/>} 
                        {selectedComponent === 'AdminGetOrder' && <AdminGetOrders/>} 
                        {selectedComponent === 'AdminReview' && <AdminReview/>} 
                    </div>
                )
                : (
                    <ValidationLoginCard/>
                )
            }
        </div>
    </div>
    )
}

export default AdminPage