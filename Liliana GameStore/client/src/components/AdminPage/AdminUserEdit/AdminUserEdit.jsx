import AdminEdit from "./AdminUserComponentes/AdminEdit";
import AdminUserDetail from "./AdminUserComponentes/AdminUserDetail";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser} from "../../../Redux/actions"



const AdminUserEdit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.userDetail);
    useEffect(() => {
        dispatch(getDetailUser(id));
       
      }, [dispatch, id]);


    return(
        <div className="container bg-black">
            <AdminUserDetail detail={detail}/>
            <AdminEdit id={id}/>
        </div>
    )
}

export default AdminUserEdit;