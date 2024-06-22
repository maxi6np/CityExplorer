import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Button, Container, Typography, IconButton } from "@mui/material";
import FondoReserva from '../../images/fondoReserva.jpg'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormReserva from './FormReserva';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ReservarGuia = ({ existeUsuario }) => {
  const { nombreCiudad } = useParams()
  const navigate = useNavigate()
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:1000px)');
  const [imagenFondo, setImagenFondo] = useState('')

  useEffect(() => {
    if (!existeUsuario) {
      navigate('/404')
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${existeUsuario}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/ciudad/${nombreCiudad}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setImagenFondo(result.data.lugares[0].imagen)
      })
      .catch((error) => console.error(error));
  }, [])

  return (
    <>
      <div style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>


        {!isSmallScreen && (
          <img
            src={
              imagenFondo
                ? imagenFondo
                : FondoReserva
            }
            alt="Fondo"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              filter: 'blur(3px)',
              zIndex: -1,
            }}
          />
        )}

        <Container
          sx={{
            position: 'relative',
            padding: '3rem',
            height: 'auto',
            width: isSmallScreen ? '100%' : '60%',
            minWidth: '60%',
            maxWidth: isSmallScreen ? '100%' : '60vw',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'column',
            backgroundColor: 'white',
            borderRadius: '10px'
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              zIndex: 1,
              color: 'black'
            }}
            onClick={() => window.history.back()}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography
            sx={{ pb: '2rem' }}
            variant='h5'>
            {nombreCiudad}
          </Typography>

          <FormReserva nombreCiudad={nombreCiudad} existeUsuario={existeUsuario} />

        </Container>
      </div>
    </>
  )
}
