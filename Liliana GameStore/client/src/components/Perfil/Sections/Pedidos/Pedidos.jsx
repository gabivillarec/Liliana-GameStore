

const Pedidos = ({estado}) => {
    console.log(estado)
    let {fecha , envio , monto , id } =estado
    
    

    return(
        <tbody>
            <tr className='table-dark'>
                <th scope="row">{id}</th>
                <td>{fecha}</td>
                <td>{envio === 'pendiente' && <i class="bi bi-truck"></i>}{envio === 'realizado' && <i class="bi bi-check2-circle"></i>}</td>
                <td>{monto}</td>
            </tr>
        </tbody>
    )
}

export default Pedidos;