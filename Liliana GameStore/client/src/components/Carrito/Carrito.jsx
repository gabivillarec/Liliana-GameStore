import style from './Carrito.module.css'
import ProducCarrito from "./ProducCarrito/ProducCarrito";
import Totalizar from './ProducCarrito/Totalizar'
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from 'react';
import {getAllCart } from '../../Redux/actions'
import {objetoMercado} from './ProducCarrito/funcionesAuxiliares'
import axios from 'axios';
import { URL } from '../../main';


const Carrito = () => {
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  let  products  = useSelector(state => state.cartProducts)
  let user = localStorage.getItem('user');
  user = JSON.parse(user);

  let dispatch = useDispatch()

  useEffect(()=> {
      dispatch(getAllCart(user.id))
  },[dispatch ,  deleteTrigger])

  const purchaseHandler = async() => {
    try {
      let obtMercado = objetoMercado(products , user.id)
      let response = await axios.post(`${URL}mercadoorder`, obtMercado)
          window.location.href = response.data.response.body.init_point;
    } catch (error) {
      console.log(error.message);
    }
  };



    return(

      <div className= {style.container}>
        <div className='container'>
          <table className="table align-middle mb-0 bg-white">
          <thead className="bg-dark">
            <tr className='table-dark'>
              <th>Producto</th>
              <th>Precio</th>
              <th>Agregar/Quitar</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <ProducCarrito estado={products} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger}/>
          </table>
        </div>
        <div>
          <Totalizar  purchaseHandler={purchaseHandler}/>
        </div>
      </div>

    )
}

export default Carrito;