import { useState , useEffect } from "react"



const Favoritos = ({favorito}) =>{
    
    useEffect(() =>{
    },[favorito])

    return(
        <button href="#" className={`btn ${favorito.style} border border-secondary py-2 icon-hover px-3`} onClick={favorito.handler} >
            <i className="me-1 fa fa-heart fa-lg"></i> Favoritos
        </button>
    )
}

export default Favoritos