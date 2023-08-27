import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearDetail , getFavorites } from "../../Redux/actions"
import style from "./Detail.module.css"
import CommentaryBox from "../CommentaryBox/CommentaryBox";
import { createFavorite } from "./funcionesAuxiliares/createFavorite";
import { deleteFavorite } from "./funcionesAuxiliares/deleteFavorite";
import { postCarrito } from "./funcionesAuxiliares/postCarrito";
import axios from "axios";
import { URL } from "../../main";
import Favoritos from "./components/Favoritos";
import AsideDetail from "./components/Aside";
import EnStock from "./components/EnStock";
import Brand from "./components/Brand";
import Cantidad from "./components/Cantidad";
import Toast from "../Toast/Toast";
import ErrorToast from "../Toast/ErrorToast";

function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    const userFavorites = useSelector((state) => state.favorites);
    
    const [reviews, setReviews] = useState([])
    const [usuarios, setUsuarios] = useState({});
    const [quantity, setQuantity] = useState(1);
    async function obtenerDetallesUsuario(userId) {
      try {
        const respuesta = await axios.get(`${URL}user/${userId}`);
        return respuesta.data;
      } catch (error) {
        console.error(`Error al obtener detalles del usuario ${userId}: ${error.message}`);
        return { nombre: 'Usuario', apellido: 'Desconocido', imagen: '' };
      }
    }
    let idUser = localStorage.getItem('user');
    idUser = JSON.parse(idUser)
    let titleToast = `Detalle`
    let messageToast = `Producto ${detail.name} agregado a carrito.` 
    let messageToastError = `Error al agregar producto ${detail.name}` 
    
    const handleAddItem = async() => {
      try {
        await postCarrito(detail.id , idUser.id , quantity)
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
        toastBootstrap.show();
      } catch (error) {
        const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastError"));
        toastBootstrapError.show();
      }
    
    
    };
    const handleFavorites = async() => {
      await createFavorite( idUser.id, id )
      setFavorito({
        style:"btn-danger",
        handler:handleDeleteFavorites
      })
    };
    const handleDeleteFavorites = async() => {
      await deleteFavorite(id)
      setFavorito({
        style:"btn-light",
        handler:handleFavorites
      })
    };

    const [favorito , setFavorito] =useState({})

    useEffect(() => {
        dispatch(getProductDetail(id));
        if(idUser){ dispatch(getFavorites(idUser.id)) }
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
        const isFavorite = userFavorites.some(fav => fav.id === parseInt(id));

        if (isFavorite) {
          setFavorito({
            style: "btn-danger",
            handler: handleDeleteFavorites
          });
        } else {
          setFavorito({
            style: "btn-light",
            handler: handleFavorites
          });
        }
        return () => {
          dispatch(clearDetail());
        };
      }, [dispatch, id]);

    return(
        <section className={`py-5 ${style.vBackground}`}>
          <div className="container">
            <div className="row gx-5">
              <AsideDetail id={id}/>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className={`title ${style["text-dark"]} ${style["green-text"]}`}>{detail.name}<br />{detail.category}</h4>
                  <EnStock reviews={reviews} detail={detail}/>
                  <div className="mb-3">
                    <span className="h5">${detail.price}</span>
                  </div>
                  <p>{detail.description_text}</p>
                  <Brand detail={detail} />
                  <hr />
                  <div className="row mb-4">
                    <Cantidad  quantity={quantity}  detail={detail} setQuantity={setQuantity}/>
                  </div>
                    <a href="#" className="btn btn-primary shadow-0 mx-4" onClick={handleAddItem} ><i className="me-1"></i>🛒 Agregar al carrito</a>
                    <Favoritos  favorito={favorito}/>
                  </div>
                <div>
                  <Toast  title={titleToast} message={messageToast}/>
                  <ErrorToast title={titleToast} message={messageToastError}/>
                </div>
              </main>
            </div>
          </div>
          <CommentaryBox reviews={reviews} usuarios={usuarios}/>
        </section>
    )
}

export default Detail;