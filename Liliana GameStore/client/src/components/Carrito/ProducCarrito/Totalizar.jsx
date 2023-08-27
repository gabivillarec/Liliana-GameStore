const Totalizar = ({ purchaseHandler , total}) => {

    return(
        <div className="container d-flex bg-dark justify-content-between">
            <h4 className="mt-3" style={{ marginLeft: '81px' }}>Total Compra: ${total}</h4>
            <button className="btn btn-outline-info flex-shrink-0 mt-2 mb-2" style={{ marginRight: '32px' }} type="button" onClick={purchaseHandler}>🛒 Comprar Ahora</button>
        </div>
    )
}

export default Totalizar;