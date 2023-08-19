import { cambiarFecha } from "../../../AdminPage/AdminGetOrders/TablaOrders/funcionAuxiliar"

const Pedidos = ({order}) => {
    let {order_numer , order_date ,estado , total_price , quantity} = order
    let fecha = cambiarFecha(order_date)
    return(
        <tbody>
            <tr className='table-dark'>
                <th className="align-middle text-center" scope="row"># {order_numer}</th>
                <td className="align-middle text-center">{quantity === 1 ? `${quantity} artículo` : `${quantity} artículos`}</td>
                <td className="align-middle text-center" >${total_price}</td>
                <td className="align-middle text-center" >{estado === 'pendiente' && <p>{estado}</p>}{estado === 'exitoso' && <i className="bi bi-check2-circle"></i>}</td>
                <td className="align-middle text-center" >{fecha}</td>
            </tr>
        </tbody>
    )
}

export default Pedidos;