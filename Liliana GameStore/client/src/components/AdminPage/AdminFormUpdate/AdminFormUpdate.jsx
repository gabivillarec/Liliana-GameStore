import AdminDetail from "./Admin/AdminDetail";
import UpdateForm from "./Admin/UpdateForm";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearDetail } from "../../../Redux/actions"

import axios from "axios";
import { URL } from "../../../main";


const AdminFormUpdate = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getProductDetail(id));
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
        <div className="container bg-black">
            <AdminDetail detail={detail} handleImageDelete={handleImageDelete}/>
            <UpdateForm id={id}/>
        </div>
    )
}

export default AdminFormUpdate;