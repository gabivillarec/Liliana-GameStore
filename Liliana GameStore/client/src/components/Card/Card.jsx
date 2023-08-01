import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, price, rating, stock }) => {
    const navigate = useNavigate()

    return (
        <div onClick={ () => navigate(`/detail/${id}`) }>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <h4>{rating}</h4>
            <h4>{stock}</h4>
        </div>
    )
}

export default Card;