import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
import style from './Form.module.css'
import validation from './Validation.js';
import backgroundImage from '../../../vistas/PS_Background_Medium.png';

const Form = () => {
  
  // const dispatch = useDispatch();
  const navigate = useNavigate();  
  const [error, setError] = useState({});

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    cp: '',
    adress: '',
    phone: '',
    // avatar_img: '',
    repeatPassword: '',
    agreeTerms: false,
  })

  useEffect(() => {
    setError(validation(form));
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
    setError(validation({
      ...form,
      [name]: value
    }));
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
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5" style={{ backgroundImage: `url(${backgroundImage})` }} >
                  <h2 className="text-uppercase text-center mb-5">CREÁ TU CUENTA</h2>

                  <form onSubmit={handleSubmit}>

                    <div className="form-outline mb-4">
                      <input type="text" id="username" className="form-control form-control-lg"
                        value={form.username} onChange={handleChange} />
                        {error.username && <span>{error.username}</span>}
                      <label className="form-label" htmlFor="username">Nombre de Usuario</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="first_name" className="form-control form-control-lg"
                        value={form.first_name} onChange={handleChange} />
                        {error.first_name && <span>{error.first_name}</span>}
                      <label className="form-label" htmlFor="first_name">Nombre</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="last_name" className="form-control form-control-lg"
                        value={form.last_name} onChange={handleChange} />
                        {error.last_name && <span>{error.last_name}</span>}
                      <label className="form-label" htmlFor="last_name">Apellido</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="phone" className="form-control form-control-lg"
                        value={form.phone} onChange={handleChange} />
                        {error.phone && <span>{error.phone}</span>}
                      <label className="form-label" htmlFor="phone">Telefono</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="adress" className="form-control form-control-lg"
                        value={form.adress} onChange={handleChange} />
                        {error.adress && <span>{error.adress}</span>}
                      <label className="form-label" htmlFor="adress">Dirección</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="cp" className="form-control form-control-lg"
                        value={form.cp} onChange={handleChange} />
                        {error.cp && <span>{error.cp}</span>}
                      <label className="form-label" htmlFor="cp">Código Postal</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="email" className="form-control form-control-lg"
                        value={form.email} onChange={handleChange} />
                        {error.email && <span>{error.email}</span>}
                      <label className="form-label" htmlFor="email">E-Mail</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control form-control-lg"
                        value={form.password} onChange={handleChange} />
                        {error.password && <span>{error.password}</span>}
                      <label className="form-label" htmlFor="password">Contraseña</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="repeatPassword" className="form-control form-control-lg"
                        value={form.repeatPassword} onChange={handleChange} />
                        {error.repeatPassword && <span>{error.repeatPassword}</span>}
                      <label className="form-label" htmlFor="repeatPassword">Confirma tu contraseña</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value={form.agreeTerms}
                        onChange={handleChange} id="agreeTerms" />
                      <label className="form-check-label" htmlFor="agreeTerms">
                        Al hacer click en el botón estás aceptando los <a href="#!" className="text-body"><u>Términos y condiciones</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" href="#"
                        className={`btn btn-success btn-block btn-lg ${style["gradient-custom-4"]} text-body`}>CREAR CUENTA</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">¿Tenés una cuenta? <a href="#!"
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