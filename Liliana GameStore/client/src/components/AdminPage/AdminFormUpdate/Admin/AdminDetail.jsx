

const AdminDetail = ({ detail }) => {
    const {
        name, price, image, stock, rating, description_text,
        category_name, subcategory_name, brand_name, socket
    } = detail;

    return (
        <div className="card mb-3 bg-black" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"><strong>Price:</strong> {price}</p>
                        <p className="card-text"><strong>Stock:</strong> {stock}</p>
                        <p className="card-text"><strong>Rating:</strong> {rating}</p>
                        <p className="card-text"><strong>Description:</strong> {description_text}</p>
                        <p className="card-text"><strong>Category:</strong> {category_name}</p>
                        <p className="card-text"><strong>Subcategory:</strong> {subcategory_name}</p>
                        <p className="card-text"><strong>Brand:</strong> {brand_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDetail;
