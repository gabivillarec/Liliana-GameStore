import { useNavigate } from "react-router-dom";
import style from "./Login.module.css"
import axios from "axios"

const Login = () => {
    const navigate = useNavigate()
    const userData = {
        username: 'Pirulo10',
        password: '12345678'
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            let respuesta = axios.get('http://localhost:3001/LilianaGameStore/login', userData)
            .then(response => {
                // Manejo de la respuesta exitosa
                console.log(response.data);
              })                                                                      
        } catch (error) {
            
        }
    }

    return(
        <article className={style.contenedor}>
            <div className={`d-flex justify-content-center ${style.blurFondoLogin}`}>
                <div className={`p-4 m-4 ${style.login}`}>
                    <form onSubmit={handleSubmit}>
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
            </div>
        </article>
    )
}

export default Login;