const validation = (create) => {
  const errors = {};

  if (!create.name) {
    errors.name = 'El producto debe tener un nombre';
  }

  if (create.price === undefined || create.price <= 0) {
    errors.price = 'Introduce un precio válido en AR$';
  }

  if (!create.stock || create.stock <= 0) {
    errors.stock = 'Debe haber al menos 1 unidad en stock';
  }

  if (!create.rating) {
    errors.rating = 'Introduce una calificación';
  } else if (!Number.isInteger(create.rating) || create.rating < 1 || create.rating > 5) {
    errors.rating = 'La calificación debe ser un valor entre 1 y 5';
  }

  if (!create.description_text) {
    errors.description_text = 'El producto debe tener una descripción';
  } else if (create.description_text.length > 254) {
    errors.description_text = 'La descripción no puede exceder los 255 caracteres';
  }

  if (!create.category) {
    errors.category = 'Elige una categoría';
  }

  if (!create.subcategory) {
    errors.subcategory = 'Introduce una sub-categoría';
  }

  if (!create.brand) {
    errors.brand = 'Introduce la marca del producto';
  }
  
  return errors;
};

export default validation;