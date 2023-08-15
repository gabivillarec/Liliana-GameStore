
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const ReviewItem = ({ review, handlerDelete , }) => {
    const navigate = useNavigate()

    const {id,userId,productId ,rating , comment} = review;

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
            <td>{id}</td>
            <td>
                {userId}
            </td>
            <td>
                <p className="fw-normal mb-1">{productId}</p>
            </td>
            <td>
                <p className="fw-normal mb-1">{rating}</p>
            </td>
            <td>
                <p className="fw-normal mb-1">{comment}</p>
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

export default ReviewItem;