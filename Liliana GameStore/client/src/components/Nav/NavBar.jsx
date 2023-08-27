import { useLocation, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar'
import imageLogo from '../../../vistas/LilianaGameStore.png'

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const usuario = JSON.parse(localStorage.getItem("user"))

    const handleLogOut = () => {
        localStorage.removeItem("user")
        if (location.pathname === '/') {
          window.location.reload();
        } else {
          navigate('/');
        }
      };

    return(
        <nav id="navbar-example2" className={`navbar px-3 p-3 ${style.navbarE}`}>
            <img className={style.logo} src={imageLogo} alt="logo" onClick={() => navigate('/')}/>

            <SearchBar/>

            <div className="d-flex flex-wrap gap-2">
                {usuario && usuario.admin &&(<button className="btn btn-outline-info border-2 fs-5 fw-semibold text-uppercase" onClick={()=> navigate('/adminpage')}>Admin</button>)}
                <button className="btn btn-outline-info border-2 fs-5 fw-semibold text-uppercase" onClick={()=> navigate('/categorypage')}>Catálogo</button>
                {usuario ? 
                (<button className="btn btn-outline-info border-2 fs-5" onClick={()=> navigate('/carrito')}>🛒</button>
                ) : 
                <button className="btn btn-outline-info border-2 fs-5 fw-semibold text-uppercase" onClick={()=> navigate('/login')}>Ingresá</button>
                }
                {usuario && (<button className="btn btn-outline-info border-2 fs-5 fw-semibold text-uppercase" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">{usuario && usuario.username}</button>)}
            </div>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className={`offcanvas-header ${style.perfilCanvaHeader}`}>
                    <h5 className="offcanvas-title text-info" id="offcanvasExampleLabel">{usuario && usuario.username}</h5>
                    <button type="button" className="btn btn-outline-info fs-5" data-bs-dismiss="offcanvas" aria-label="Close">✖</button>
                </div>
                <div className={`offcanvas-body d-flex flex-column gap-3 ${style.perfilCanvaBody}`}>
                    <button className="btn btn-outline-info border-3 fs-5" onClick={()=> navigate('/micuenta')} data-bs-dismiss="offcanvas" aria-label="Close">Mi Cuenta</button>
                    <button className="btn btn-outline-info border-3 fs-5" onClick={()=> navigate('/favorites')} data-bs-dismiss="offcanvas" aria-label="Close">Mis Favoritos</button>
                    <button className="btn btn-outline-danger border-3 fs-5 fw-semibold text-uppercase" onClick={()=> handleLogOut()} data-bs-dismiss="offcanvas" aria-label="Close">Cerrar Sesión</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;


