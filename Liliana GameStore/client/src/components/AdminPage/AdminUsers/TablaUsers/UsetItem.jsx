
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const UserItem = ({ product, handlerDelete , inCatalogue}) => {
    const navigate = useNavigate()
    const {  email , phone , id ,first_name  , last_name , disabled} = product;
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
            <td>{id}</td>
            <td>
                {first_name}
            </td>
            <td>
                {last_name}
            </td>
            <td>
                <p className="fw-normal mb-1">{email}</p>
            </td>
            <td>
                <p className="fw-normal mb-1">{phone}</p>
            </td>
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
                    onClick={() => navigate(`adminuseredit/${id}`)}
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

export default UserItem;