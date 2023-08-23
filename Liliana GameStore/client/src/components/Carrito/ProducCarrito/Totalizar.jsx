

const Totalizar = ({ purchaseHandler , total}) => {

    return(
        <div className="container d-flex justify-content-evenly bg-dark">
            <h4>Total Compra: ${total}</h4>
            <div className="d-flex  bg-dark">
                <button className="btn btn-outline-info flex-shrink-0" type="button" onClick={()=> purchaseHandler()} >
                <i className="bi-cart-fill me-1"></i>Comprar Ahora</button>
                </div>
        </div>
    )
}

export default Totalizar;