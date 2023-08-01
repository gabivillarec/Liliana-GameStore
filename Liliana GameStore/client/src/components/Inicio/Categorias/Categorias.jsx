import CardsContainer from "../../CardsContainer/CardsContainer"
import { useState , useEffect } from "react";
import modificarArray from "./cortarArray";

const Categorias = ({products , categoriaNombre}) => {
    const [categoria , setCategoria] = useState([])
    
    useEffect(()=>{
        setCategoria(modificarArray(products))
    }, [])

    return(
        <div className="container">
            <h2>Categoria: {categoriaNombre}</h2>
            <CardsContainer products={categoria}/>
        </div>
    )
}

export default Categorias;