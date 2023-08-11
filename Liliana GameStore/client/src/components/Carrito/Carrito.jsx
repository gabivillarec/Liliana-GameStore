import style from './Carrito.module.css'
import ProducCarrito from "./ProducCarrito/ProducCarrito";
import MercadoPago from './MercadoPago/MercadoPago';

import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";

import { useState } from 'react';


import {getAllCart , getMercadoOrder} from '../../Redux/actions'


const Carrito = () => {
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  let  products  = useSelector(state => state.cartProducts)
  let  mercadoOrder  = useSelector(state => state.mercadoOrder)

  console.log(mercadoOrder)
  let user = localStorage.getItem('user');
  
  user = JSON.parse(user);
  
  
  let JsonBody ={  
    userId:user.id,
    productId:9,
    quantity:1
    }

  let dispatch = useDispatch()

  useEffect(()=> {
      dispatch(getAllCart(user.id))
      dispatch(getMercadoOrder(JsonBody))
  },[dispatch ,  deleteTrigger])





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
          <ProducCarrito estado={products} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger} preferenceId={mercadoOrder}/>
          </table>
        </div>
      </div>

    )
}

export default Carrito;