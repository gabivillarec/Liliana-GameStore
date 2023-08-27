import { useState } from "react"
import { updateUser } from "./updateUser"
import { useNavigate } from "react-router-dom"
import validate from "./validarForm"


const AdminEdit = ({id}) => {
    const navigate = useNavigate()
    const [error, setError] = useState({
        username:'',
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        address:'',
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
        let response = await updateUser(id ,create)
        setCreate({
            username:'',
            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            address:'',
        })
        const toastBootstrapEditUser = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastEditUser"));
        const toastBootstrapErrorEditUser = bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToastErrorEditUser"));

        response === "OK" ? toastBootstrapEditUser.show() : toastBootstrapErrorEditUser.show()
        setTimeout(() => {
            navigate("/adminpage");
        }, 3000);
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
                            <span>{error.input}</span> 
                        </div>
                    )
                })
            }
            <button className="mt-4 btn btn-info" type="submit">Modificar User</button>
            </form>
            <button className="mt-4 btn btn-outline-info w-100" onClick={()=>navigate('/adminpage')}>
                Volver a Admin
            </button>
            <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div
                    id="liveToastEditUser"
                    className="toast text-bg-success"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="toast-header bg-success">
                        <strong className="me-auto">Admin Users</strong>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="toast-body">Se modifico el Usuario de manera exitosa!</div>
                </div>
            </div>
            <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div
                    id="liveToastErrorEditUser"
                    className="toast text-bg-danger"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="toast-header bg-danger">
                        <strong className="me-auto">AdminUser</strong>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="toast-body">Error al modificar el Usuario!</div>
                </div>
            </div>
        </div>
    )
}

export default AdminEdit