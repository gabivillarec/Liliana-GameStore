import { useState } from "react"
import { updateUser } from "./updateUser"
import { useNavigate } from "react-router-dom"

const AdminEdit = ({id}) => {
    const navigate = useNavigate()
    const [create , setCreate] = useState({
        username:'',
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        address:'',
        admin:''
    })
    let inputs = Object.keys(create)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreate({
            ...create,
            [name]: value
        });
    };

    const handlerSubmit = async(event) => {
        event.preventDefault()
        let response = await updateUser(id ,create)
        alert(`Producto con Id: ${id} modificado con exito`)
        navigate('/adminpage')
    }


    return(
        <div className="p-4 container bg-dark">
            <form className="row needs-validation" novalidate onSubmit={handlerSubmit}>
            {
                inputs.map((input , index) => {
                    return(
                        <div className="col-md-4" key={index}>
                            <label for="validationCustom01"  name={input} className="form-label">{input}</label>
                            <input type='text'  className="form-control" id="validationCustom01" value={create[input]} name={input} onChange={handleChange}  />
                        </div>
                    )
                })
            }
            <button className="mt-4 btn btn-info" type="submit">Modificar User</button>
            </form>
        </div>
    )
}

export default AdminEdit