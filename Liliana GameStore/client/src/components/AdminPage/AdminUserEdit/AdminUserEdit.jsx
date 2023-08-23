import AdminEdit from "./AdminUserComponentes/AdminEdit";
import AdminUserDetail from "./AdminUserComponentes/AdminUserDetail";
import style from "./AdminUserEdit.module.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser} from "../../../Redux/actions"
import ValidationLoginCard from "../../ValidationLoginCard/ValidationLoginCard";
import axios from "axios";
import { URL } from "../../../main";



const AdminUserEdit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const detail = useSelector((state) => state.userDetail);
    const [logueado, setLogueado] = useState({ login : false, admin : false })

    useEffect(() => {
        dispatch(getDetailUser(id));
        const usuario = JSON.parse(localStorage.getItem("user"))

        if(!usuario){
            setLogueado({ login : false, admin : false })
        }else{
            axios.get(`${URL}user/${usuario.id}`)
                .then(response =>{
                    setLogueado({ login : true, admin : response.data.admin })
                })
        }
       
      }, [dispatch, id]);


    return(
        <div className={style.fondoUserEdit}>
        <div className={`p-4 ${style.fondoUserEditBlureado}`}>
            {
                logueado.login && logueado.admin ? (
                    <div className="container p-4 rounded bg-black">
                        <AdminUserDetail detail={detail}/>
                        <AdminEdit id={id}/>
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

export default AdminUserEdit;