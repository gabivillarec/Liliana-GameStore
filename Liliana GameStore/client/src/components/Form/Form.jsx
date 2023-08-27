import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import style from './Form.module.css'
import Terms from './Terms';
import validation from './Validation.js';
import backgroundImage from '../../../vistas/PS_Background_Medium.png';
import {URL} from '../../main'

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
    cp: "",
    address: "",
    phone: "",
    avatar_img: "",
    admin: false,
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
    const fieldValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;  
    setForm({
      ...form,
      [fieldName]: fieldValue,
    });  
    setError({
      ...error,
      [fieldName]: validation({
        ...form,
        [fieldName]: fieldValue,
      })[fieldName],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  
    if (Object.keys(error).length > 0) {
      return alert("Asegúrate de completar todos los campos");
    }
    setError(validation(form));
    try {
      const response = await axios.post(`${URL}user`, form);
      navigate('/login', { state: { newUser: response.data } });
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <section className=" bg-image" style={{ backgroundColor: 'rgb(19, 19, 72)' }}>
      <div className="mask d-flex align-items-center h-87">
        <div className="container-fluid h-87">
          <div className="row d-flex justify-content-center align-items-center h-87">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5" style={{ backgroundImage: `url(${backgroundImage})` }}> 
                  <h2 className="text-uppercase text-center text-white mb-5">CREÁ TU CUENTA</h2>

                  <form onSubmit={handleSubmit}>

                    <div className="row">
                    <div className="col-md-6">

                    <div className="form-floating mb-4">
                      <input type="text" id="username" name="username" className={`form-control form-control-lg ${touchedFields.username && error.username ? 'is-invalid' : ''}`}
                        value={form.username} onChange={handleChange} onBlur={() => handleFieldFocus('username')} />
                      <label className={`${form.username && 'form-label-floating'}`} htmlFor="first_name">Nombre de Usuario</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.username && error.username && <div className={`invalid-feedback ${style["error-message"]}`}>{error.username}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="text" id="first_name" name="first_name" className={`form-control form-control-lg ${touchedFields.first_name && error.first_name ? 'is-invalid' : ''}`}
                        value={form.first_name} onChange={handleChange} onBlur={() => handleFieldFocus('first_name')} />
                      <label className={`${form.first_name && 'form-label-floating'}`} htmlFor="first_name">Nombre</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.first_name && error.first_name && <div className={`invalid-feedback ${style["error-message"]}`}>{error.first_name}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="text" id="last_name" name="last_name" className={`form-control form-control-lg ${touchedFields.last_name && error.last_name ? 'is-invalid' : ''}`}
                        value={form.last_name} onChange={handleChange} onBlur={() => handleFieldFocus('last_name')} />
                      <label className={`${form.last_name && 'form-label-floating'}`} htmlFor="last_name">Apellido</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.last_name && error.last_name && <div className={`invalid-feedback ${style["error-message"]}`}>{error.last_name}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="text" id="phone" name="phone" className={`form-control form-control-lg ${touchedFields.phone && error.phone ? 'is-invalid' : ''}`}
                        value={form.phone} onChange={handleChange} onBlur={() => handleFieldFocus('phone')} maxLength={11} />
                      <label className={`${form.phone && 'form-label-floating'}`} htmlFor="phone">Teléfono</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.phone && error.phone && <div className={`invalid-feedback ${style["error-message"]}`}>{error.phone}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="text" id="address" name="address" className={`form-control form-control-lg ${touchedFields.address && error.address ? 'is-invalid' : ''}`}
                        value={form.address} onChange={handleChange} onBlur={() => handleFieldFocus('address')} />
                      <label className={`${form.address && 'form-label-floating'}`} htmlFor="address">Dirección</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.address && error.address && <div className={`invalid-feedback ${style["error-message"]}`}>{error.address}</div>}
                    </div>

                    </div>
                    <div className="col-md-6">

                    <div className="form-floating mb-4">
                      <input type="text" id="cp" name="cp" className={`form-control form-control-lg ${touchedFields.cp && error.cp ? 'is-invalid' : ''}`}
                        value={form.cp} onChange={handleChange} onBlur={() => handleFieldFocus('cp')} maxLength={4} />
                      <label className={`${form.cp && 'form-label-floating'}`} htmlFor="cp">Código Postal</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.cp && error.cp && <div className={`invalid-feedback ${style["error-message"]}`}>{error.cp}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="email" id="email" name="email" className={`form-control form-control-lg ${touchedFields.email && error.email ? 'is-invalid' : ''}`}
                        value={form.email} onChange={handleChange} onBlur={() => handleFieldFocus('email')} />
                      <label className={`${form.email && 'form-label-floating'}`} htmlFor="email">E-Mail</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.email && error.email && <div className={`invalid-feedback ${style["error-message"]}`}>{error.email}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="password" id="password" name="password" className={`form-control form-control-lg ${touchedFields.password && error.password ? 'is-invalid' : ''}`}
                        value={form.password} onChange={handleChange} onBlur={() => handleFieldFocus('password')} />
                      <label className={`${form.password && 'form-label-floating'}`} htmlFor="password">Contraseña</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.password && error.password && <div className={`invalid-feedback ${style["error-message"]}`}>{error.password}</div>}
                    </div>

                    <div className="form-floating mb-4">
                      <input type="password" id="repeatPassword" name="repeatPassword" className={`form-control form-control-lg ${touchedFields.repeatPassword && error.repeatPassword ? 'is-invalid' : ''}`}
                        value={form.repeatPassword} onChange={handleChange} onBlur={() => handleFieldFocus('repeatPassword')} />
                      <label className={`${form.repeatPassword && 'form-label-floating'}`} htmlFor="repeatPassword">Confirma tu contraseña</label>
                      <div style={{ height: '25px' }}></div>{touchedFields.repeatPassword && error.repeatPassword && <div className={`invalid-feedback ${style["error-message"]}`}>{error.repeatPassword}</div>}
                    </div>

                    <div className="form-check align-items-center">
                      <input className="form-check-input" type="checkbox" id="agreeTerms" name="agreeTerms"
                        checked={form.agreeTerms} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="agreeTerms">
                        Al hacer click en el botón estás aceptando los <a type="button" className="text-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><u>Términos y condiciones</u></a>
                      </label>
                    </div>

                    <Terms setAgreeTerms={(value) => setForm({ ...form, agreeTerms: value })} />

                    </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" href="#"
                        className={`btn btn-success btn-block btn-lg ${style["gradient-custom-4"]} text-body`}>CREAR CUENTA</button>
                    </div>

                    <p className="text-center text-white mt-5 mb-0">¿Tenés una cuenta? <a href="/login"
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