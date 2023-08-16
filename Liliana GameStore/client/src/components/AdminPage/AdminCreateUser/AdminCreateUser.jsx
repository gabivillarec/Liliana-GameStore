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
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToastUser'))
        const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToastErrorUser'))
        let response = await createUser(create)
        response === "OK" ? toastBootstrap.show() : toastBootstrapError.show()
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
            <button className="mt-4 btn btn-info" type="submit">Crear Usuario</button>
            </form>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToastUser" className="toast text-bg-success" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header bg-success">
                        <strong className="me-auto">Admin Users</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Se creo el usuario de manera exitosa!
                    </div>
                </div>
            </div>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToastErrorUser" className="toast text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header bg-danger">
                        <strong className="me-auto">Admin Users</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Error al crear el usuario!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateUser