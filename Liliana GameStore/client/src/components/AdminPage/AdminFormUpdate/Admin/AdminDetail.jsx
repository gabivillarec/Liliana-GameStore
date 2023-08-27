const AdminDetail = ({ detail, handleImageDelete }) => {
  const {
    id,
    name,
    price,
    images,
    stock,
    rating,
    description_text,
    category_name,
    subcategory_name,
    brand_name,
    sockets
  } = detail;

  const joinSockets = (sockets) => {
    return sockets?.map((socketObj) => socketObj.name).join(' - ');
  };

  return (
    <div className="card mb-3 bg-black">
      <div className="row g-0">
        <div className="col-md-4">
          {images?.map((imageUrl, index) => (
            <div key={index} className="image-container p-2">
              <img
                src={imageUrl}
                className="img-fluid rounded-start"
                alt={`Image ${index + 1}`}
                style={{ maxWidth: '300px' }}
              />
              <button
                className="btn btn-outline-danger position-absolute mt-2"
                onClick={() => handleImageDelete(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="col-md-8">
            <h5 className="card-title">{name}</h5>
          <div className="card-body">
            <p className="card-text"><strong>Categoría: </strong>{category_name}</p>
            <p className="card-text"><strong>Sub-Categoría: </strong>{subcategory_name}</p>
            <p className="card-text"><strong>Precio: </strong>${price}</p>
            <p className="card-text"><strong>Stock Disponible: </strong>{stock} unidades</p>
            <p className="card-text"><strong>Marca: </strong>{brand_name}</p>
            <p className="card-text"><strong>Rating: </strong>{rating}</p>
            <p className="card-text"><strong>Sockets: </strong>{joinSockets(sockets)}</p>
            <p className="card-text"><strong>Descripción: </strong>{description_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetail;