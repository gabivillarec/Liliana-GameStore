import Pedidos from "./Pedidos/Pedidos"

const PedidosCurso = () =>{
    let pedidoUno = {envio:'pendiente' , fecha:'04/08/23' , monto:4000 , id:123}
    let pedidoDos = {envio:'realizado' ,fecha:'08/06/23' , monto:2000 , id:345}


    return(
        <div className="card mb-3 border-0" >
            <div className="row g-0">
                <div className="card-body bg-dark">
                    <h5 className="card-title text-primary">Pedidos en Curso</h5>
                    <table className="table">
                        <thead className="bg-dark">
                            <tr className='table-dark'>
                                <th scope="col">#</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Monto</th>
                            </tr>
                        </thead>
                    <Pedidos estado={pedidoUno}/>
                    <Pedidos estado={pedidoDos}/>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PedidosCurso