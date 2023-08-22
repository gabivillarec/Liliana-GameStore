const validation = (create) => {
    const errors = {};
    const disallowedSymbolsRegex = /[/*+$#!%&()=?¿\][{}[\-@_,.:<>]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const phoneRegex = /^[0-9]{11}$/;
    const cpRegex = /^[0-9]{4}$/;
    const noNumbersRegex = /^[^\d]+$/;
  
    if (!create.username) { 
      errors.username = 'Introduce un nombre de usuario';
    } else if (disallowedSymbolsRegex.test(create.username)) { 
      errors.username = 'No se permiten símbolos';
    }
  
    if (!create.first_name) { 
      errors.first_name = 'Introduce un nombre';
    } else if (disallowedSymbolsRegex.test(create.first_name) || !noNumbersRegex.test(create.first_name)) { 
      errors.first_name = 'No se permiten números ni símbolos';
    }
  
    if (!create.last_name) { 
      errors.last_name = 'Introduce un apellido';
    } else if (disallowedSymbolsRegex.test(create.last_name) || !noNumbersRegex.test(create.last_name)) { 
      errors.last_name = 'No se permiten números ni símbolos';
    }
  
    if (!create.email) { 
      errors.email = 'Introduce un correo electrónico';
    } else if (!emailRegex.test(create.email)) { 
      errors.email = 'Correo electrónico inválido';
    }
  
    if (!create.password) { 
      errors.password = 'Introduce una contraseña';
    } else if (!passwordRegex.test(create.password)) { 
      errors.password = 'La contraseña debe tener al menos 8 caracteres, una letra y un número';
    }
  
    if (!create.cp) { 
      errors.cp = 'Introduce un código postal';
    } else if (!cpRegex.test(create.cp)) { 
      errors.cp = 'Código postal inválido';
    }
  
    if (!create.address) { 
      errors.address = 'Introduce una dirección';
    }
  
    if (!create.phone) { 
      errors.phone = 'Introduce un número de teléfono';
    } else if (!phoneRegex.test(create.phone)) { 
      errors.phone = 'Número de teléfono inválido';
    }
  
    return errors;
  };
  
  export default validation;