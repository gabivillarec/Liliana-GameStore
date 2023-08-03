import { useNavigate } from "react-router-dom";
import style from "./Login.module.css"
import axios from "axios"
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let respuesta = await axios.post('http://localhost:3001/LilianaGameStore/login', userData)
            .then(response => {
                // Manejo de la respuesta exitosa
                console.log(response.data);
                localStorage.setItem("user", response.data.username)
                navigate('/')
              })                                                                     
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return(
        <article className={style.contenedor}>
            <div className={`d-flex justify-content-center ${style.blurFondoLogin}`}>
                <div className={`p-4 m-4 ${style.login}`}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="text" className="form-control" name="username" value={userData.username} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={userData.password} onChange={handleChange} id="exampleInputPassword1"/>
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