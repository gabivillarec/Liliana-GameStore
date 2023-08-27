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
            <th scope="row" className="text-center"><img src={images[0]} alt={name} className={`rounded-circle ${style.imgen}`} /></th>
            <td className="align-middle fw-bold mb-1"><button type="button" className="btn btn-outline-info" onClick={()=> navigate(`/detail/${id}`)}>{name}</button></td>
            <td className="align-middle text-center">{category_name}</td>
            <td className="align-middle text-center">${price}</td>
            <td className="align-middle text-center">{stock}</td>
            <td className="align-middle">
                <div className="form-switch text-center">
                    <input className="form-check-input" type="checkbox" role="switch" checked={habilitado} id={`flexSwitchCheckDefault_${id}`} onChange={toggleHabilitado} onClick={()=>inCatalogue(id, habilitado)} />
                </div>
            </td>
            <td className="text-center">
                <button className="btn btn-outline-info" type="button" onClick={() => navigate(`formupdate/${id}`)}>
                    <i className="bi bi-pencil-square"></i>
                </button>
            </td>
            <td className="text-center">
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
                    >Check
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
