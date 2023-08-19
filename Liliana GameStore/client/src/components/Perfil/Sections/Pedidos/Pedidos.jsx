
import { cambiarFecha } from "../../../AdminPage/AdminGetOrders/TablaOrders/funcionAuxiliar"

const Pedidos = ({order}) => {
    let {order_numer , order_date ,estado , total_price , quantity} = order
    let fecha = cambiarFecha(order_date)
    return(
        <tbody>
            <tr className='table-dark'>
                <th scope="row">{order_numer}</th>
                <td>{fecha}</td>
                <td>{quantity}</td>
                <td>{estado === 'pendiente' && <p>{estado}</p>}{estado === 'exitoso' && <i className="bi bi-check2-circle"></i>}</td>
                <td>{total_price}</td>
            </tr>
        </tbody>
    )
}

export default Pedidos;