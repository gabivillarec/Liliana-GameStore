

const Totalizar = ({total}) => {

    return(
        <div className="d-flex bg-dark">
            total: {total}
            <div className="d-flex bg-dark">
                <button className="btn btn-dark flex-shrink-0" type="button">
                <i className="bi-cart-fill me-1"></i>Comprar Ahora</button>
                </div>
        </div>
    )
}

export default Totalizar;