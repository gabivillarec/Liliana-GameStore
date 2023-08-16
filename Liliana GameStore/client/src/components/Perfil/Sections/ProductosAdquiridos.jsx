import Adquisiciones from "./Adquisiciones/Adquisiciones";

const ProductosAdquiridos = () =>{

    let buy = {
        id: 29,
        image: 'https://http2.mlstatic.com/D_NQ_NP_736145-MLA50145467465_052022-O.webp',
        name: 'Juego Original PS5 Spider-Man: Miles Morales',
        price: 59900,
        date: '04/08/23',
    }

    return(
        <div className="card mb-3 border-0" >
            <div className="row g-0">
                <div className="card-body bg-dark">
                    <h5 className="card-title text-primary">Productos Adquiridos</h5>
                    <table className="table">
                        <thead className="bg-dark">
                            <tr className='table-dark'>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center" >Precio</th>
                                <th scope="col" className="text-center" >Calificación</th>
                                <th scope="col" className="text-center" >Comentar</th>
                                <th scope="col" className="text-center" >Fecha</th>
                            </tr>
                        </thead>
                        <Adquisiciones compra={buy} />
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductosAdquiridos