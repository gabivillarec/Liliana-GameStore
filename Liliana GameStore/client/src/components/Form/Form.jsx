import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import style from './Form.module.css'
import validation from './Validation.js';
import backgroundImage from '../../../vistas/PS_Background_Medium.png';

const Form = () => {
  
  const navigate = useNavigate();  
  const [error, setError] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    cp: 0,
    address: "",
    phone: "",
    avatar_img: "",
    repeatPassword: "",
    agreeTerms: false,
  })

  useEffect(() => {
    setError(validation(form));
  }, [form]);

  const handleFieldFocus = (fieldName) => {
    setTouchedFields({
      ...touchedFields,
      [fieldName]: true,
    });
  };

  const handleChange = (event) => {
    const fieldName = event.target.name;
    setForm({
      ...form,
      [fieldName]: event.target.value
    });
    setError({
      ...error,
      [fieldName]: validation({
        ...form,
        [fieldName]: event.target.value
      })[fieldName],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validation(form));
    if (Object.keys(error).length > 0) {
      return alert("Asegurate de completar todos los campos");
    }
    dispatch(createUser(form));
    alert("Usuario creado");
    navigate("/home");
  };

  return (
    <section className="vh-100 bg-image" style={{ backgroundColor: 'rgb(19, 19, 72)' }}>
      <div className="mask d-flex align-items-center h-100">
        <div className="container-fluid h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5" style={{ backgroundImage: `url(${backgroundImage})` }} >
                  <h2 className="text-uppercase text-center text-white mb-5">CREÁ TU CUENTA</h2>

                  <form onSubmit={handleSubmit}>

                    <div className="row">
                    <div className="col-md-6">

                    <div className="form-floating mb-4">
                      <input type="text" id="username" name="username" className={`form-control form-control-lg ${touchedFields.username && error.username ? 'is-invalid' : ''}`}
                        value={form.username} onChange={handleChange} onBlur={() => handleFieldFocus('username')} />
                      <label className={`${form.username && 'form-label-floating'}`} htmlFor="first_name">Nombre de Usuario</label>
                      {touchedFields.username && error.username && <div className="invalid-feedback">{error.username}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="text" id="first_name" name="first_name" className={`form-control form-control-lg ${touchedFields.first_name && error.first_name ? 'is-invalid' : ''}`}
                        value={form.first_name} onChange={handleChange} onBlur={() => handleFieldFocus('first_name')} />
                      <label className={`${form.first_name && 'form-label-floating'}`} htmlFor="first_name">Nombre</label>
                      {touchedFields.first_name && error.first_name && <div className="invalid-feedback">{error.first_name}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="text" id="last_name" name="last_name" className={`form-control form-control-lg ${touchedFields.last_name && error.last_name ? 'is-invalid' : ''}`}
                        value={form.last_name} onChange={handleChange} onBlur={() => handleFieldFocus('last_name')} />
                      <label className={`${form.last_name && 'form-label-floating'}`} htmlFor="last_name">Apellido</label>
                      {touchedFields.last_name && error.last_name && <div className="invalid-feedback">{error.last_name}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="text" id="phone" name="phone" className={`form-control form-control-lg ${touchedFields.phone && error.phone ? 'is-invalid' : ''}`}
                        value={form.phone} onChange={handleChange} onBlur={() => handleFieldFocus('phone')} maxLength={11} />
                      <label className={`${form.phone && 'form-label-floating'}`} htmlFor="phone">Teléfono</label>
                      {touchedFields.phone && error.phone && <div className="invalid-feedback">{error.phone}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="text" id="address" name="address" className={`form-control form-control-lg ${touchedFields.address && error.address ? 'is-invalid' : ''}`}
                        value={form.address} onChange={handleChange} onBlur={() => handleFieldFocus('address')} />
                      <label className={`${form.address && 'form-label-floating'}`} htmlFor="address">Dirección</label>
                      {touchedFields.address && error.address && <div className="invalid-feedback">{error.address}</div>}
                    </div>

                    </div>
                    <div className="col-md-6">

                    <div className="form-floating mb-4">
                      <input type="text" id="cp" name="cp" className={`form-control form-control-lg ${touchedFields.cp && error.cp ? 'is-invalid' : ''}`}
                        value={form.cp} onChange={handleChange} onBlur={() => handleFieldFocus('cp')} maxLength={4} />
                      <label className={`${form.cp && 'form-label-floating'}`} htmlFor="cp">Código Postal</label>
                      {touchedFields.cp && error.cp && <div className="invalid-feedback">{error.cp}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="email" id="email" name="email" className={`form-control form-control-lg ${touchedFields.email && error.email ? 'is-invalid' : ''}`}
                        value={form.email} onChange={handleChange} onBlur={() => handleFieldFocus('email')} />
                      <label className={`${form.email && 'form-label-floating'}`} htmlFor="email">E-Mail</label>
                      {touchedFields.email && error.email && <div className="invalid-feedback">{error.email}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="password" id="password" name="password" className={`form-control form-control-lg ${touchedFields.password && error.password ? 'is-invalid' : ''}`}
                        value={form.password} onChange={handleChange} onBlur={() => handleFieldFocus('password')} />
                      <label className={`${form.password && 'form-label-floating'}`} htmlFor="password">Contraseña</label>
                      {touchedFields.password && error.password && <div className="invalid-feedback">{error.password}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="password" id="repeatPassword" name="repeatPassword" className={`form-control form-control-lg ${touchedFields.repeatPassword && error.repeatPassword ? 'is-invalid' : ''}`}
                        value={form.repeatPassword} onChange={handleChange} onBlur={() => handleFieldFocus('repeatPassword')} />
                      <label className={`${form.repeatPassword && 'form-label-floating'}`} htmlFor="repeatPassword">Confirma tu contraseña</label>
                      {touchedFields.repeatPassword && error.repeatPassword && <div className="invalid-feedback">{error.repeatPassword}</div>}
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value={form.agreeTerms}
                        onChange={handleChange} id="agreeTerms" />
                      <label className="form-check-label" htmlFor="agreeTerms">
                        Al hacer click en el botón estás aceptando los <a href="#!" className="text-body"><u>Términos y condiciones</u></a>
                      </label>
                    </div>

                    </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" href="#"
                        className={`btn btn-success btn-block btn-lg ${style["gradient-custom-4"]} text-body`}>CREAR CUENTA</button>
                    </div>

                    <p className="text-center text-white mt-5 mb-0">¿Tenés una cuenta? <a href="#!"
                      className="fw-bold text-body"><u>Ingresá aquí</u></a></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;