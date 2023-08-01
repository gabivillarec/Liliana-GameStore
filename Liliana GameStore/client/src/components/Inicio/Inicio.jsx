//hooks
import Carousel from "./Carousel/Carousel";
import CardsContainer from "../CardsContainer/CardsContainer";


const Inicio = () => {

    const { products } = useSelector(state => state)

    return (
        <div>
            <article>
                <Carousel/>
            </article>
                <CardsContainer products={products}/>
        </div>
    );
}

export default Inicio;
