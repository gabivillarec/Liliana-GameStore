import React, { useState } from 'react';
import axios from "axios"
import { URL } from "../../../../main";
import { cambiarFecha } from '../../../AdminPage/AdminGetOrders/TablaOrders/funcionAuxiliar';
import style from './Compras.module.css'

const ComprasSinComentarios = ({ userId, productId, images, name, price, date }) => {

    const [mouseHover, setMouseHover] = useState(false);
    const [calificacionSeleccionada, setCalificacionSeleccionada] = useState(0);
    const [error, setError] = useState(null);
    
    const fullStars = 0;
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
        comment: '',
        rating: 0,
    });

    const handleSubmit = async () => {

        const newReview = {
            productId: productId,
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
              <th scope="row"><img src={images[0]} alt={name} className={`rounded-circle ${style.img}`} /></th>
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

export default ComprasSinComentarios;