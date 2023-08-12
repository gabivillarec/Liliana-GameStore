

const Totalizar = ({ purchaseHandler}) => {



    return(
        <div className="container-fluid d-flex bg-dark">
            total: arreglar
            <div className="d-flex bg-dark">
                <button className="btn btn-dark flex-shrink-0" type="button" onClick={()=> purchaseHandler()} >
                <i className="bi-cart-fill me-1"></i>Comprar Ahora</button>
                </div>
        </div>
    )
}

export default Totalizar;