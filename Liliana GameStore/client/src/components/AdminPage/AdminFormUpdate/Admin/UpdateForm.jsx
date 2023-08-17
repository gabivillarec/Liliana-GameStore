import { useState } from "react";
import axios from "axios";
import { updateproducto } from "./updateproducto";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ id }) => {
    const navigate = useNavigate();

    const [create, setCreate] = useState({
        name: "",
        price: undefined,
        image: "", // URL de Cloudinary para la imagen
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
    const [file, setFile] = useState(null);

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
        setFile(event.target.files[0]);
    };

    const handlerSubmit = async (event) => {
        event.preventDefault();
    
        let updatedCreate = { ...create }; // Crear una copia del objeto create
    
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", preset_key);
    
            try {
                const res = await axios.post(
                    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
                    formData
                );
    
                updatedCreate.image = res.data.url; // Actualizar la URL de la imagen en la copia
            } catch (err) {
                console.log(err);
            }
        }
    
        // Actualizar el producto (con o sin la imagen)
        let response = await updateproducto(id, updatedCreate);
        alert(`Producto con Id: ${id} modificado con éxito`);
        navigate("/adminpage");
    };

    return (
        <div className="p-4 container bg-dark">
            <form className="row needs-validation" noValidate onSubmit={handlerSubmit}>
                {inputs.map((input, index) => {
                    if (input !== "image" && input !== "socket") {
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
                        Subir Imagen
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="validationCustom01"
                        name="image"
                        onChange={handleFile}
                    />
                </div>
                <button className="mt-4 btn btn-info" type="submit">
                    Actualizar Producto
                </button>
            </form>
        </div>
    );
};

export default UpdateForm;