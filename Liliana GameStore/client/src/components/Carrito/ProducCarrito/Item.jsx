import style from './Item.module.css'

const Item = ({product ,  handlerAgregar, handlerDeleteItem , handlerQuitar}) =>{

    let {images , name , price , id , itemCartId , cantidad} = product
    
    return(
        <tr className='table-dark'>
            <th scope="row" className="text-center"><img src={images[0]} alt={name} className={`rounded-circle ${style.img}`} /></th>
            <td className="align-middle fw-bold mb-1">{name}</td>
            <td className="align-middle text-center">${price}</td>
            <td className="align-middle text-center">
              <button className='btn btn-outline-success mx-3' onClick={() => handlerAgregar(itemCartId, cantidad + 1)}>+</button>
              <button className='btn btn-outline-danger mx-3' onClick={() => handlerQuitar(itemCartId, cantidad - 1)}>-</button>
            </td>
            <td className="align-middle text-center" >{cantidad}</td>
            <td className="align-middle text-center">
              <button type="button" className="btn btn-outline-info" onClick={() => handlerDeleteItem(itemCartId)}>
                <i className="bi bi-trash3-fill"></i>
              </button>
            </td>
        </tr>
    )
}

export default Item