import style from './Carrito.module.css'
import ProducCarrito from "./ProducCarrito/ProducCarrito";
import MercadoPago from './MercadoPago/MercadoPago';

import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";

import { useState } from 'react';
import axios from 'axios';
import {getAllCart} from '../../Redux/actions'

const Carrito = () => {
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [preferenceId , setPreferenceId] = useState('')
  let  products  = useSelector(state => state.cartProducts)
  let user = localStorage.getItem('user');
  user = JSON.parse(user);

  let dispatch = useDispatch()
  useEffect(()=> {
      dispatch(getAllCart(user.id))
  },[dispatch ,  deleteTrigger])

  let JsonBody ={  
    userId:user.id,
    productId:9,
    quantity:1
    }
    console.log(JsonBody.userId)
    useEffect(() => {
      async function fetchPreference() {
          const preference = await fetchPreferenceId();
          setPreferenceId(preference);
      }
      fetchPreference();
  }, []);
    

  const fetchPreferenceId = async () => {
    try {
        const response = await axios.post(`http://localhost:3001/LilianaGameStore/order/`, JsonBody);
        return (response.data); // Assuming the response contains preferenceId
    } catch (error) {
        console.error('Error fetching preferenceId:', error);
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
          <ProducCarrito estado={products} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger} />
          </table>
          <MercadoPago preferenceId={preferenceId}/>
        </div>
      </div>

    )
}

export default Carrito;