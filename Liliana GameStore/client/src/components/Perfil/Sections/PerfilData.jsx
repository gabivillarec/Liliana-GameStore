import style from './PerfilData.module.css'

const PerfilData = ({client}) => {
    const { first_name , last_name , username ,email ,cp ,address ,phone ,avatar_img}= client
    return(
        <div className="card mb-3 bg-dark">
            <div className="row g-0">
                    <div className='card-header'>
                        <h5 className="card-title text-primary">UserName:{username}</h5>
                    </div>
                <div className="d-flex col-md-2 justify-content-center align-items-center">
                    <img src={avatar_img} className={`img-fluid rounded-start ${style.img}`} alt={username} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div class="d-flex gap-2 flex-row mb-2">
                            <div className="border border-info rounded p-2">Nombre:{first_name}</div>
                            <div className="border border-info rounded p-2">Apellido:{last_name}</div>
                        </div>
                        <div class="d-flex gap-2 flex-row mb-2">
                            <div className="border border-info rounded p-2">Email:{email}</div>
                            <div className="border border-info rounded p-2">Telefono:{phone}</div>
                        </div>
                        <div class="d-flex gap-2 flex-row mb-2">
                            <div className="border border-info rounded p-2">Direccion:{address}</div>
                            <div className="border border-info rounded p-2">Codigo Postal:{cp}</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default PerfilData