import { useState } from "react";
import style from './PerfilData.module.css'
import UpdateUser from './UpdateUser'

const PerfilData = ({client , setActualizar ,actualizar }) => {
    const { first_name , last_name , username ,email ,cp ,address ,phone ,avatar_img , id}= client

    return(
        <div className="card mb-3 bg-dark">
            <div className="row g-0">
                    <div className='card-header d-flex justify-content-between'>
                        <h5 className="card-title  text-primary">Usuario: {username}</h5>
                        <button className="btn btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i className="bi bi-pencil-square"></i>
                        </button>
                    </div>
                <div className="d-flex col-md-2 justify-content-center align-items-center">
                    <img src={avatar_img} className={`img-fluid rounded-start ${style.img}`} alt={username} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex gap-2 flex-row mb-2">
                            <div className="border border-info rounded p-2">Nombre: {first_name} {last_name}</div>
                            {/* <div className="border border-info rounded p-2">Apellido: {last_name}</div> */}
                        </div>
                        <div className="d-flex gap-2 flex-row mb-2">
                            <div className="border border-info rounded p-2">E-Mail: {email}</div>
                            <div className="border border-info rounded p-2">Telefono: {phone}</div>
                        </div>
                        <div className="d-flex gap-2 flex-row mb-2">
                            <div className="border border-info rounded p-2">Dirección: {address}</div>
                            <div className="border border-info rounded p-2">Codigo Postal: {cp}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse" id="collapseExample">
                <div className="card bg-dark card-body">
                    <UpdateUser
                        id={id}
                        setActualizar={setActualizar}
                        actualizar={actualizar}
                        initialData={client}
                    />
                </div>
            </div>
        </div>
    )
}

export default PerfilData