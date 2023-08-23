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
    const navigate = useNavigate()
    const [ actualizar , setActualizar] = useState(false)
    const [client , setCliente] = useState({})
    const [selectedComponent, setSelectedComponent] = useState('AdminGetProduct'); // Nuevo estado
    const [logueado, setLogueado] = useState({ login : false, admin : false })

    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem("user"))

        if(!usuario){
            setLogueado({ login : false, admin : false })
        }else{
            axios.get(`${URL}user/${usuario.id}`)
                .then(response =>{
                    setLogueado({ login : true, admin : response.data.admin })
                    setCliente(response.data)
                })
        }
    },[actualizar])
    const handlerRender = (render) => {
        setSelectedComponent(render); // Actualiza el componente seleccionado
    }



    return(
        <div className={style.fondoAdmin}>
        <div className={style.fondoAdminBlureado}>
            {
                logueado.login && logueado.admin ? (
                    <div className="pt-5 pb-3">
                        <AdminNav handlerRender={handlerRender} client={client} />
                        <div className="container">
                            <PerfilData client={client} actualizar={actualizar} setActualizar={setActualizar}/>
                        </div>
                        {selectedComponent === 'AdminGetProduct' && <AdminGetProduct />} 
                        {selectedComponent === 'AdminForm' && <AdminForm   setSelectedComponent={setSelectedComponent}/>} 
                        {selectedComponent === 'AdminUsers' && <AdminUsers/>} 
                        {selectedComponent === 'AdminCreateUser' && <AdminCreateUser setSelectedComponent={setSelectedComponent}/>} 
                        {selectedComponent === 'AdminGetOrder' && <AdminGetOrders/>} 
                        {selectedComponent === 'AdminReview' && <AdminReview/>} 
                    </div>
                )
                : logueado.login && !logueado.admin ? (
                    <div className="p-5 d-flex flex-column align-items-center">
                        <div className={`border border-danger border-3 rounded d-flex flex-column align-items-center ${style.cardLogin}`}>
                            <h1 className="m-4 mb-0 pb-4 text-center text-danger border-bottom border-danger border-2">No tienes el rango suficiente para ingresar aqui</h1>
                            <button type="button" className="btn btn-danger btn-lg m-4" onClick={()=>{navigate('/')}}>Inicio</button>
                        </div>
                    </div>
                )
                : ( <ValidationLoginCard/> )
            }
        </div>
    </div>
    )
}

export default AdminPage