import { useState , useEffect} from "react";
import { updateUser } from "../../AdminPage/AdminUserEdit/AdminUserComponentes/updateUser";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const UpdateUser = ({id, setActualizar ,actualizar }) => {
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
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        cp:"",
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
        await updateUser(id, create);
        setCreate({
            first_name:'',
            last_name:'',
            phone:'',
            address:'',
            cp:"",
            avatar_img: "",
        })
        setActualizar(!actualizar)
        alert("Usuario modificado con éxito");
    }
    const label = (input)=>{
        if (input === "username") return 'Usuario'
        if (input === "first_name") return 'Nombre'
        if (input === "last_name") return 'Apellido'
        if (input === "email") return 'Email'
        if (input === "phone") return 'Telefono'
        if (input === "address") return 'Direccion'
        if (input === "cp") return 'Codigo Postal'
    }

    return(

        <div className="p-4 container bg-dark">
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

//Codigo Franco sin Cloudinary

// import { useState } from "react"
// import { updateUser } from "../../AdminPage/AdminUserEdit/AdminUserComponentes/updateUser"
// import { useNavigate } from "react-router-dom"



// const UpdateUser = ({id, setActualizar}) => {
//     const navigate = useNavigate()
//     const [error, setError] = useState({
//         username:'',
//         first_name:'',
//         last_name:'',
//         email:'',
//         phone:'',
//         address:'',
//         admin:''
//     });
//     const [create , setCreate] = useState({
//         username:'',
//         first_name:'',
//         last_name:'',
//         email:'',
//         phone:'',
//         address:'',
//     })
//     let inputs = Object.keys(create)

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setCreate({
//             ...create,
//             [name]: value.trim()
//         });
//         validate({...inputs, [name]: value})
//         setError(validate({
//             ...inputs,
//             [name]: value.trim()
//         }))
//     };

//     const handlerSubmit = async(event) => {
//         event.preventDefault()
//         await updateUser(id ,create)
//         alert(`Usuario modificado con exito`)
//         setCreate({
//             username:'',
//             first_name:'',
//             last_name:'',
//             email:'',
//             phone:'',
//             address:'',
//         })
//         setActualizar(true)
//     }
//     const label = (input)=>{
//         if (input === "username") return 'Usuario'
//         if (input === "first_name") return 'Nombre'
//         if (input === "last_name") return 'Apellido'
//         if (input === "email") return 'Email'
//         if (input === "phone") return 'Telefono'
//         if (input === "address") return 'Direccion'
//     }

//     return(
//         <div className="p-4 container bg-dark">
//             <form className="row needs-validation" novalidate onSubmit={handlerSubmit}>
//             {
//                 inputs.map((input , index) => {
//                     return(
//                         <div className="col-md-4" key={index}>
//                             <label for="validationCustom01"  name={input} className="form-label">{label(input)}</label>
//                             <input type='text'  className="form-control" id="validationCustom01" value={create[input]} name={input} onChange={handleChange}  />
//                             <span>{error.input}</span> 
//                         </div>
//                     )
//                 })
//             }
//             <button className="mt-4 btn btn-info" type="submit">Modificar Perfil</button>
//             </form>
//         </div>
//     )
// }

// export default UpdateUser
