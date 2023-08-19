const validate = (inputs) => {
    let error = {};
    
    Object.keys(inputs).forEach(input => {
        if (inputs[input].length >= 20) {
            error[input] = 'Too long';
        }
    });
    
    return error;
};

export default validate;

export const verificarErrors = (errors) =>{
    for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
            if (errors[key] !== '') {
                return false;
            }
        }
    }
    return true
}