import { useState } from "react"
import { createUser } from "./createUser"

const AdminCreateUser = () => {
    const [create , setCreate] = useState({
        username:'',
        first_name:'',
        last_name:'',
        password:'',
        cp:'',
        email:'',
        phone:'',
        address:'',
        avatar_img:'',
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
        console.log(event)
        let response = await createUser(create)
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
            <button className="mt-4 btn btn-info" type="submit">Subir Producto</button>
            </form>
        </div>
    )
}

export default AdminCreateUser