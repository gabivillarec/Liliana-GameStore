import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearDetail } from "../../Redux/actions"

function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);    
    const [quantity, setQuantity] = useState(1);

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
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img className="card-img-top mb-5 mb-md-0" src={detail.image} alt={detail.name} />
              </div>
              <div className="col-md-6">
                <div className="small mb-1">{detail.rating} ⭐</div>
                <h1 className="display-5 fw-bolder">{detail.name}</h1>
                <div className="fs-5 mb-5">
                  <span className="text-decoration-line-through">$?</span>
                  <span>  ${detail.price}</span>
                </div>
                <div className="fs-5 mb-5">
                  <span>MARCA: </span>
                </div>
                <div className="fs-5 mb-5">
                  <span>{stockMessage}</span>
                </div>
                <p className="lead">{detail.description}</p>
                <div className="d-flex">
                  <input className="form-control text-center me-3" id="inputQuantity" type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min="1" max={detail.stock} style={{ maxWidth: '3rem' }} />
                  <button className="btn btn-outline-dark flex-shrink-0" type="button">
                    <i className="bi-cart-fill me-1"></i>Comprar Ahora</button>
                  <button className="btn btn-outline-dark flex-shrink-0" type="button">
                    <i className="bi-cart-fill me-1"></i>Agregar al carrito</button>
                  <button>FAV</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Detail;