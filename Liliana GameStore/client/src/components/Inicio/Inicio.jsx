//hooks
import Carousel from "./Carousel/Carousel";
import CardsContainer from "../CardsContainer/CardsContainer";
import {useSelector} from 'react-redux'

const Inicio = () => {
    const {products } = useSelector(state => state)

    return (
        <div>
            <article>
                <Carousel/>
                <CardsContainer products={products}/>
            </article>
        </div>
    );
}

export default Inicio;
