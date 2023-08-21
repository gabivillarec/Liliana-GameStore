
import { useSelector , useDispatch } from "react-redux";
import {getAllOrder} from '../../../Redux/actions'
import { useEffect , useState} from "react";
import TablaOrder from "./TablaOrders/TablaOrders";


const AdminGetOrder = () => {
    const [deleteTrigger, setDeleteTrigger] = useState(false);
    let dispatch = useDispatch()
    let orders = useSelector(state => state.AdminOrder);
    orders.reverse()
    
    useEffect(()=> {
        dispatch(getAllOrder());
    },[dispatch,deleteTrigger])
    
    
    return(
        <div className= 'container'>
        <div className='container'>
            <table className="table align-middle mb-0 bg-white">
            <thead className="bg-dark">
                <tr className='table-dark'>
                    <th>N° Order</th>
                    <th>User Id</th>
                    <th>Email</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
                <TablaOrder orders={orders} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger} />
            </table>
        </div>
        </div>

    )
}

export default AdminGetOrder;