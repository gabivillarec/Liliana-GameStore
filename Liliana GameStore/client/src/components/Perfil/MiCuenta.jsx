import style from './MiCuenta.module.css'
import ProductosAdquiridos from './Sections/ProductosAdquiridos'
import { URL } from '../../main'
import PedidosCurso from './Sections/PedidosCurso'
import PerfilData from './Sections/PerfilData'
import { useState , useEffect } from 'react'
import axios from 'axios'
import ValidationLoginCard from '../ValidationLoginCard/ValidationLoginCard'

const MiCuenta = () => {
    const [client , setCliente] = useState({})
    const [logueado, setLogueado] = useState(false)
    const [actualizar , setActualizar] = useState(false)
    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem("user"))

        if(!usuario){
            setLogueado(false)
        }else{
            axios.get(`${URL}user/${usuario.id}`)
                .then(response =>{
                    setLogueado(true)
                    setCliente(response.data)
                })
        }
    },[actualizar])

    return(
        <div className={style.fondo}>
            <div className={style.fondoBlur}>
                {
                    logueado ? (
                        <article className="p-4">
                            <section className='container'>
                                <PerfilData client={client} setActualizar={setActualizar} actualizar={actualizar }/>
                                <ProductosAdquiridos id={client.id}/>
                                <PedidosCurso idUser={client.id}/>
                            </section>
                        </article>
                    )
                    : (
                        <ValidationLoginCard/>
                    )
                }
                
            </div>
        </div>
    )
}

export default MiCuenta;