import { useState } from "react"
import { updateproducto } from "./updateproducto"
import { useNavigate } from "react-router-dom"

const UpdateForm = ({id}) => {
    const navigate = useNavigate()
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
        let response = await updateproducto(id ,create)
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
            <button className="mt-4 btn btn-info" type="submit">Subir Producto</button>
            </form>
        </div>
    )
}

export default UpdateForm