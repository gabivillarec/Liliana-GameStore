import style from './Carrito.module.css'
import ProducCarrito from "./ProducCarrito/ProducCarrito";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import {getAllCart} from '../../Redux/actions'
import { useState } from 'react';

const Carrito = () => {
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  let user = localStorage.getItem('user');
  let  products  = useSelector(state => state.cartProducts)
  user = JSON.parse(user);

  let dispatch = useDispatch()
  useEffect(()=> {
      dispatch(getAllCart(user.id))
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
          <ProducCarrito estado={products} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger} />
          </table>
        </div>

      </div>

    )
}

export default Carrito;