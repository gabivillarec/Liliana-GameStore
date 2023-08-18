


const Cantidad = ({quantity , detail ,setQuantity}) =>{

    const handleIncrement = () => {
        if (quantity < detail.stock) {
          setQuantity(quantity + 1);
        }
      };
      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };



    return(
        <div className="col-md-4 col-6 mb-3">
            <label className="mb-2 d-block">Cantidad</label>
            <div className="input-group mb-3" style={{ width: '170px' }}>
                <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={handleDecrement} >
                    <i className="bi bi-dash"></i>
                </button>
                <input
                    type="text"
                    value={quantity}
                    min="1"
                    max={detail.stock}
                    className="form-control text-center border border-secondary"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"/>
                <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={handleIncrement} >
                    <i className="bi bi-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default Cantidad