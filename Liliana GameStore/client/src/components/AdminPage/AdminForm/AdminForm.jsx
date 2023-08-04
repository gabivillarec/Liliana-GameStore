import { useState } from "react"


const AdminForm = () => {
    const [create , setCreate] = useState({
        name:"",
        price:'',
        image:"",
        stock:'',
        rating:'',
        description:"",
        category:'',
        subcategory:"",
        brand:"",
        socket:''
    })
    let inputs = Object.keys(create)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreate({
            ...create,
            [name]: value
        });
    };


    return(
        <div className="container bg-dark">
            <form className="row g-3 needs-validation" novalidate>
            {
                inputs.map((input , index) => {
                    return(
                        <div className="col-md-4" key={index}>
                        <label for="validationCustom01"  name={input} className="form-label">{input}</label>
                        <input type='text'  className="form-control" id="validationCustom01" value={create[input]} name={input} onChange={handleChange}  required/>
                    </div>
                    )
                })
            }
            </form>
        </div>
    )
}

export default AdminForm