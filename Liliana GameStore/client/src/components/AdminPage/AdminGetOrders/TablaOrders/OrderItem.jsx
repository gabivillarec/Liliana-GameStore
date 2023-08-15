
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const OrderItem = ({ order, handlerDelete , }) => {
    const navigate = useNavigate()
    console.log(order)
    const {order_numer,userId , user , order_date , quantity ,total_price} = order;
    const [checkbox, setCheckbox] = useState(false);
    const [ habilitado, setHabilitado ] = useState(false)
    const toggleCheckbox = () => {
        setCheckbox(prevCheckbox => !prevCheckbox);
    };


    useEffect(() => {
        setCheckbox(false);
    }, [userId]);

    useEffect(() => {

    }, [checkbox, userId]);

    return (
        <tr className='table-dark'>
            <td>{order_numer}</td>
            <td>
                {userId}
            </td>
       
            <td>
                <p className="fw-normal mb-1">{order_date}</p>
            </td>
            <td>
                <p className="fw-normal mb-1">{quantity}</p>
            </td>
            <td>
                <p>{total_price}</p>
            </td>
            
            <td>
                <button
                    onClick={() => navigate(`adminuseredit/${userId}`)}
                    type="button"
                    className="btn btn-link btn-sm btn-rounded"
                >
                    <i className="bi bi-pencil-square"></i>
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-link btn-sm btn-rounded"
                    onClick={() => {
                        handlerDelete(checkbox, userId);
                    }}
                >
                    <i className="bi bi-trash3-fill"></i>
                </button>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={checkbox}
                        onChange={toggleCheckbox}
                        role="switch"
                        id={`flexSwitchCheckDefault_${userId}`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`flexSwitchCheckDefault_${userId}`}
                    >
                        Eliminar
                    </label>
                </div>
            </td>
        </tr>
    );
}

export default OrderItem;