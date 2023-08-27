import { useState, useEffect } from 'react';
import axios from "axios";
import createProduct from "../funcionesAuxiliares/createProduct";
import style from './AdminForm.module.css'
import validation from './Validation.js';


const AdminForm = ({ setSelectedComponent}) => {

    const [error, setError] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [mouseHover, setMouseHover] = useState(false);
    const [create, setCreate] = useState({
        name: "",
        price: "",
        images: [], // Usar un array para almacenar las URLs de las imágenes
        stock: 1,
        rating: 0,
        description_text: "",
        category: "",
        subcategory: "",
        brand: "",
        socket: [],
    });

    const handleIncrement = () => {
        setCreate(prevState => ({
          ...prevState,
          stock: prevState.stock + 1,
        }));
    };
    
    const handleDecrement = () => {
        if (create.stock > 1) {
          setCreate(prevState => ({
            ...prevState,
            stock: prevState.stock - 1,
        }))}
    };

    const fullStars = 0;
    const totalStars = 5;
    
    const fullStarsElements = [];
    for (let i = 0; i < fullStars; i++) {
        fullStarsElements.push(<i key={i} className="bi bi-star-fill text-info"></i>);
    }
    
    const emptyStarsElements = [];
    const emptyStarsCount = totalStars - fullStars;
    for (let i = 0; i < emptyStarsCount; i++) {
        emptyStarsElements.push(<i key={i + fullStars} className="bi bi-star text-info"></i>);
    }

    const handleChangeRating = (rating) => {
      setCreate({
        ...create,
        rating: rating,
      });
    };
    
    const handlePriceChange = (event) => {
      const inputValue = event.target.value;
      const numericValue = inputValue.replace(/[^0-9]/g, '');
      setCreate({
        ...create,
        price: numericValue,
      });
    };

    useEffect(() => {
        setError(validation(create));
    }, [create]);
    
    const handleFieldFocus = (name) => {
        setTouchedFields({
          ...touchedFields,
          [name]: true,
        });
    };

    let inputs = Object.keys(create);

    const preset_key = "uploads";
    const cloud_name = "depihylqc";
    const [files, setFiles] = useState([]); // Usar un array para almacenar los archivos de imágenes

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "socket") {
            setCreate({
                ...create,
                [name]: value.split(",").map((item) => item.trim()),
            });
            setError({
                ...error,
                [name]: validation({
                  ...create,
                  [name]: value,
                })[name],
              });
        } else {
            setCreate({
                ...create,
                [name]: value,
            });
        }
    };

    const handleFile = (event) => {
        setFiles([...event.target.files]); // Guardar todos los archivos de imágenes seleccionados
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.keys(error).length > 0) {
            return alert("Asegúrate de completar todos los campos");
        }
        try {
            const formDataArray = files.map((file) => {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", preset_key);
                return formData;
            });
    
            const uploadResponses = await Promise.all(
                formDataArray.map((formData) =>
                    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
                )
            );
    
            const imageUrls = uploadResponses.map((response) => response.data.url);
    
            // Crear una copia actualizada de la data con las URLs de las imágenes
            const updatedCreate = {
                ...create,
                images: imageUrls,
            };
    
            // Luego de cargar las imágenes, enviar la data actualizada al backend
            let response = await createProduct(updatedCreate);
            setSelectedComponent('AdminGetProduct') // Limpiar los archivos de imágenes seleccionados
    
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
            const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastError"));
    
            if (response === "OK") {
                toastBootstrap.show();
                // Limpiar los inputs después de una creación exitosa
                setCreate({
                    name: "",
                    price: "",
                    images: [],
                    stock: "",
                    rating: "",
                    description_text: "",
                    category: "",
                    subcategory: "",
                    brand: "",
                    socket: [],
                });
                setFiles([]);
            } else {
                toastBootstrapError.show();
            }
        } catch (err) {
            setSelectedComponent('AdminGetProduct')
            console.log(err);
        }
    };

    return (
        <div className="p-4 container bg-dark">
            <form className="row needs-validation" noValidate onSubmit={handleSubmit}>
          <div className="col-md-4">
            <div className="form-floating md-4 mb-4">
              <input type="text" id="name" name="name" className={`form-control form-control-lg ${touchedFields.name && error.name ? 'is-invalid' : ''}`}
                value={create.name} onChange={handleChange} onBlur={() => handleFieldFocus('name')} />
              <label className={`${create.name && 'form-label-floating'}`} htmlFor="first_name">Nombre del Producto</label>
              <div style={{ height: '25px' }}></div>{touchedFields.name && error.name && <div className={`invalid-feedback ${style["error-message"]}`}>{error.name}</div>}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="text" id="price" name="price" inputMode="numeric" pattern="[0-9]*" className={`form-control form-control-lg ${touchedFields.price && error.price ? 'is-invalid' : ''}`}
                value={create.price} onChange={handlePriceChange} onBlur={() => handleFieldFocus('price')} />
              <label className={`${create.price && 'form-label-floating'}`} htmlFor="price">Precio</label>
              <div style={{ height: '25px' }}></div>{touchedFields.price && error.price && <div className={`invalid-feedback ${style["error-message"]}`}>{error.price}</div>}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="text" id="socket" name="socket" className={`form-control form-control-lg ${touchedFields.socket && error.socket ? 'is-invalid' : ''}`}
                value={create.socket.join(",")} onChange={handleChange} onBlur={() => handleFieldFocus('socket')} />
              <label className={`${create.socket && 'form-label-floating'}`} htmlFor="socket">Socket</label>
              <div style={{ height: '25px' }}></div>{touchedFields.socket && error.socket && <div className={`invalid-feedback ${style["error-message"]}`}>{error.socket}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating md-4 mb-4">
              <select id="category" name="category" className={`form-select dropdown-select-lg ${touchedFields.category && error.category ? 'is-invalid' : ''}`}
                value={create.category} onChange={handleChange} onBlur={() => handleFieldFocus('category')}>
                  <option style={{ color: 'black' }} value="" ></option>
                  <option style={{ color: 'black' }} value="Accessories" >Accesorios</option>
                  <option style={{ color: 'black' }} value="Hardware" >Hardware</option>
                  <option style={{ color: 'black' }} value="VideoGames" >Videojuegos</option>
                </select>
              <label className={`${create.category && 'form-label-floating'}`} htmlFor="category">Categoría</label>
                <div style={{ height: '25px' }}></div>{touchedFields.category && error.category && (<div className={`invalid-feedback ${style["error-message"]}`}>{error.category}</div>)}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="text" id="brand" name="brand" className={`form-control form-control-lg ${touchedFields.brand && error.brand ? 'is-invalid' : ''}`}
                value={create.brand} onChange={handleChange} onBlur={() => handleFieldFocus('brand')} />
              <label className={`${create.brand && 'form-label-floating'}`} htmlFor="brand">Marca</label>
              <div style={{ height: '25px' }}></div>{touchedFields.brand && error.brand && <div className={`invalid-feedback ${style["error-message"]}`}>{error.brand}</div>}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="file" id="validationCustom01" name="images" onChange={handleFile} multiple className="form-control" />
              <label htmlFor="validationCustom01" className="form-label">Subir Imágenes</label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating md-4 mb-4">
              <input type="text" id="subcategory" name="subcategory" className={`form-control form-control-lg ${touchedFields.subcategory && error.subcategory ? 'is-invalid' : ''}`}
                value={create.subcategory} onChange={handleChange} onBlur={() => handleFieldFocus('subcategory')} />
              <label className={`${create.subcategory && 'form-label-floating'}`} htmlFor="subcategory">Sub-Categoría</label>
              <div style={{ height: '25px' }}></div>{touchedFields.subcategory && error.subcategory && <div className={`invalid-feedback ${style["error-message"]}`}>{error.subcategory}</div>}
            </div>
            <div className="form-floating md-4 mb-4">    
              <div className="input-group mb-4" style={{ height: "58px"  }} >
                <button className="btn btn-white border border-secondary px-4" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={handleDecrement} >
                  <i className="bi bi-dash"></i>
                </button>
                <input type="text" id="stock" name="stock" className={`form-control form-control-lg text-center ${touchedFields.stock && error.stock ? 'is-invalid' : ''}`}
                  value={create.stock} onChange={handleChange} onBlur={() => handleFieldFocus('stock')}/>
                <button className="btn btn-white border border-secondary px-4" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={handleIncrement} >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
                <label className={`fw-light ${create.stock && 'form-label-floating'}`} htmlFor="stock" style={{ position: "absolute", top: 6, left: 73, zIndex: 1, padding: '0 5px', color: 'gray', fontSize: '14px' }} >Stock</label>
                <div style={{ height: '1px' }}></div>{touchedFields.stock && error.stock && <div className={`invalid-feedback ${style["error-message"]}`}>{error.stock}</div>}
            </div>
            <div className="form-floating md-4 mb-4 d-flex justify-content-center align-items-center">
                <div className="md-4 mb-4 text-start">
                    {[1, 2, 3, 4, 5].map((indice) => ( <i
                        key={indice}
                        className={`text-info bi ${indice <= create.rating ? 'bi-star-fill' : 'bi-star'}`}
                        style={{ fontSize: '40px' }}
                        onMouseEnter={() => setMouseHover(true)}
                        onMouseLeave={() => setMouseHover(false)}
                        onClick={() => handleChangeRating(indice)}
                        ></i>
                    ))}
                </div>
                <label className={`fw-light ${create.rating && 'form-label-floating'}`} htmlFor="rating" style={{ position: "absolute", top: 6, left: 8, zIndex: 1, padding: '0 5px', color: 'gray', fontSize: '14px' }} >Rating</label>
            </div>
          </div>
          <div>
            <div className="form-floating md-4 mb-4">
              <textarea type="text" id="description_text" name="description_text" maxLength="255" className={`form-control form-control-lg ${touchedFields.description_text && error.description_text ? 'is-invalid' : ''}`}
                value={create.description_text} onChange={handleChange} onBlur={() => handleFieldFocus('description_text')} style={{ resize: "none", height: "114px"  }} />
              <label className={`${create.description_text && 'form-label-floating'}`} htmlFor="description_text">Descripción</label>
              <div style={{ height: '25px' }}><p id="comment-counter" className="form-text text-secondary text-end fw-lighter">{create.description_text.length} / 255 caracteres</p></div>
              {touchedFields.description_text && error.description_text && <div className={`invalid-feedback ${style["error-message-ta"]}`}>{error.description_text}</div>}                
            </div>
          </div>
                <button className="mt-4 btn btn-info" type="submit">
                    Subir Producto
                </button>
            </form>
            <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div
                    id="liveToast"
                    className="toast text-bg-success"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true">
                    <div className="toast-header bg-success">
                        <strong className="me-auto">Admin Products</strong>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="toast-body">Se creó el producto de manera exitosa!</div>
                </div>
            </div>
            <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div
                    id="liveToastError"
                    className="toast text-bg-danger"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="toast-header bg-danger">
                        <strong className="me-auto">Admin Products</strong>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="toast-body">Error al crear el producto!</div>
                </div>
            </div>
        </div>
    );
};

export default AdminForm;