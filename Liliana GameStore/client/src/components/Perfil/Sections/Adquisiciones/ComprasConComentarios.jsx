import React, { useState } from 'react';
import axios from "axios"
import { URL } from "../../../../main";
import { cambiarFecha } from '../../../AdminPage/AdminGetOrders/TablaOrders/funcionAuxiliar';
import style from './Compras.module.css'

const ComprasConComentarios = ({ userId, productId, commentId, image, name, price, rating, comment, date }) => {

    const [mouseHover, setMouseHover] = useState(false);
    const [calificacionSeleccionada, setCalificacionSeleccionada] = useState(rating);
    const [error, setError] = useState(null);
    
    const fullStars = rating;
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

    let fecha = cambiarFecha(date)
    
    const [review, setReview] = useState({
        productId: productId,
        userId: userId,
        comment: comment,
        rating: rating,
    });

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${URL}review/${commentId}`);
            console.log(response.data);
        } catch (error) {
            console.error("Error al eliminar el comentario:", error);
            setError(error.response?.data || "Ocurrió un error al eliminar");
        }
    };
    

    const handleUpdate = async () => {
        const updateReview = {
            id: commentId,
            newComment: review.comment,
            newRating: calificacionSeleccionada
        };    
        try {
            const response = await axios.put(`${URL}review/`, updateReview);
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
                  <i className="bi bi-pencil-square" data-bs-toggle="collapse" data-bs-target={`#collapse${productId}`}></i>
              </td>
              <td className="align-middle text-center">{fecha}</td>
          </tr>
          <tr id={`collapse${productId}`} className="collapse">
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
                      <p className="text-dark fw-bold">Tú comentario actúal:</p>
                      <p id="comment-counter" className="form-text text-dark fw-medium">"{comment}"</p>
                      <p className="text-dark fw-bold">Tú nuevo comentario:</p>
                      <div className="mb-3">
                      <textarea className="form-control" id="comment" rows="3" maxLength="250" value={review.comment} onChange={(event) => setReview({ ...review, comment: event.target.value })} style={{ resize: "none" }} />
                          <p id="comment-counter" className="form-text text-dark fw-lighter">{review.comment.length} / 250 caracteres</p>
                      </div>
                      <div className="mb-3 d-flex justify-content-between">
                          <button className="btn btn-light" onClick={handleDelete}>Eliminar comentario</button>
                          <button className="btn btn-light" onClick={handleUpdate}>Actualizar</button>
                      </div>
                  </div>
              </td>
          </tr>
      </tbody>
    )
}

export default ComprasConComentarios;