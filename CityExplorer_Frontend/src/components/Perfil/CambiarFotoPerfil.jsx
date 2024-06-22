import React, { useDebugValue, useEffect, useState } from 'react';
import { Box, Paper, Button, Typography} from '@mui/material';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';


export const CambiarFotoPerfil = ({existeUsuario}) => {
    const [cookies, setCookie, removeCookie] = useCookies(["session"]);
    const [fotoConfirmada, setFotoConfirmada] = useState(false)
    const usuario = useState(cookies.user ? cookies.user.user : '');
    // 
    const [nuevaImagenPerfil, setNuevaImagenPerfil] = useState()
    //
    const [errorFotoPerfil, setErrorFotoPerfil] = useState('')


    const cambiarFotoPerfil = (e) => {
        e.preventDefault()

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${existeUsuario}`);

        const formData = new FormData();
        formData.append("email", usuario[0].email);
        nuevaImagenPerfil != undefined ? formData.append("imagen", nuevaImagenPerfil) : formData.append('imagen', '');


        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
            redirect: "follow"
        };

        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/update-profileImage/${usuario[0].id_usuario}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.message == 'Imagen guardada') {
                    setFotoConfirmada(true)
                    localStorage.setItem('imagen', result[0])
                    window.location.reload()
                } else {
                    setErrorFotoPerfil('Imagen no válida')
                }
            })
            .catch((error) => console.error(error))
    }


    return (
        <Box sx={{ 
            width: '100%',
            marginTop: '5rem',
            display:'flex',
            justifyContent:'center',
            textAlign:'center'
        }}>
            <form className='row g-3 needs-validation'>

                <Typography variant='h5'>Nueva foto de perfil</Typography>
                <input
                    style={{
                        paddingTop: '3rem',
                        margin:'2rem 0 2rem 0'
                    }}
                    type="file"
                    onChange={(e) => {
                        setNuevaImagenPerfil(e.target.files[0])
                    }}
                    className={`form-control ${errorFotoPerfil ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">
                    {errorFotoPerfil}
                </div>

                <Button
                    disabled={fotoConfirmada ? true : false}
                    sx={{
                        mt: '3rem',
                        p: '.5rem 2rem .5rem 2rem',
                        color: 'white',
                        border: '1px solid #FF6347',
                        background: 'linear-gradient(#FF6347,#FF4500)',
                        '&:hover': {
                            background: 'linear-gradient(#FF1347,#FF1100)'
                        }
                    }}
                    onClick={cambiarFotoPerfil}>
                    {
                        fotoConfirmada
                            ? <DoneIcon />
                            : "Enviar"
                    }
                </Button>
            </form>
        </Box>
    )
}
