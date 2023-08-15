import CardsContainer from "../../CardsContainer/CardsContainer"
import { useState , useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import modificarArray from './cortarArray'
import { useNavigate } from "react-router-dom";
import {getAllProducts} from '../../../Redux/actions'

const Categorias = ({ categoriaNombre}) => {
    const navigate = useNavigate()

    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllProducts(`pageNumber=1&undefined=undefined&category=${categoriaNombre}`))
    },[dispatch])

    let categoria = useSelector(state => state.products) 
    categoria = modificarArray(categoria)
/*     useEffect(()=>{
        setCategoria(modificarArray(products))
    }, [products]) */
    return(
        <div className="container">
            <div className="d-flex justify-content-around">
                <h2>Categoría: {categoriaNombre}</h2>
                <button className="btn btn-link" onClick={()=> navigate('/categorypage')}>Catalogo</button>
            </div>
            <CardsContainer products={categoria}/>
        </div>
    )
}

export default Categorias;