import { useNavigate } from "react-router-dom"
import style from "./ValidationLoginCard.module.css"

const ValidationLoginCard = () => {
    const navigate = useNavigate()

    return (
        <div className="p-5 d-flex flex-column align-items-center">
            <div className={`border border-info border-3 rounded d-flex flex-column align-items-center ${style.cardLogin}`}>
                <h1 className="m-4 mb-0 pb-4 text-center text-info border-bottom border-info border-2">Debes estar logueado para ingresar aqui</h1>
                <button type="button" className="btn btn-info btn-lg m-4" onClick={()=>{navigate('/login')}}>Iniciar sesión</button>
            </div>
        </div>
    )
}

export default ValidationLoginCard