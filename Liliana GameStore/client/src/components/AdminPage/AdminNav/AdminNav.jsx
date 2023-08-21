

const AdminNav = ({ handlerRender }) => {
    return (
        <div className="container d-flex justify-content-evenly">
            <button className="btn btn-secondary" onClick={() => handlerRender('AdminGetProduct')}>Mostrar Productos</button>
            <button className="btn btn-secondary" onClick={() => handlerRender('AdminForm')}>Crear Producto</button>
            <button className="btn btn-secondary" onClick={() => handlerRender('AdminUsers')}>Mostrar Users</button>
            <button className="btn btn-secondary" onClick={() => handlerRender('AdminCreateUser')}>Crear Users</button>
            <button className="btn btn-secondary" onClick={() => handlerRender('AdminGetOrder')}>Mostrar Ordenes</button>
            <button className="btn btn-secondary" onClick={() => handlerRender('AdminReview')}>Mostrar Reviews</button>
        </div>
    );
}

export default AdminNav