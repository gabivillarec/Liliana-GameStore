import style from './Carrito.module.css'
import ProducCarrito from "./ProducCarrito/ProducCarrito";
import Totalizar from './ProducCarrito/Totalizar'
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from 'react';
import {getAllCart } from '../../Redux/actions'
import {objetoMercado , calcualarTotal} from './ProducCarrito/funcionesAuxiliares'
import axios from 'axios';
import { URL } from '../../main';
import ValidationLoginCard from '../ValidationLoginCard/ValidationLoginCard';

const Carrito = () => {
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [logueado, setLogueado] = useState(false)
  let  products  = useSelector(state => state.cartProducts)
  let user = JSON.parse(localStorage.getItem('user'));
  const [total , setTotal] = useState()
  let dispatch = useDispatch()

  useEffect(()=> {
    if(!user){
      setLogueado(false)
    }else{
      dispatch(getAllCart(user.id))
      setLogueado(true)
    }
  },[dispatch ,  deleteTrigger ])

  useEffect(()=>{
    setTotal(calcualarTotal(products))
  },[products])

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
        {
          logueado ? (
            <div>
              <div className='container'>
                <table className="table align-middle mb-0 bg-white">
                <thead className="bg-dark">
                  <tr className='table-dark'>
                    <th scope="col"></th>
                    <th scope="col">Producto</th>
                    <th scope="col" className="text-center" >Precio</th>
                    <th scope="col" className="text-center" >Agregar/Quitar</th>
                    <th scope="col" className="text-center" >Cantidad</th>
                    <th scope="col" className="text-center" >Eliminar</th>
                    </tr>
                </thead>
                <ProducCarrito estado={products} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger}/>
                </table>
              <div>
                <Totalizar  purchaseHandler={purchaseHandler} total={total}/>
              </div>
              </div>
            </div>
          ) 
          : (
            <ValidationLoginCard/>
          )
        }
        
      </div>

    )
}

export default Carrito;