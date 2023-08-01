//hooks
import Carousel from "./Carousel/Carousel";
import Categorias from "./Categorias/Categorias";
import { useSelector } from "react-redux";



const Inicio = () => {
    const { products } = useSelector(state => state)
    let categoriaNombre = 'nombre'

    return (
        <div>
            <article >
                <Carousel/>
                <Categorias products={products} categoriaNombre={categoriaNombre}/>
            </article>
        </div>
    );
}

export default Inicio;
