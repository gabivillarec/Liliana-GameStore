

const AdminUserDetail = ({ detail }) => {
    const {avatar_img , username, id, first_name , last_name , email , phone ,address , admin
    } = detail
    let administrador = 'falso'
    if(admin){
        administrador= 'true'
    }

    return (
        <div className="card mb-3 bg-black" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={avatar_img
} className="img-fluid rounded-start" alt={username} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">UserName: {username}</h5>
                        <p>ID: {id}</p>
                        <p>Nombre: {first_name}</p>
                        <p>Apellido: {last_name}</p>
                        <p>Email: {email}</p>
                        <p>Telefono: {phone}</p>
                        <p>Direccion: {address}</p>
                        <p>Admin: {administrador}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUserDetail;