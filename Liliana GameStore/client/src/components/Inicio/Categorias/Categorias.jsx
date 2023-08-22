import CardsContainer from "../../CardsContainer/CardsContainer"
import { useState , useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import modificarArray from './cortarArray'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../main";
const Categorias = ({ categoriaNombre}) => {
    const navigate = useNavigate()
    const [category , setCategory] = useState([])
    let dispatch = useDispatch()
    useEffect(()=> {
        axios.get(`${URL}products?pageNumber=1&undefined=undefined&category=${categoriaNombre}`).then(response => {
            setCategory(response.data.data);
          })
        
    },[dispatch])
    let products = modificarArray(category)

    return(
        <div className="container">
            <div className="d-flex justify-content-between border-bottom border-info ps-4 pt-5 pe-4">
                <h2 className="text-info">{categoriaNombre}</h2>
                <button className="btn btn-info m-1" onClick={()=> navigate('/categorypage')}>Catalogo</button>
            </div>
            <CardsContainer products={products }/>
        </div>
    )
}

export default Categorias;