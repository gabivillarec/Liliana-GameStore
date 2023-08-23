import { cambiarFecha } from './funcionAuxiliar';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const OrderItem = ({ order, handlerDelete }) => {
    const navigate = useNavigate()
    const {order_numer,userId , user , order_date , quantity ,total_price , estado} = order;
    const [checkbox, setCheckbox] = useState(false);
    const [ habilitado, setHabilitado ] = useState(false)
    const toggleCheckbox = () => {
        setCheckbox(prevCheckbox => !prevCheckbox);
    };
    let fecha = cambiarFecha(order_date)

    useEffect(() => {
        setCheckbox(false);
    }, [order_numer]);

    useEffect(() => {

    }, [checkbox, order_numer]);

    return (
        <tr className='table-dark'>
            <td>{order_numer}</td>
            <td>
                {userId}
            </td>
            <td>
                <p className="fw-normal mb-1">{user?.email}</p>
            </td>
            <td>
                <p className="fw-normal mb-1">{fecha}</p>
            </td>
       
            <td>
                <p className="fw-normal mb-1">{estado}</p>
            </td>
            <td>
                <p>{total_price}</p>
            </td>
            
            <td >
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={checkbox}
                        onChange={toggleCheckbox}
                        role="switch"
                        id={`flexSwitchCheckDefault_${order_numer}`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`flexSwitchCheckDefault_${order_numer}`}>
                        Ckeck
                    </label>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => {
                        handlerDelete(checkbox, order_numer);
                    }}>
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>
    );
}

export default OrderItem;

