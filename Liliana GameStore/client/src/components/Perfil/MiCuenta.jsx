import style from './MiCuenta.module.css'
import ProductosAdquiridos from './Sections/ProductosAdquiridos'
import { URL } from '../../main'
import PedidosCurso from './Sections/PedidosCurso'
import PerfilData from './Sections/PerfilData'
import { useState , useEffect } from 'react'
import axios from 'axios'

const MiCuenta = () => {

    const [client , setCliente] = useState({})
    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem("user"))

        axios.get(`${URL}user/${usuario.id}`)
            .then(response =>{
                setCliente(response.data)
            })
    },[])



    return(
        <div className={style.fondo}>
            <div className={style.fondoBlur}>
                <article className="p-4">
                    <section className='container'>
                        <PerfilData client={client}/>
                        <ProductosAdquiridos/>
                        <PedidosCurso/>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default MiCuenta;