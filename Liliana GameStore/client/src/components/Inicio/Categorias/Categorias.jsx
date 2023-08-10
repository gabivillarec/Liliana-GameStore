import CardsContainer from "../../CardsContainer/CardsContainer"
import { useState , useEffect } from "react";

const Categorias = ({products , categoriaNombres}) => {
    const [categoria , setCategoria] = useState([])
    
    useEffect(()=>{
        setCategoria(products)
    }, [products])
    return(
        <div className="container">
            <h2>Categoria: {categoriaNombres}</h2>
            <CardsContainer products={categoria}/>
        </div>
    )
}

export default Categorias;