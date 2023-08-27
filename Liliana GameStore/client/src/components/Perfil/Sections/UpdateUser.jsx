import { useState , useEffect} from "react";
import { updateUser } from "../../AdminPage/AdminUserEdit/AdminUserComponentes/updateUser";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../../Toast/Toast";
import ErrorToast from "../../Toast/ErrorToast";


const UpdateUser = ({id, setActualizar ,actualizar, initialData }) => {
    let title = 'Perfil'
    const [message , setMessage] = useState('')


    useEffect(()=>{
    },[actualizar])

    const [error, setError] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        admin: "",
    });
    const [create, setCreate] = useState({
        first_name: initialData.first_name,
        last_name: initialData.last_name,
        phone: initialData.phone,
        address: initialData.address,
        cp: initialData.cp,
        avatar_img: "", // Add avatar_img field for Cloudinary URL
    });
    let inputs = Object.keys(create).filter(input => input !== "avatar_img");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreate({
            ...create,
            [name]: value.trim(),
        });
        setError({
            ...error,
            [name]: "", // Clear error message when a change is made
        });
    };

    const handleFile = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "uploads");
            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/depihylqc/image/upload`,
                    formData
                );
                if (response.status === 200) {
                    const imageUrl = response.data.secure_url;
                    setCreate({
                        ...create,
                        avatar_img: imageUrl,
                    });
                } else {
                    console.error("Error uploading image to Cloudinary");
                }
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
    };

    const handlerSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateUser(id, create);
            setCreate({
                first_name: create.first_name,
                last_name: create.last_name,
                phone: create.phone,
                address: create.address,
                cp: create.cp,
                avatar_img: "",
            })
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"));
                setMessage(`Perfil modificado con exito.`)
                toastBootstrap.show();
        } catch (error) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastError"));
            setMessage(`${error.message}`)
            toastBootstrap.show();
        }
        setActualizar(!actualizar)
    }
    const label = (input)=>{
        if (input === "username") return 'Usuario'
        if (input === "first_name") return 'Nombre'
        if (input === "last_name") return 'Apellido'
        if (input === "email") return 'E-Mail'
        if (input === "phone") return 'Teléfono'
        if (input === "address") return 'Dirección'
        if (input === "cp") return 'Código Postal'
    }

    return(

        <div className="p-4 container bg-dark">
            <div>
                <ErrorToast title={title} message={message}/>
                <Toast title={title} message={message}/>
            </div>
            <form className="row needs-validation" noValidate onSubmit={handlerSubmit}>
                {inputs.map((input, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <label htmlFor={input} className="form-label">
                                    {label(input)}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={input}
                                    value={create[input]}
                                    name={input}
                                    onChange={handleChange}
                                />
                                <span>{error[input]}</span>
                            </div>
                        );
                })}
                <div className="col-md-4" >
                                <label htmlFor="avatar_img" className="form-label">
                                    Avatar Image
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="avatar_img"
                                    name="avatar_img"
                                    onChange={handleFile}
                                />
                            </div>
                <button className="mt-4 btn btn-info" type="submit">
                    Modificar Perfil
                </button>
                
            </form>
        </div>
    );
};

export default UpdateUser;

