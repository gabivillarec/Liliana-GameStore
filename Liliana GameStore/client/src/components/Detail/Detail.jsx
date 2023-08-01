import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearDetail } from "../../Redux/actions"

function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);

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
        <div>
            <img src={detail.image}/>
            <h2>NOMBRE: {detail.name} </h2>
            <h2>PRECIO: {detail.price} </h2>
            <h2>DESCRIPCIÓN: {detail.description} </h2>
            <h2>STOCK: {stockMessage} </h2>
            <button>AGREGAR AL CARRITO</button>
            <button>AGREGAR AL FAVORITOS</button>
        </div>
    )
}

export default Detail;