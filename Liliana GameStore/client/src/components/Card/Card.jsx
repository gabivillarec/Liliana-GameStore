import { useNavigate } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({ id, name, images, price, stock }) => {
    const navigate = useNavigate()
    return (
        <div className={style.card} onClick={() => navigate(`/detail/${id}`)}>
            <img className={style.image} src={`${images}`} alt={name} />
            <h6 className={style.detailCard}>{name}</h6>
            <h6 className={style.detailCard}>Stock: {stock}</h6>
            <h4 className={style.detailCard}>${price}</h4>
        </div>
    )
}

export default Card;
