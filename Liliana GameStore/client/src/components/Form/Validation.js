const validation = (form) => {
  const errors = {};
  const disallowedSymbolsRegex = /[/*+$#!%&()=?¿\][{}[\-@_,.:<>]/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const phoneRegex = /^[0-9]{11}$/;
  const cpRegex = /^[0-9]{4}$/;

  if (!form.username) { errors.username = 'Introduce un nombre de usuario'}
  else if (disallowedSymbolsRegex.test(form.username)) { errors.username = 'No se permiten símbolos'
  }
  
  if (!form.first_name) { errors.first_name = 'Introduce un nombre' }
  else if (disallowedSymbolsRegex.test(form.first_name)) { errors.first_name = 'No se permiten símbolos'
  }

  if (!form.last_name) { errors.last_name = 'Introduce un apellido' }
  else if (disallowedSymbolsRegex.test(form.last_name)) { errors.last_name = 'No se permiten símbolos'
  }

  if (!form.email) { errors.email = 'Introduce un correo electrónico' }
  else if (!emailRegex.test(form.email)) { errors.email = 'Correo electrónico inválido'
  }

  if (!form.password) { errors.password = 'Introduce una contraseña' }
  else if (!passwordRegex.test(form.password)) { errors.password = 'La contraseña debe tener al menos 8 caracteres, una letra y un número'
  }

  if (!form.repeatPassword) { errors.repeatPassword = 'Repite la contraseña' }
  else if (form.password !== form.repeatPassword) { errors.repeatPassword = 'Las contraseñas no coinciden'
  }

  if (!form.cp) { errors.cp = 'Introduce un código postal' }
  else if (!cpRegex.test(form.cp)) { errors.cp = 'Código postal inválido'
  }

  if (!form.address) { errors.address = 'Introduce una dirección' }

  if (!form.phone) { errors.phone = 'Introduce un número de teléfono' }
  else if (!phoneRegex.test(form.phone)) { errors.phone = 'Número de teléfono inválido'
  }

  if (!form.agreeTerms) { errors.agreeTerms = 'Debes aceptar los términos y condiciones'
  }

  return errors;
};

export default validation;
