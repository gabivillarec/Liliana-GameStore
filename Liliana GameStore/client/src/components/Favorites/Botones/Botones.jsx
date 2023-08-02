import Grupo from "./Grupo";
import {
    ORDER_ID_ASCENDENTE,
    ORDER_ID_DESCENDENTE,
    ORDER_PRICE_ASCENDENTE,
    ORDER_PRICE_DESCENDENTE,
    ORDER_RATING_ASCENDENTE,
    ORDER_RATING_DESCENDENTE
} from './ordenamientos'

const Botones = ({handlerOrder}) =>{
    return(
        <div>
            <Grupo handlerOrder={handlerOrder} ascendente={ORDER_ID_ASCENDENTE} descendente={ORDER_ID_DESCENDENTE} name={"ID"}/>
            <Grupo handlerOrder={handlerOrder} ascendente={ORDER_PRICE_ASCENDENTE} descendente={ORDER_PRICE_DESCENDENTE} name={"Price"}/>
            <Grupo handlerOrder={handlerOrder} ascendente={ORDER_RATING_ASCENDENTE} descendente={ORDER_RATING_DESCENDENTE} name={"Rating"}/>
        </div>
    )
}

export default Botones;