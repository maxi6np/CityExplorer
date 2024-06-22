import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormLogin({ setExisteUsuario }) {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorpassword, setErrorpassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(["session"]);
    const [rememberUser, setRememberUser] = useState(false)
    const [mostrarpassword, setMostrarpassword] = useState(false);
    const navigate = useNavigate();
    let emailRegex = new RegExp(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/);


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setErrorEmail('')
    };

    const handlepasswordChange = (e) => {
        setpassword(e.target.value)
        setErrorpassword('')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = JSON.stringify({
            email: email,
            password: password,
            rememberUser: rememberUser
        });


        setErrorEmail(!email ? 'Introduzca un email' : '');
        setErrorpassword(!password ? 'Introduzca una contraseña' : '');
        if (!emailRegex.test(email)) {
            setErrorEmail('El formato del email no es válido')

        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Accept', 'application/json');

        const raw = JSON.stringify({
            email: email,
            password: password
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch('https://' + import.meta.env.VITE_APP_PETICION_IP + '/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.message === 'correcto') {
                    (data.rememberUser)
                        ? localStorage.setItem('session', data.token)
                        : sessionStorage.setItem('session', data.token)

                    localStorage.setItem('userName', data.username)
                    setCookie('user', { user: data.user })
                    localStorage.setItem('imagen', data.user.imagen);
                    setExisteUsuario(localStorage.getItem('session') || sessionStorage.getItem('session'))
                    navigate("/");
                } else if (data.message === 'Contraseña incorrecta') {
                    setErrorpassword('La contraseña es incorrecta')

                } else if (data.message === 'Usuario no existe') {
                    setErrorEmail('El email no existe')
                }
            })
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />

            <form style={{ width: '70%', margin: 'auto' }} className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="col-12">
                    <label htmlFor="validationCustom03" className="form-label">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                        required />
                    <div className="invalid-feedback">
                        {errorEmail}
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="validationCustom05" className="form-label">Contraseña</label>
                    <input
                        type={mostrarpassword ? 'text' : 'password'}
                        className={`form-control ${errorpassword ? 'is-invalid' : ''}`}
                        value={password}
                        onChange={handlepasswordChange}
                        required
                    />
                    <div className="invalid-feedback">
                        {errorpassword || 'Campo inválido'}
                    </div>
                </div>
                <FormControlLabel control={<Checkbox onClick={() => { setRememberUser(!rememberUser) }} />} label="Recordarme" />
                <div className="col-12 mt-4">
                    <button className="btn col-12" style={{ background: 'linear-gradient(#FF6347,#FF4500)', color: 'white' }} type="submit">Iniciar sesión</button>
                </div>
            </form>
        </>
    );
}

export default FormLogin;