

const InputsForm = ({name , value  }) => {


    return(
        <div className="col-md-4">
            <label for="validationCustom01"  name={name} className="form-label">{name}</label>
            <input type='text'  className="form-control" id="validationCustom01" value={value} name={name} required/>
        </div>
    )
}

export default InputsForm;