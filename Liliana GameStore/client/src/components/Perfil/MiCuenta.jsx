import style from './MiCuenta.module.css'
import Sections from './Sections/Sections'
import PedidosCurso from './Sections/PedidosCurso'
import PerfilData from './Sections/PerfilData'
import { useState , useEffect } from 'react'
import axios from 'axios'

const MiCuenta = () => {
    let clientePrueva = {  
        first_name: "Pirulo",
        last_name : "Gomez",
        username: "Pirulo10",
        email: "pirulito@hotmail.com",
        password: "password",
        cp: 525,
        address: "Dirección...",
        phone: "+542668877",
        avatar_img: "data:image/png;base64,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"
    }
    const [client , setCliente] = useState({})
    useEffect(()=>{
        const usuario = JSON.parse(localStorage.getItem("user"))
        console.log(usuario.id);
        axios.get(`http://localhost:3001/LilianaGameStore/user/${usuario.id}`)
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
                        <PedidosCurso/>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default MiCuenta;