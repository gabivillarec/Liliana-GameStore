
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
            <h3>
                <Link to='/' className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >Liliana-GameStore</Link>
            </h3>
            <ul className="nav nav-pills">
                <Link to='/login' className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >Login</Link>
                <Link to='/user'className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >User</Link>
                <Link to='/favorites'className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >Favorites</Link>
            </ul>
        </nav>
    )
}

export default NavBar;


