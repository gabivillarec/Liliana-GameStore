

const AdminNav = ({ handlerRender }) => {
    return (
        <div className="container ">
            <button className="btn btn-dark" onClick={() => handlerRender('AdminGetProduct')}>Mostrar Productos</button>
            <button className="btn btn-dark" onClick={() => handlerRender('AdminForm')}>Crear Producto</button>
            <button className="btn btn-dark" onClick={() => handlerRender('AdminUsers')}>Mostrar Users</button>
            <button className="btn btn-dark" onClick={() => handlerRender('AdminCreateUser')}>Crear Users</button>
        </div>
    );
}

export default AdminNav