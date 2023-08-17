import { useState } from "react";
import axios from "axios";
import createProduct from "../funcionesAuxiliares/createProduct";

const AdminForm = () => {
    const [create, setCreate] = useState({
        name: "",
        price: undefined,
        images: [], // Usar un array para almacenar las URLs de las imágenes
        stock: undefined,
        rating: undefined,
        description_text: "",
        category: "",
        subcategory: "",
        brand: "",
        socket: [],
    });

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
    
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
            const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastError"));
            response === "OK" ? toastBootstrap.show() : toastBootstrapError.show();
        } catch (err) {
            console.log(err);
        }
    };

console.log(create)
    return (
        <div className="p-4 container bg-dark">
            <form className="row needs-validation" noValidate onSubmit={handleSubmit}>
                {inputs.map((input, index) => {
                    if (input !== "images" && input !== "socket") {
                        return (
                            <div className="col-md-4" key={index}>
                                <label htmlFor={input} className="form-label">
                                    {input}
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
                    } else {
                        return null;
                    }
                })}
                <div className="col-md-4">
                    <label htmlFor="socket" className="form-label">
                        Socket
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="socket"
                        value={create.socket.join(",")}
                        name="socket"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">
                        Subir Imágenes
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="validationCustom01"
                        name="images"
                        multiple // Habilitar la selección múltiple
                        onChange={handleFile}
                    />
                </div>
                <button className="mt-4 btn btn-info" type="submit">
                    Subir Producto
                </button>
            </form>
            <div className="toast-container position-fixed top-0 end-50 p-3 m-2">
                <div
                    id="liveToast"
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
