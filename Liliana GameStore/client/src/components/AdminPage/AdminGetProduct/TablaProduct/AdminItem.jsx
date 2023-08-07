import style from './AdminItem.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminItem = ({ product, handlerDelete }) => {
    const navigate = useNavigate()
    const { image, name, price, id, stock } = product;
    const [checkbox, setCheckbox] = useState(false);

    const toggleCheckbox = () => {
        setCheckbox(prevCheckbox => !prevCheckbox);
    };

    useEffect(() => {
        setCheckbox(false);
    }, [id]);

    useEffect(() => {

    }, [checkbox, id]);

    return (
        <tr className='table-dark'>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={image}
                        alt={name}
                        className={`rounded-circle ${style.img}`}
                    />
                    <div className="ms-3">
                        <p className="fw-bold mb-1">{name}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="fw-normal mb-1">{price}</p>
            </td>
            <td>{stock}</td>
            <td>
                <button
                    onClick={() => navigate(`formupdate/${id}`)}
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
                        handlerDelete(checkbox, id);
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
                        id={`flexSwitchCheckDefault_${id}`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`flexSwitchCheckDefault_${id}`}
                    >
                        Eliminar
                    </label>
                </div>
            </td>
        </tr>
    );
}

export default AdminItem;
