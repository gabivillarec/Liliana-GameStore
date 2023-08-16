import { useState } from "react"
import createProduct from "../funcionesAuxiliares/createProduct"

const AdminForm = () => {
    const [create , setCreate] = useState({
        name:"",
        price:undefined,
        image:"",
        stock:undefined,
        rating:undefined,
        description_text:"",
        category:'',
        subcategory:"",
        brand:"",
        socket:['']
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
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'))
        const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToastError'))
        let response = await createProduct(create)
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
            <button className="mt-4 btn btn-info" type="submit">Subir Producto</button>
            </form>
            <div className="toast-container position-fixed top-0 end-50 p-3 m-2">
                <div id="liveToast" className="toast text-bg-success" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header bg-success">
                        <strong className="me-auto">Admin Products</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Se creo el producto de manera exitosa!
                    </div>
                </div>
            </div>
            <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div id="liveToastError" className="toast text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header bg-danger">
                        <strong className="me-auto">Admin Products</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Error al crear el producto!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminForm