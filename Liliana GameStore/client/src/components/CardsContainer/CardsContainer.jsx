import Card from '../Card/Card.jsx'


const CardsContainer = ({ products }) => {
    return(

        <div className="d-flex flex-wrap" >
            {products?.map(({id, name, image, price, rating, stock}) => {
                return(
                    <Card key={id} id={id} name={name} image={image} precio={price} rating={rating} stock={stock}/>

                )
            })}
        </div>
    )
}

export default CardsContainer;