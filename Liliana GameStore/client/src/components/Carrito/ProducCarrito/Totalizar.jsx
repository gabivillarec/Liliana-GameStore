import { useState } from "react";

const Totalizar = ({total}) => {
    const [quantity, setQuantity] = useState(1);


    return(
        <div>
            total: {total}
            <div className="d-flex">
                <button className="btn btn-light flex-shrink-0" type="button">
                <i className="bi-cart-fill me-1"></i>Comprar Ahora</button>
                </div>
        </div>
    )
}

export default Totalizar;