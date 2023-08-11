import AdminForm from "./AdminForm/AdminForm"
import AdminGetProduct from "./AdminGetProduct/AdminGetProduct"
import AdminNav from "./AdminNav/AdminNav"
import AdminUsers from './AdminUsers/AdminUsers'
import PerfilData from "../Perfil/Sections/PerfilData"
import AdminCreateUser from "./AdminCreateUser/AdminCreateUser"
import style from "./AdminPage.module.css"
import { useState , useEffect } from "react"
import axios from "axios"
import { URL } from "../../main"

const AdminPage = () => {
    const [client , setCliente] = useState({})
    const [selectedComponent, setSelectedComponent] = useState('AdminGetProduct'); // Nuevo estado

    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem("user"))
        axios.get(`${URL}user/${usuario.id}`)
            .then(response =>{
                setCliente(response.data)
            })
    },[])

    const handlerRender = (render) => {
        setSelectedComponent(render); // Actualiza el componente seleccionado
    }

    return(
        <div className={style.fondo}>
        <div className={style.fondoBlureado}>
            <div className="pt-5">
                <AdminNav handlerRender={handlerRender} />
                <div className="container">
                    <PerfilData client={client} />
                </div>
                {selectedComponent === 'AdminGetProduct' && <AdminGetProduct />} 
                {selectedComponent === 'AdminForm' && <AdminForm />} 
                {selectedComponent === 'AdminUsers' && <AdminUsers/>} 
                {selectedComponent === 'AdminCreateUser' && <AdminCreateUser/>} 
            </div>
        </div>
    </div>
    )
}

export default AdminPage