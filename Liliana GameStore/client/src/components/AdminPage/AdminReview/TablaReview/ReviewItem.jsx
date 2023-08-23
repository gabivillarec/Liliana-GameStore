
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const ReviewItem = ({ review, handlerDelete , }) => {
    const navigate = useNavigate()
    const {id,userId,productId ,rating , comment} = review;
    const [checkbox, setCheckbox] = useState(false);
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
                <button className="btn btn-outline-info" onClick={()=> navigate(`/detail/${productId}`)}>
                    {productId}
                </button>
            </td>
            <td>
                <p className="fw-normal mb-1">{rating}</p>
            </td>
            <td>
                <p className="fw-normal mb-1">{comment}</p>
            </td>
            <td>
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
                        Ckeck
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

export default ReviewItem;