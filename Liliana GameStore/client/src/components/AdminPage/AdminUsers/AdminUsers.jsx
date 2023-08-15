
import { useSelector , useDispatch } from "react-redux";
import {getAllUsers} from '../../../Redux/actions'
import { useEffect , useState} from "react";
import TablaUsers from "./TablaUsers/TablaUsers";


const AdminUsers = () => {
    const [deleteTrigger, setDeleteTrigger] = useState(false);
    let dispatch = useDispatch()
    let  users  = useSelector(state => state.usersAdmin)

    useEffect(()=> {
        dispatch(getAllUsers())
    },[dispatch , deleteTrigger, ])
    
    
    return(
        <div className= 'container'>
        <div className='container'>
            <table className="table align-middle mb-0 bg-white">
            <thead className="bg-dark">
                <tr className='table-dark'>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>DesHabilitar</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
                <TablaUsers users={users} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger} />
            </table>
        </div>
        </div>

    )
}

export default AdminUsers;