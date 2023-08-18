import { useState } from "react";
import axios from "axios";
import { updateproducto } from "./updateproducto";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ id }) => {
    const navigate = useNavigate();

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
        alert(`Producto con Id: ${id} modificado con éxito`);
        navigate("/adminpage");
    };

    return (
        <div className="p-4 container bg-dark">
            <form className="row needs-validation" noValidate onSubmit={handlerSubmit}>
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
        </div>
    );
};

export default UpdateForm;