import React, { useState } from 'react';
import axios from "axios"
import style from './Adquiciones.module.css'
import { URL } from "../../../../main";

const Adquisiciones = ({compra}) => {
    
    let { id, image, name, price, rating, date } = compra
    
    const [mouseHover, setMouseHover] = useState(false);
    const [calificacionSeleccionada, setCalificacionSeleccionada] = useState(0);
    const [error, setError] = useState(null);
    
    const fullStars = Math.floor(rating);
    const totalStars = 5;
    
    const fullStarsElements = [];
    for (let i = 0; i < fullStars; i++) {
        fullStarsElements.push(<i key={i} className="bi bi-star-fill text-info"></i>);
    }
    
    const emptyStarsElements = [];
    const emptyStarsCount = totalStars - fullStars;
    for (let i = 0; i < emptyStarsCount; i++) {
        emptyStarsElements.push(<i key={i + fullStars} className="bi bi-star text-info"></i>);
    }
    
    const [review, setReview] = useState({
        productId: id,
        userId: null,
        comment: '',
        rating: 0,
    });

    const handleSubmit = async () => {
        const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
        const userId = userFromLocalStorage ? userFromLocalStorage.id : null;

        const newReview = {
            productId: id,
            userId: userId,
            comment: review.comment,
            rating: calificacionSeleccionada,
        };
        console.log(newReview);
        try {
            const response = await axios.post(`${URL}review`, newReview);
            console.log(response.data);
        } catch (error) {
            console.error("Error de Axios:", error);
            setError(error.response?.data || "Ocurrió un error");
        }
    };

    return(
      <tbody>
          <tr className='table-dark'>
              <th scope="row"><img src={image} alt={name} className={`rounded-circle ${style.img}`} /></th>
              <td className="align-middle">{name}</td>
              <td className="align-middle text-center">${price}</td>
              <td className="align-middle text-center" >{fullStarsElements}{emptyStarsElements}</td>
              <td className="align-middle text-center">
                  <i className="bi bi-pencil-square" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`}></i>
              </td>
              <td className="align-middle text-center">{date}</td>
          </tr>
          <tr id={`collapse${id}`} className="collapse">
              <td colSpan="6" className="bg-secondary rounded">
                  <div className="container p-3 bg-secondary text-white">
                      <p className="text-dark fw-bold">Calificar:
                        <td className="align-middle text-center" >
                            {[1, 2, 3, 4, 5].map((indice) => ( <i
                                key={indice}
                                className={`text-info bi ${indice <= calificacionSeleccionada ? 'bi-star-fill' : 'bi-star'}`}
                                onMouseEnter={() => setMouseHover(true)}
                                onMouseLeave={() => setMouseHover(false)}
                                onClick={() => setCalificacionSeleccionada(indice)}
                                ></i>
                            ))}
                        </td>
                      </p>
                      <p className="text-dark fw-bold">Tú comentario:</p>
                      <div className="mb-3">
                      <textarea className="form-control" id="comment" rows="3" maxLength="250" value={review.comment} onChange={(event) => setReview({ ...review, comment: event.target.value })} style={{ resize: "none" }} />
                          <p id="comment-counter" className="form-text text-dark fw-lighter">{review.comment.length} / 250 caracteres</p>
                      </div>
                      <i className="d-flex justify-content-end"><button className="btn btn-light" onClick={handleSubmit} >Aceptar</button></i>
                  </div>
              </td>
          </tr>
      </tbody>
    )
}

export default Adquisiciones;