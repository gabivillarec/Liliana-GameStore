import { useNavigate } from "react-router-dom";
import style from "./Login.module.css"
import axios from "axios"
import { useState } from "react";
import { URL } from "../../main";
import InicioGoogle from '../InicioGoogle/InicioGoogle'

const Login = () => {    

    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError({})
        try {
            await axios.post(`${URL}login`, userData)
            .then(response => {
                // Manejo de la respuesta exitosa
                localStorage.setItem("user", JSON.stringify({ username : response.data.username, admin : response.data.admin, id : response.data.id, favorites : response.data.favorites }) )
                navigate('/')
            })                                                                     
        } catch (error) {
            setError(error.response.data)
        }
    } 

    return(
        <article className={style.contenedor}>
            <div className={`d-flex justify-content-center ${style.blurFondoLogin}`}>
                <div className={`p-4 m-4 ${style.login}`}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                            <input type="text" className="form-control" name="username" value={userData.username} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" value={userData.password} onChange={handleChange} id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-outline-info border-2 fs-5 fw-semibold text-uppercase">Ingresá</button>
                        {error && (<p className="mt-3 text-danger">{error.error}</p>)}
                    </form>
                    <hr className="border-2 opacity-50"/>
                    <button className="btn btn-outline-info border-2 fs-5 fw-semibold text-uppercase" onClick={()=> navigate('/user')}>Creá tu cuenta</button>
                    <InicioGoogle   />
                </div>
            </div>
        </article>
    )
}

export default Login;