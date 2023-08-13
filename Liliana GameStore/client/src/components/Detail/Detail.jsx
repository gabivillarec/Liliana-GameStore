import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearDetail } from "../../Redux/actions"
import style from "./Detail.module.css"
import CommentaryBox from "../CommentaryBox/CommentaryBox";
import { createFavorite } from "./funcionesAuxiliares/createFavorite";
import { deleteFavorite } from "./funcionesAuxiliares/deleteFavorite";
import {detailMercado} from '../Carrito/ProducCarrito/funcionesAuxiliares'
import { postCarrito } from "./funcionesAuxiliares/postCarrito";
import axios from "axios";
import { URL } from "../../main";

function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    const [reviews, setReviews] = useState([])
    const [usuarios, setUsuarios] = useState({});
    
    const [quantity, setQuantity] = useState(1);

    const totalRating = reviews?.reduce((total, review) => total + review.rating, 0);
    const promedioRating = totalRating / reviews.length;
    const fullStars = Math.floor(promedioRating);
    const hasHalfStar = promedioRating - fullStars >= 0.5;
    
    const fullStarsElements = [];
    for (let i = 0; i < fullStars; i++) {
      fullStarsElements.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    const halfStarElement = hasHalfStar ? (
      <i key={fullStars} className="bi bi-star-half"></i>
    ) : null;
    const emptyStarsElements = [];
    const totalStars = 5;
    for (let i = 0; i < totalStars - fullStars - (hasHalfStar ? 1 : 0); i++) {
      emptyStarsElements.push(<i key={fullStars + (hasHalfStar ? 1 : 0) + i} className="bi bi-star"></i>);
    }


    async function obtenerDetallesUsuario(userId) {
      try {
        const respuesta = await axios.get(`${URL}user/${userId}`);
        return respuesta.data;
      } catch (error) {
        console.error(`Error al obtener detalles del usuario ${userId}: ${error.message}`);
        return { nombre: 'Usuario', apellido: 'Desconocido', imagen: '' };
      }
    }


    const handleIncrement = () => {
      if (quantity < detail.stock) {
        setQuantity(quantity + 1);
      }
    };
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const handleBuyNow = async() => {
      try {
        let idUser = localStorage.getItem('user');
        idUser = JSON.parse(idUser)
        let obtMercado = detailMercado(detail ,idUser.id )
        let response = await axios.post(`${URL}mercadoorder`, obtMercado)
            window.location.href = response.data.response.body.init_point;
      } catch (error) {
        console.log(error.message);
      }
    };
    const handleAddItem = async() => {
      let idUser = localStorage.getItem('user');
      idUser = JSON.parse(idUser)
      await postCarrito(detail.id , idUser.id , quantity)
      alert(`Producto ${detail.name} agregado de manera exitosa`)
    
    };
    const handleFavorites = async() => {
      let idUser = localStorage.getItem('user');
      idUser = JSON.parse(idUser)
      let response = await createFavorite( idUser.id, detail.id )
      alert(`producto con id  ${detail.id} agragado con exito`, response.product)
    };
    const handleDeleteFavorites = async() => {
      let response = await deleteFavorite(detail.id)
      alert(`Producto con ID: ${detail.id} Quitado de favoritos`)
    };


    useEffect(() => {
        dispatch(getProductDetail(id));
        axios.get(`${URL}review/product/${id}`)
        .then(response => {
          setReviews(response.data);
  
          // Obtiene los detalles de los usuarios y almacena en el estado
          const userIds = response.data.map(review => review.userId);
          const detallesUsuarios = {};
  
          Promise.all(userIds.map(userId => obtenerDetallesUsuario(userId)))
            .then(detalles => {
              detalles.forEach((detalle, index) => {
                detallesUsuarios[userIds[index]] = detalle;
              });
              setUsuarios(detallesUsuarios);
            })
            .catch(error => {
              console.error('Error al obtener detalles de los usuarios:', error.message);
            });
        })
        .catch(error => {
          console.error('Error al obtener las reviews:', error.message);
        });
        return () => {
          dispatch(clearDetail());
        };
      }, [dispatch, id]);

      
    const stockMessage =
      detail.stock === 0 ? "SIN STOCK ⛔"
      : detail.stock > 0 && detail.stock <= 5 ? "BAJO STOCK ⚠️"
      : "EN STOCK ✅"

    return(
        <section className={`py-5 ${style.vBackground}`}>
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href={detail.image}
                  >
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }}
                      className="rounded-4 fit"
                      src={detail.image}
                      alt={detail.name}
                    />
                  </a>
                </div>
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className={`title ${style["text-dark"]} ${style["green-text"]}`}>{detail.name}<br />{detail.category}</h4>
                  <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    {fullStarsElements}
                    {halfStarElement}
                    {emptyStarsElements}
                    <span className="ms-1">{promedioRating?.toFixed(2)}</span>
                  </div>
                    <span className="text-success ms-2">{stockMessage}</span>
                  </div>

                  <div className="mb-3">
                    <span className="h5">${detail.price}</span>
                  </div>

                  <p>{detail.description_text} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, consectetur aperiam. Est tenetur corrupti vel iusto facere quos repellat. Necessitatibus inventore quis exercitationem laudantium. Optio corporis assumenda ducimus totam explicabo? </p>

                  <div className="row">
                    <dt className="col-3">Brand</dt>
                    <dd className="col-9">{detail.brand}</dd>

                    {/* <dt className="col-3">Type:</dt>
                    <dd className="col-9">Regular</dd> */}

                  </div>

                  <hr />

                  <div className="row mb-4">
                    <div className="col-md-4 col-6 mb-3">
                      <label className="mb-2 d-block">Cantidad</label>
                      <div className="input-group mb-3" style={{ width: '170px' }}>
                        <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={handleDecrement} >
                          <i className="bi bi-dash"></i>
                        </button>
                        <input
                          type="text"
                          value={quantity}
                          min="1"
                          max={detail.stock}
                          className="form-control text-center border border-secondary"
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={handleIncrement} >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-warning shadow-0" onClick={handleBuyNow}>
                    Comprar Ahora
                  </a> 
                  <a href="#" className="btn btn-primary shadow-0" onClick={handleAddItem} >
                    <i className="me-1"></i>🛒 Agregar al carrito
                  </a>
                  <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3" onClick={handleFavorites} >
                    <i className="me-1 fa fa-heart fa-lg"></i> Favoritos
                  </a>
                  <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3" onClick={handleDeleteFavorites} >
                    <i className="me-1 fa fa-heart fa-lg"></i> Quitar Favoritos
                  </a>
                </div>
              </main>
            </div>
          </div>
          <CommentaryBox reviews={reviews} usuarios={usuarios}/>
        </section>
    )
}

export default Detail;