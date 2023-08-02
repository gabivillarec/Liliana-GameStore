//hooks
import Carousel from "./Carousel/Carousel";
import Categorias from "./Categorias/Categorias";
import { useSelector } from "react-redux";
import style from "./inicio.module.css"



const Inicio = () => {
    const { products } = useSelector(state => state)
    let categoriaNombre = 'nombre'

    return (
        <div>
            <article className={style.inicio} >
                <Carousel/>
                <Categorias products={products} categoriaNombre={categoriaNombre}/>
            </article>
        </div>
    );
}

export default Inicio;
