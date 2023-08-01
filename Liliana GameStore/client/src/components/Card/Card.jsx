import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, price, rating, stock }) => {
    const navigate = useNavigate()
    return (


        <div className="card "  style={{width:'12rem'}}>
            <img className="img-thumbnail" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Rating: {rating}</p>
                <p className="card-text">En Stock: {stock} </p>
                <p className="card-text">Precio: {precio}</p>
            </div>
        </div>
    )
}

export default Card;
