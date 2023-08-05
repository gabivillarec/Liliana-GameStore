//hooks
import Carousel from "./Carousel/Carousel";
import Categorias from "./Categorias/Categorias";
import { useSelector , useDispatch } from "react-redux";
import { useEffect , useState} from "react";
import style from "./inicio.module.css"
import {getAllProducts} from '../../redux/actions'


const Inicio = () => {
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllProducts())
    },[dispatch])

    let  products  = useSelector(state => state.products)
    console.log(products)
    let categoriaNombre = 'nombre'

    return (
        <div className={style.contenedorInicio}>
            <article className={style.inicio} >
                <Carousel/>
                <Categorias products={products} categoriaNombre={categoriaNombre}/>
            </article>
        </div>
    );
}

export default Inicio;
