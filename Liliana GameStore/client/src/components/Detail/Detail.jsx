import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
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

    return(
        <div>
            <img src={detail.image}/>
            <h2>NOMBRE: {detail.name} </h2>
            <h2>PRECIO: {detail.price} </h2>
            <h2>DESCRIPCIÓN: {detail.description} </h2>
            <button>AGREGAR AL CARRITO</button>
            <button>AGREGAR AL FAVORITOS</button>
        </div>
    )
}

export default Detail;