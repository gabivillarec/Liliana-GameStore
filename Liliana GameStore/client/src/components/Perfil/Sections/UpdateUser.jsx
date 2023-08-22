import { useState } from "react"
import { updateUser } from "../../AdminPage/AdminUserEdit/AdminUserComponentes/updateUser"
import { useNavigate } from "react-router-dom"



const UpdateUser = ({id, setActualizar ,actualizar }) => {
    const navigate = useNavigate()
    const [error, setError] = useState({
        username:'',
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        address:'',
        admin:''
    });
    const [create , setCreate] = useState({
        username:'',
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        address:'',
    })
    let inputs = Object.keys(create)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreate({
            ...create,
            [name]: value.trim()
        });
        validate({...inputs, [name]: value})
        setError(validate({
            ...inputs,
            [name]: value.trim()
        }))
    };

    const handlerSubmit = async(event) => {
        event.preventDefault()
        await updateUser(id ,create)
        alert(`Usuario modificado con exito`)
        setCreate({
            username:'',
            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            address:'',
        })
        setActualizar(!actualizar)
    }
    const label = (input)=>{
        if (input === "username") return 'Usuario'
        if (input === "first_name") return 'Nombre'
        if (input === "last_name") return 'Apellido'
        if (input === "email") return 'Email'
        if (input === "phone") return 'Telefono'
        if (input === "address") return 'Direccion'
    }

    return(
        <div className="p-4 container bg-dark">
            <form className="row needs-validation" novalidate onSubmit={handlerSubmit}>
            {
                inputs.map((input , index) => {
                    return(
                        <div className="col-md-4" key={index}>
                            <label for="validationCustom01"  name={input} className="form-label">{label(input)}</label>
                            <input type='text'  className="form-control" id="validationCustom01" value={create[input]} name={input} onChange={handleChange}  />
                            <span>{error.input}</span> 
                        </div>
                    )
                })
            }
            <button className="mt-4 btn btn-info" type="submit">Modificar Perfil</button>
            </form>
        </div>
    )
}

export default UpdateUser