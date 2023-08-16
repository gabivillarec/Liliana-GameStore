import React, { useState } from 'react';
import style from './Adquiciones.module.css'

const Adquisiciones = ({compra}) => {
    
    let { id, image, name, price, rating, comment, date } = compra

    const [commentText, setCommentText] = useState('');
    const [puntuacionActual, setPuntuacionActual] = useState(0);
    const [estaPasandoMouse, setEstaPasandoMouse] = useState(false);

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
              <td colspan="6" className="bg-secondary rounded">
                  <div className="container p-3 bg-secondary text-white">
                      <p className="text-dark fw-bold">Calificar:
                        <td className="align-middle text-center" onMouseEnter={() => setEstaPasandoMouse(true)} onMouseLeave={() => setEstaPasandoMouse(false)} >
                            {[1, 2, 3, 4, 5].map((indice) => ( <i
                                key={indice}
                                className={`text-info bi ${indice <= (estaPasandoMouse ? puntuacionActual : fullStars) ? 'bi-star-fill' : 'bi-star'}`}
                                onMouseEnter={() => setPuntuacionActual(indice)}
                                onMouseLeave={() => setPuntuacionActual(0)}
                                ></i>
                            ))}
                        </td>
                      </p>
                      <p className="text-dark fw-bold">Tú comentario:</p>
                      <div className="mb-3">
                      <textarea className="form-control" id="comment" rows="3" maxLength="250" value={commentText} onChange={(event) => setCommentText(event.target.value)} style={{ resize: "none" }} />
                          <p id="comment-counter" className="form-text text-dark fw-lighter">{commentText.length} / 250 caracteres</p>
                      </div>
                      <i className="d-flex justify-content-end"><button className="btn btn-light">Aceptar</button></i>
                  </div>
              </td>
          </tr>
      </tbody>
    )
}

export default Adquisiciones;