import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearDetail } from "../../redux/actions"
import style from "./Detail.module.css"
import DisqusComments from '../DisqusComments/DisqusComments'
import { createFavorite } from "./funcionesAuxiliares/createFavorite";

function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    console.log(detail)
    
    const [quantity, setQuantity] = useState(1);

    const fullStars = Math.floor(detail.rating);
    const hasHalfStar = detail.rating - fullStars >= 0.5;
    
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

    const handleBuyNow = () => {
      console.log('Comprar Ahora');
    };
    const handleAddItem = () => {
      console.log('Agregar al carrito');
    };
    const handleFavorites = async() => {
      let response = await createFavorite( 1, detail.id )
      console.log(response.product)
      alert(`producto con id  ${detail.id} agragado con exito`, response.product)
    };
    const handleDeleteFavorites = () => {
      
    };

    useEffect(() => {
        dispatch(getProductDetail(id));
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
                    <span className="ms-1">{detail.rating}</span>
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
                </div>
              </main>
            </div>
          </div>
          <DisqusComments/>
        </section>
    )
}

export default Detail;