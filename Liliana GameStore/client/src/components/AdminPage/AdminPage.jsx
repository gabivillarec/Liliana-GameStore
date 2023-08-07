import AdminForm from "./AdminForm/AdminForm"
import AdminGetProduct from "./AdminGetProduct/AdminGetProduct"
import style from "./AdminPage.module.css"


const AdminPage = () => {



    return(
        <div className={style.fondo}>
            <div className={style.fondoBlureado}>
                <div className="pt-5">
                    <AdminGetProduct/>
                    <AdminForm/>
                </div>
            </div>
        </div>
    )
}

export default AdminPage