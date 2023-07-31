


const Card = (img , name) => {
    return(
        <div>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

export default Card;