

const AdminNav = ({ handlerRender , client}) => {
    return (
        <div className=" container d-flex  justify-content-evenly m-b-3">
            <button className="btn btn-outline-info" onClick={() => handlerRender('AdminGetProduct')}>Mostrar Productos</button>
            <button className="btn btn-outline-info" onClick={() => handlerRender('AdminForm')}>Crear Producto</button>
            <button className="btn btn-outline-info" onClick={() => handlerRender('AdminUsers')}>Mostrar Users</button>
            {client.master && <button className="btn btn-outline-info" onClick={() => handlerRender('AdminCreateUser')}>Crear Users</button>}
            <button className="btn btn-outline-info" onClick={() => handlerRender('AdminGetOrder')}>Mostrar Ordenes</button>
            <button className="btn btn-outline-info" onClick={() => handlerRender('AdminReview')}>Mostrar Reviews</button>
        </div>
    );
}


export default AdminNav;
