import style from './AdminItem.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Toast from '../../../Toast/Toast';
import ErrorToast from '../../../Toast/ErrorToast';

const AdminItem = ({ product, handlerDelete ,inCatalogue }) => {
    const navigate = useNavigate()
    const { images, name, price, id, stock , category_name, disabled } = product;
    const [checkbox, setCheckbox] = useState(false);
    const [ habilitado, setHabilitado ] = useState(false)
    const toggleCheckbox = () => {
        setCheckbox(prevCheckbox => !prevCheckbox);
    };
    const toggleHabilitado = () => {
        setHabilitado(prevCheckbox => !prevCheckbox);
    };


    useEffect(() => {
        setHabilitado(disabled)
        setCheckbox(false);
    }, [id]);

    useEffect(() => {

    }, [checkbox, id]);

    return (
        <tr className='table-dark'>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={images[0]} //Muestra siempre la primer URL almacenada
                        alt={name}
                        className={`rounded-circle ${style.imgen}`}
                    />
                    <div className="ms-3">
                        <button type="button" className="btn btn-outline-info" onClick={()=> navigate(`/detail/${id}`)}>{name}</button>
                    </div>
                </div>
            </td>
            <td>
                <p className="fw-normal mb-1">{category_name}</p>
            </td>
            <td>
                <p className="fw-normal mb-1">{price}</p>
            </td>
            <td>{stock}</td>
            <td>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={habilitado}
                        onChange={toggleHabilitado}
                        onClick={()=>inCatalogue(id, habilitado)}
                        role="switch"
                        id={`flexSwitchCheckDefault_${id}`}
                    />
                </div>
            </td>
            <td>
                <button
                    onClick={() => navigate(`formupdate/${id}`)}
                    type="button"
                    className="btn btn-outline-info"
                >
                    <i className="bi bi-pencil-square"></i>
                </button>
            </td>
            <td >
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
                    >Ckeck
                    </label>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => {
                        handlerDelete(checkbox, id);
                    }}
                >
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>
    );
}

export default AdminItem;
