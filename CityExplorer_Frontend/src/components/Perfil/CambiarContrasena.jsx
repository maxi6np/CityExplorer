import React, { useDebugValue, useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';



export const CambiarContrasena = ({ existeUsuario }) => {
  const [contrasenaConfirmada, setContrasenaConfirmada] = useState(false)
  // 
  const [current_password, setCurrentPassword] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  //
  const [errorCurrentPassword, setErrorCurrentPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPassword2, setErrorPassword2] = useState('')

  const cambiarContrasena = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${existeUsuario}`);
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      "current_password": current_password,
      "password": password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    setErrorCurrentPassword(!current_password ? 'Introduzca la contraseña actual' : '');
    setErrorPassword(!password ? 'Introduzca una contraseña nueva' : '');

    if (password != password2) {
      setErrorPassword2('Las contraseñas no coinciden')
      return
    } else if (password.length < 8) {
      setErrorPassword('La contraseña deber tener 8 carácteres o más')
      return
    } else if (password == current_password) {
      setErrorPassword('La contrasena nueva debe ser diferente a la actual')
      return
    }


    fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/update-password`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.message == 'La contraseña actual es incorrecta') {
          setErrorCurrentPassword('La contraseña actual es incorrecta')
        } else if (result.message == 'Contraseña actualizada') {
          setContrasenaConfirmada(true)
          setPassword('')
          setCurrentPassword('')
          setPassword2('')
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box sx={{
      width: '40%',
      margin:'5rem auto',
      textAlign:'center',
    }}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Cambiar Contraseña
      </Typography>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />

      <form style={{ width: '90%', margin: 'auto', marginTop: '3rem' }} className='row g-3 needs-validation'>
        <label>Contraseña actual</label>
        <input
          type="password"
          value={current_password}
          onChange={(e) => {
            setCurrentPassword(e.target.value)
            setErrorCurrentPassword('')

          }}
          className={`form-control ${errorCurrentPassword ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">
          {errorCurrentPassword}
        </div>
        <label>Contraseña nueva</label>
        <input
          type="password"
          minLength={8}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setErrorPassword('')
          }}
          className={`form-control ${errorPassword ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">
          {errorPassword}
        </div>
        <label>Repetir nueva contraseña</label>
        <input
          type="password"
          value={password2}
          onChange={(e) => {
            setPassword2(e.target.value)
            setErrorPassword2('')
          }}
          className={`form-control ${errorPassword2 ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">
          {errorPassword2}
        </div>
        <Button
          style={{ marginTop: '3rem' }}
          disabled={contrasenaConfirmada ? true : false}
          sx={{
            display: 'flex',
            color: 'white',
            border: '1px solid #FF6347',
            background: 'linear-gradient(#FF6347,#FF4500)',
            '&:hover': {
              background: 'linear-gradient(#FF1347,#FF1100)'
            }
          }}
          onClick={cambiarContrasena}>{
            contrasenaConfirmada
              ? <Box sx={{color:'white', display:'flex', p:'.3rem' ,gap:'.5rem'}}><Typography>Contraseña actualizada</Typography><DoneIcon /></Box>
              : "Modificar contraseña"
          }
        </Button>
      </form>
    </Box>
  )
}
