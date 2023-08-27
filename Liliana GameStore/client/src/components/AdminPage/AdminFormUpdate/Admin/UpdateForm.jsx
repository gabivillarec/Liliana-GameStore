import { useState } from 'react';
import axios from "axios";
import { updateproducto } from "./updateproducto";
import { useNavigate } from "react-router-dom";

const translations = {
    name: 'Nombre',
    brand: 'Marca',
    category: 'Categoría',
    subcategory: 'Sub-Categoría',
    price: 'Precio',
    stock: 'Stock Disponible',
    rating: 'Rating',
    description_text: 'Descripción',
    socket: 'Socket',
    images: 'Imágenes',
};

const UpdateForm = ({ id, detail }) => {
    const navigate = useNavigate();

    const [create, setCreate] = useState({
        name: detail.name,
        brand: detail.brand_name,
        category: detail.category_name,
        subcategory: detail.subcategory_name,
        price: detail.price,
        stock: detail.stock,
        rating: detail.rating,
        description_text: detail.description_text,
        socket: [],
        images: [], // Usar un array para almacenar las URLs de las imágenes
    });

    let inputs = Object.keys(create);

    const preset_key = "uploads";
    const cloud_name = "depihylqc";
    const [files, setFiles] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreate({
            ...create,
            [name]: value,
        });
    };

    const handleSocketChange = (event) => {
        const { value } = event.target;
        setCreate({
            ...create,
            socket: value.split(",").map(item => item.trim()),
        });
    };

    const handleFile = (event) => {
        setFiles([...files, ...event.target.files]);
    };

    const handlerSubmit = async (event) => {
        event.preventDefault();

        let updatedCreate = { ...create };

        if (files.length > 0) {
            const formDataArray = files.map((file) => {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", preset_key);
                return formData;
            });

            try {
                const uploadResponses = await Promise.all(
                    formDataArray.map((formData) =>
                        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
                    )
                );

                const imageUrls = uploadResponses.map((response) => response.data.url);
                updatedCreate.images = imageUrls;
            } catch (err) {
                console.log(err);
            }
        }

        let response = await updateproducto(id, updatedCreate);
        const toastBootstrapUpdate = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastUpdate"));
        const toastBootstrapErrorUpdate = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastErrorUpdate"));

        response === "OK" ? toastBootstrapUpdate.show() : toastBootstrapErrorUpdate.show()
        setTimeout(() => {
            navigate("/adminpage");
        }, 3000);
        
    };

    return (
        <div className="p-4 container bg-dark">
            <form className="row needs-validation" noValidate onSubmit={handlerSubmit}>
                {inputs.map((input, index) => {
                    if (input !== "images" && input !== "socket") {
                        return (
                            <div className="col-md-4" key={index}>
                                <label htmlFor={input} className="form-label">
                                    {translations[input]}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={input}
                                    value={create[input]}
                                    name={input}
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    } else if (input === "socket") {
                        return (
                            <div className="col-md-4" key={index}>
                                <label htmlFor="socket" className="form-label">
                                    Socket
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="socket"
                                    value={create.socket.join(",")}
                                    name="socket"
                                    onChange={handleSocketChange}
                                />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">
                        Subir Imágenes
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="validationCustom01"
                        name="images"
                        multiple
                        onChange={handleFile}
                    />
                </div>
                <button className="mt-4 btn btn-info" type="submit">
                    Actualizar Producto
                </button>    
            </form>
            <button className="mt-4 btn btn-outline-info w-100" onClick={()=>navigate('/adminpage')}>
                Volver a Admin
            </button>
            <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div
                    id="liveToastUpdate"
                    className="toast text-bg-success"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="toast-header bg-success">
                        <strong className="me-auto">Admin Products</strong>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="toast-body">Se modifico el producto de manera exitosa!</div>
                </div>
            </div>
            <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div
                    id="liveToastErrorUpdate"
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
                    <div className="toast-body">Error al modificar el producto!</div>
                </div>
            </div>
        </div>
    );
};

export default UpdateForm;