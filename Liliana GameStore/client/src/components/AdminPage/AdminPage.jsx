import AdminForm from "./AdminForm/AdminForm"
import style from "./AdminPage.module.css"

const AdminPage = () => {



    return(
        <div className={style.fondo}>
            <div className={style.fondoBlureado}>
                <div className="pt-5">
                    <AdminForm/>
                </div>
            </div>
        </div>
    )
}

export default AdminPage