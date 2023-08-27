import Card from '../Card/Card.jsx'

const CardsContainer = ({ products }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap gap-4 p-4">
            {products?.map(({ id, name, images, price, rating, stock, disabled }) => {
                if (!disabled) {
                    return (
                        <Card key={id} id={id} name={name} images={images} price={price} rating={rating} stock={stock} />
                    );
                }
                return null;
            })}
        </div>
    );
};

export default CardsContainer;