import React from 'react';

const AdminDetail = ({ detail }) => {
  const {
    name,
    price,
    images,
    stock,
    rating,
    description_text,
    category_name,
    subcategory_name,
    brand_name,
    sockets, // Cambio de "socket" a "sockets"
  } = detail;

  // Función para unir los nombres de los sockets con comas
  const joinSockets = (sockets) => {
    return sockets?.map((socketObj) => socketObj.name).join(' - ');
  };

  return (
    <div className="card mb-3 bg-black">
      <div className="row g-0">
        <div className="col-md-4">
          {images?.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className="img-fluid rounded-start"
              alt={`Image ${index + 1}`}
              style={{ maxWidth: '300px' }}
            />
          ))}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <strong>Price:</strong> {price}
            </p>
            <p className="card-text">
              <strong>Stock:</strong> {stock}
            </p>
            <p className="card-text">
              <strong>Rating:</strong> {rating}
            </p>
            <p className="card-text">
              <strong>Description:</strong> {description_text}
            </p>
            <p className="card-text">
              <strong>Category:</strong> {category_name}
            </p>
            <p className="card-text">
              <strong>Subcategory:</strong> {subcategory_name}
            </p>
            <p className="card-text">
              <strong>Brand:</strong> {brand_name}
            </p>
            {/* Renderizar los nombres de los sockets separados por comas */}
            <p className="card-text">
              <strong>Sockets:</strong> {joinSockets(sockets)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetail;




  