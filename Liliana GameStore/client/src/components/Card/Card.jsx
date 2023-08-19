import { useNavigate } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({ id, name, images, price, stock }) => {
    const navigate = useNavigate()

    return (
        <div className={style.card} onClick={() => navigate(`/detail/${id}`)}>
            <img className={style.image} src={images?.[0]} alt={name} />
            <h6 className={style.detailCard}>{name}</h6>
            <h6 className={style.detailCard}>{stock === 0
                          ? (<h6 className="text-danger ms-2">SIN STOCK ⛔</h6>)
                          : stock > 0 && stock <= 5
                          ? (<h6 className="text-warning ms-2">BAJO STOCK ⚠️</h6>)
                          : (<h6 className="text-success ms-2">EN STOCK ✅</h6>)}
            </h6>
            <h4 className={style.detailCard}>${price}</h4>
        </div>
    )
}

export default Card;