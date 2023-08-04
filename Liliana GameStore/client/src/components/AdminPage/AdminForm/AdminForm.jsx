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
        console.log(create)
    };

    const handlerSubmit = async(event) => {
        event.preventDefault()
        let response = await createProduct(create)
    }


    return(
        <div className="container bg-dark">
            <form className="row g-3 needs-validation" novalidate onSubmit={handlerSubmit}>
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
            <button type="submit">Subir Producto</button>
            </form>
        </div>
    )
}

export default AdminForm