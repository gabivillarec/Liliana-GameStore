import Card from '../Card/Card.jsx'


const CardsContainer = ({ products }) => {
    return(

        <div className="d-flex justify-content-center flex-wrap gap-4 p-4" >
            {products?.map(({id, name, image, price, rating, stock, disabled}) => {
                if(!disabled){
                    return(
                        <Card key={id} id={id} name={name} image={image} price={price} rating={rating} stock={stock}/>
    
                    )

                }
            })}
        </div>
    )
}

export default CardsContainer;