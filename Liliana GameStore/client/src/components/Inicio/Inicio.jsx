//hooks
import Carousel from "./Carousel/Carousel";
import Categorias from "./Categorias/Categorias";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import style from "./Inicio.module.css"
import {getAllProducts} from '../../Redux/actions'


const Inicio = () => {
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllProducts(`pageNumber=1&undefined=undefined&category=Hardware`))
    },[dispatch])

    let  products  = useSelector(state => state.products)
    let categorias = ['Accesorios' , 'Hardware','Videojuegos']


    return (
        <div className={style.contenedorInicio}>
            <article className={style.inicio} >
                <Carousel/>
                {
                    categorias.map((cat , index)=> <Categorias products={products} categoriaNombre={cat}/>)
                }
            </article>
        </div>
    );
}

export default Inicio;
