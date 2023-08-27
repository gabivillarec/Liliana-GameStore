import AdminDetail from "./Admin/AdminDetail";
import UpdateForm from "./Admin/UpdateForm";
import style from "./AdminFormUpdate.module.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearDetail } from "../../../Redux/actions"

import axios from "axios";
import { URL } from "../../../main";
import ValidationLoginCard from "../../ValidationLoginCard/ValidationLoginCard";


const AdminFormUpdate = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const detail = useSelector((state) => state.detail);
    const [logueado, setLogueado] = useState({ login : false, admin : false })

    useEffect(() => {
        dispatch(getProductDetail(id));
        const usuario = JSON.parse(localStorage.getItem("user"))

        if(!usuario){
            setLogueado({ login : false, admin : false })
        }else{
            axios.get(`${URL}user/${usuario.id}`)
                .then(response =>{
                    setLogueado({ login : true, admin : response.data.admin })
                })
        }

        return () => {
          dispatch(clearDetail());
        };
      }, [dispatch, id]);

      const handleImageDelete = async (position) => {
        try {
            const response = await axios.delete(`${URL}products/${id}/images/${position}`);
            if (response.status === 200) {
                // Actualiza los detalles del producto para reflejar los cambios
                dispatch(getProductDetail(id));
            }
        } catch (error) {
            console.log(error);
        }
    };


    return(
        <div className={style.fondoFormUpdate}>
            <div className={`p-4 ${style.fondoFormUpdateBlureado}`}>
                {
                    logueado.login && logueado.admin ? (
                        <div className="container p-4 rounded bg-black">
                            <AdminDetail detail={detail} handleImageDelete={handleImageDelete}/>
                            <UpdateForm id={id} detail={detail} />
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

export default AdminFormUpdate;