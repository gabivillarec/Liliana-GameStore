const ProductosAdquiridos = () =>{

    return(
        <div className="card mb-3 border-0" >
            <div className="row g-0">
                <div className="card-body bg-dark">
                    <h5 className="card-title text-primary">Productos Adquiridos</h5>
                    <table class="table">
                        <thead className="bg-dark">
                            <tr className='table-dark'>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Calificar</th>
                                <th scope="col">Comentario</th>
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductosAdquiridos