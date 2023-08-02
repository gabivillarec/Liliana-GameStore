import { useNavigate } from "react-router-dom";
import style from "./Login.module.css"

const Login = () => {
    const navigate = useNavigate()

    return(
        <article className={style.contenedor}>
            <div className={`p-4 position-absolute top-50 start-50 translate-middle ${style.login}`}>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-outline-info">Submit</button>
                </form>
                <hr className="border-2 opacity-50"/>
                <h6>or</h6>
                <button className="btn btn-outline-info" onClick={()=> navigate('/user')}>Register</button>
            </div>
        </article>
    )
}

export default Login;