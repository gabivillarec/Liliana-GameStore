import AdminDetail from "./Admin/AdminDetail";
import UpdateForm from "./Admin/UpdateForm";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearDetail } from "../../../Redux/actions"



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


    return(
        <div className="container bg-black">
            <AdminDetail detail={detail}/>
            <UpdateForm id={id}/>
        </div>
    )
}

export default AdminFormUpdate;