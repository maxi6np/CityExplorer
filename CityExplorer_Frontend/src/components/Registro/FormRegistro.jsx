import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormRegistro() {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    //
    const [errorEmail, setErrorEmail] = useState('');
    const [errorpassword, setErrorpassword] = useState('');
    const [errorNombre, setErrorNombre] = useState('');
    const [errorApellidos, setErrorApellidos] = useState('');
    const [errorpassword2, setErrorpassword2] = useState('');
    //
    const navigate = useNavigate();
    const [aceptarTerminos, setAceptarTerminos] = useState(false);
    //
    let emailRegex = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/);
    let nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s']+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = JSON.stringify({
            email: email,
            password: password,
            nombre: nombre,
            apellidos: apellidos
        })
        
        setErrorNombre(!nombre ? 'Introduzca un nombre' : '');
        setErrorApellidos(!apellidos ? 'Introduzca unos apellidos' : '');
        setErrorEmail(!email ? 'Introduzca un email' : '');
        setErrorpassword(!password ? 'Introduzca una contraseña' : '');

        if (password != password2) {
            setErrorpassword2('Las contraseñas no coinciden')

        } else if (!emailRegex.test(email)) {
            setErrorEmail('El formato del email no es válido')

        } else if (password.length < 8) {
            setErrorpassword('La contraseña deber tener 8 carácteres o más')

        } else if (!nameRegex.test(nombre)) {
            setErrorNombre('El nombre no puede contener carácteres especiales')

        }else if(!nameRegex.test(apellidos)){
            setErrorApellidos('Los apellidos no pueden contener carácteres especiales')

        } else {
            fetch('https://' + import.meta.env.VITE_APP_PETICION_IP + '/register', { method: 'post', body: body, headers: { 'Accept': 'application/json', 'Content-Type': 'application/json',} })
                .then(response => response.json())
                .then(data => {
                    console.log(data)

                    if (data.message === 'Usuario registrado correctamente') {
                        navigate("/login");

                    }else if (data.message == 'Este usuario ya existe') {
                        setErrorEmail('Este email ya está en uso')

                    } else if(data.message == 'La validación ha fallado'){
                        setErrorNombre('Algo ha ido mal. Vuelva a intentarlo')

                    } else if(data.message == 'Error al procesar la solicitud'){
                        console.log(data.message)
                    }
                })
        }
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />

            <form style={{ width: '90%', margin: 'auto' }} className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="col-md-6 col-xs-12">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        maxLength='45'
                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value)
                            setErrorNombre('')
                        }}
                        className={`form-control ${errorNombre ? 'is-invalid' : ''}`}
                        required />
                    <div className="invalid-feedback">
                        {errorNombre}
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <label className="form-label">Apellidos</label>
                    <input
                        type="text"
                        maxLength='100'
                        value={apellidos}
                        onChange={(e) => {
                            setApellidos(e.target.value)
                            setErrorApellidos('')
                        }}
                        className={`form-control ${errorApellidos ? 'is-invalid' : ''}`}
                        required />
                    <div className="invalid-feedback">
                        {errorApellidos}
                    </div>
                </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        maxLength='45'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setErrorEmail('')
                        }}
                        className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                        required />
                    <div className="invalid-feedback">
                        {errorEmail}
                    </div>
                </div>
                <div className="col-12">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        maxLength='100'
                        className={`form-control ${errorpassword ? 'is-invalid' : ''}`}
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                            setErrorpassword('')
                        }}
                        required />
                    <div className="invalid-feedback">
                        {errorpassword}
                    </div>
                </div>
                <div className="col-12">
                    <label className="form-label">Repetir Contraseña</label>
                    <input
                        type="password"
                        maxLength='100'
                        value={password2}
                        onChange={(e) => {
                            setpassword2(e.target.value)
                            setErrorpassword2('')
                        }}
                        className={`form-control ${errorpassword2 ? 'is-invalid' : ''}`}
                        required />
                    <div className="invalid-feedback">
                        {errorpassword2}
                    </div>
                </div>
                <FormControlLabel control={<Checkbox onClick={() => setAceptarTerminos(!aceptarTerminos)} />} label="Aceptar términos y condiciones de privacidad" />
                <div className="col-12 mt-4">
                    <button className="btn col-12" style={{background: 'linear-gradient(#FF6347,#FF4500)', color:'white'}} type="submit" disabled={!aceptarTerminos}>Registrarse</button>
                </div>
            </form >
        </>
    );
}

export default FormRegistro;
