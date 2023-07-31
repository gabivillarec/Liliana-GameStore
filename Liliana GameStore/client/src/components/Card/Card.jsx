import { useNavigate } from "react-router-dom";

const Card = ({id, name, image, precio, rating, stock}) => {
    const navigate = useNavigate()

    return (
        <div className="card" onClick={() => navigate(`/detail/${id}`)}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h3>{precio}</h3>
            <h4>{rating}</h4>
        </div>
    )
}
export default Card;