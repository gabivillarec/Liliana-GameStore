import { useState, useEffect } from 'react';
import { createUser } from "./createUser";
import validation from './Validation.js';
import style from './AdminCreateUser.module.css'

const AdminCreateUser = ({setSelectedComponent}) => {

  const [error, setError] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const [create, setCreate] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    cp: "",
    email: "",
    phone: "",
    address: "",
    avatar_img: "",
    admin: false,
  });

  useEffect(() => {
    setError(validation(create));
  }, [create]);

  const handleFieldFocus = (name) => {
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };

   //Condición para que no se renderice el input avatar_img
   let inputs = Object.keys(create).filter(key => key !== "avatar_img");

   const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;  
    setCreate({
      ...create,
      [name]: value,
    });  
    setError({
      ...error,
      [name]: validation({
        ...create,
        [name]: value,
      })[name],
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(error).length > 0) {
      return alert("Asegúrate de completar todos los campos");
    }
    setError(validation(create));
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      document.getElementById("liveToastUser")
    );
    const toastBootstrapError = bootstrap.Toast.getOrCreateInstance(
      document.getElementById("liveToastErrorUser")
    );

    try {
      let response = await createUser(create);
      if(response === "OK"){
        toastBootstrap.show()
        setSelectedComponent('AdminUsers')
      }else{
        toastBootstrapError.show();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 container bg-dark">
      <form className="row needs-validation" noValidate onSubmit={handlerSubmit} >
          <div className="col-md-4">
            <div className="form-floating md-4 mb-4">
              <input type="text" id="usernameAdm" name="username" className={`form-control form-control-lg ${touchedFields.username && error.username ? 'is-invalid' : ''}`}
                value={create.username} onChange={handleChange} onBlur={() => handleFieldFocus('username')} />
              <label className={`${create.username && 'form-label-floating'}`} htmlFor="first_name">Nombre de Usuario</label>
              <div style={{ height: '25px' }}></div>{touchedFields.username && error.username && <div className={`invalid-feedback ${style["error-message"]}`}>{error.username}</div>}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="email" id="emailAdm" name="email" className={`form-control form-control-lg ${touchedFields.email && error.email ? 'is-invalid' : ''}`}
                value={create.email} onChange={handleChange} onBlur={() => handleFieldFocus('email')} />
              <label className={`${create.email && 'form-label-floating'}`} htmlFor="email">E-Mail</label>
              <div style={{ height: '25px' }}></div>{touchedFields.email && error.email && <div className={`invalid-feedback ${style["error-message"]}`}>{error.email}</div>}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="text" id="addressAdm" name="address" className={`form-control form-control-lg ${touchedFields.address && error.address ? 'is-invalid' : ''}`}
                value={create.address} onChange={handleChange} onBlur={() => handleFieldFocus('address')} />
              <label className={`${create.address && 'form-label-floating'}`} htmlFor="address">Dirección</label>
              <div style={{ height: '25px' }}></div>{touchedFields.address && error.address && <div className={`invalid-feedback ${style["error-message"]}`}>{error.address}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating md-4 mb-4">
              <input type="text" id="first_nameAdm" name="first_name" className={`form-control form-control-lg ${touchedFields.first_name && error.first_name ? 'is-invalid' : ''}`}
                value={create.first_name} onChange={handleChange} onBlur={() => handleFieldFocus('first_name')} />
              <label className={`${create.first_name && 'form-label-floating'}`} htmlFor="first_name">Nombre</label>
              <div style={{ height: '25px' }}></div>{touchedFields.first_name && error.first_name && <div className={`invalid-feedback ${style["error-message"]}`}>{error.first_name}</div>}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="password" id="passwordAdm" name="password" className={`form-control form-control-lg ${touchedFields.password && error.password ? 'is-invalid' : ''}`}
                value={create.password} onChange={handleChange} onBlur={() => handleFieldFocus('password')} />
              <label className={`${create.password && 'form-label-floating'}`} htmlFor="password">Contraseña</label>
              <div style={{ height: '25px' }}></div>{touchedFields.password && error.password && <div className={`invalid-feedback ${style["error-message"]}`}>{error.password}</div>}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="text" id="cpAdm" name="cp" className={`form-control form-control-lg ${touchedFields.cp && error.cp ? 'is-invalid' : ''}`}
                value={create.cp} onChange={handleChange} onBlur={() => handleFieldFocus('cp')} maxLength={4} />
              <label className={`${create.cp && 'form-label-floating'}`} htmlFor="cp">Código Postal</label>
              <div style={{ height: '25px' }}></div>{touchedFields.cp && error.cp && <div className={`invalid-feedback ${style["error-message"]}`}>{error.cp}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-floating md-4 mb-4">
              <input type="text" id="last_nameAdm" name="last_name" className={`form-control form-control-lg ${touchedFields.last_name && error.last_name ? 'is-invalid' : ''}`}
                value={create.last_name} onChange={handleChange} onBlur={() => handleFieldFocus('last_name')} />
              <label className={`${create.last_name && 'form-label-floating'}`} htmlFor="last_name">Apellido</label>
              <div style={{ height: '25px' }}></div>{touchedFields.last_name && error.last_name && <div className={`invalid-feedback ${style["error-message"]}`}>{error.last_name}</div>}
            </div>
            <div className="form-floating md-4 mb-4">
              <input type="text" id="phoneAdm" name="phone" className={`form-control form-control-lg ${touchedFields.phone && error.phone ? 'is-invalid' : ''}`}
                value={create.phone} onChange={handleChange} onBlur={() => handleFieldFocus('phone')} maxLength={11} />
              <label className={`${create.phone && 'form-label-floating'}`} htmlFor="phone">Teléfono</label>
              <div style={{ height: '40px' }}></div>{touchedFields.phone && error.phone && <div className={`invalid-feedback ${style["error-message"]}`}>{error.phone}</div>}
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <input type="checkbox" id="adminAdm" name="admin" className="form-check-input me-2"
                checked={create.admin} onChange={handleChange} />
              <label className="form-check-label" htmlFor="admin">¿Conceder derechos de ADMIN? 🤔</label>
            </div>
          </div>

        <button className="mt-4 btn btn-info" type="submit">
          Crear Usuario
        </button>
      </form>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToastUser"
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
          <div className="toast-body">
            Se creo el usuario de manera exitosa!
          </div>
        </div>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToastErrorUser"
          className="toast text-bg-danger"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-danger">
            <strong className="me-auto">Admin Users</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">Error al crear el usuario!</div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateUser;