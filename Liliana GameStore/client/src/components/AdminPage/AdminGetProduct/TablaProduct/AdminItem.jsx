import style from './AdminItem.module.css'


const AdminItem = ({product }) =>{
    let {image , name , price , id , stock} = product
    return(
        <tr className='table-dark'>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={image}
                        alt={name}
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
                <td>{stock}</td>
            <td>
                <button type="button" className="btn btn-link btn-sm btn-rounded" >
                <i class="bi bi-pencil-square"></i>
                </button>
            </td>
            <td>
                <button type="button" className="btn btn-link btn-sm btn-rounded" >
                <i className="bi bi-trash3-fill"></i>
                </button>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Eliminar</label>
                </div>
            </td>
        </tr>
    )
}

export default AdminItem;