import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    const navigate = useNavigate()

    return(
        <nav id="navbar-example2" className={`navbar px-3 p-3 ${style.navbarE}`}>
            <img className={style.logo} src='../../../vistas/LilianaGameStore.png' alt="logo" onClick={() => navigate('/')}/>
            <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-outline-info border-3 fs-5" onClick={()=> navigate('/login')}>Login</button>
                <button className="btn btn-outline-info border-3 fs-5" onClick={()=> navigate('/user')}>User</button>
                <button className="btn btn-outline-info border-3 fs-5" onClick={()=> navigate('/favorites')}>Favorites</button>
                <button className="btn btn-outline-info border-3 fs-5" onClick={()=> navigate('/carrito')}>🛒</button>
                <button className="btn btn-outline-info border-3 fs-5" onClick={()=> navigate('/categorypage')}>category</button>
            </div>
        </nav>
    )
}

export default NavBar;


