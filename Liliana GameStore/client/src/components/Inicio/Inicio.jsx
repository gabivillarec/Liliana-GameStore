//hooks
import Carousel from "./Carousel/Carousel";
import Categorias from "./Categorias/Categorias";
import style from "./Inicio.module.css"

const Inicio = () => {
    let categorias = ['Accessories' , 'Hardware','VideoGames']

    return (
        <div className={style.contenedorInicio}>
            <article className={style.inicio} >
                <Carousel/>
                {
                    categorias.map((cat , index)=> <Categorias key={index}  categoriaNombre={cat}/>)
                }
            </article>
        </div>
    );
}

export default Inicio;
