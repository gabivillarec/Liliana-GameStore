import CardsContainer from "../../CardsContainer/CardsContainer"
import { useState , useEffect } from "react";
import modificarArray from './cortarArray'

const Categorias = ({products , categoriaNombres}) => {
    const [categoria , setCategoria] = useState([])
    
    useEffect(()=>{

        setCategoria(modificarArray(products))

    }, [products])
    return(
        <div className="container">
            <h2>Categoria: {categoriaNombres}</h2>
            <CardsContainer products={categoria}/>
        </div>
    )
}

export default Categorias;