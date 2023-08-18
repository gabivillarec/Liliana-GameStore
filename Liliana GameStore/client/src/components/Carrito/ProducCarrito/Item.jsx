import style from './Item.module.css'

const Item = ({product ,  handlerAgregar, handlerDeleteItem , handlerQuitar}) =>{
    let {images , name , price , id , itemCartId , cantidad} = product
    return(
        <tr className='table-dark'>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={images}
                        alt=""
                        className={`rounded-circle ${style.img}`}
                        />
                    <div className="ms-3">
                        <p className="fw-bold mb-1">{name}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="fw-normal mb-1">{price}</p>
            </td>
            <td>
                <button className='btn btn-outline-success' onClick={()=> handlerAgregar(itemCartId , cantidad+1) }> +</button>
                <button className='btn btn-outline-danger' onClick={()=> handlerQuitar(itemCartId , cantidad-1)}> -</button>
            </td>
                <td>{cantidad}</td>
            <td>
                <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => handlerDeleteItem(itemCartId)}>
                <i className="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>
    )
}

export default Item