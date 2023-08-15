
import { useSelector , useDispatch } from "react-redux";
import {getAllReview} from '../../../Redux/actions'
import { useEffect , useState} from "react";
import TablaReview from "./TablaReview/TablaReview";


const AdminReview = () => {
    const [deleteTrigger, setDeleteTrigger] = useState(false);
    let dispatch = useDispatch()
    let review = useSelector(state => state.adminReview);
    
    
    useEffect(()=> {
        dispatch(getAllReview());
    },[dispatch ])
    
    
    return(
        <div className= 'container'>
        <div className='container'>
            <table className="table align-middle mb-0 bg-white">
            <thead className="bg-dark">
                <tr className='table-dark'>
                    <th>ID Coment</th>
                    <th>User Id</th>
                    <th>Prod Id</th>
                    <th>Rating</th>
                    <th>Coment</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
                <TablaReview review={review} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger} />
            </table>
        </div>
        </div>

    )
}

export default AdminReview;