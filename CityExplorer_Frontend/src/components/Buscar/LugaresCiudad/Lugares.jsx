import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { NavBar } from '../../NavBar/NavBar';
import { Typography, Box, Grid, Button } from '@mui/material';
import CircularProgress from "@mui/material/CircularProgress";
import { Footer } from '../../Footer';
import { useCookies } from 'react-cookie';

export const Lugares = ({ userName, setLugarSeleccionado, existeUsuario }) => {
  const { nombreCiudad } = useParams()
  const [cargando, setCargando] = useState(false)
  const [lugaresCiudad, setLugaresCiudad] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const navigate = useNavigate();

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${cookies.session}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    setCargando(true)

    fetch('https://' + import.meta.env.VITE_APP_PETICION_IP + '/api/lugares', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const coincidencias = result.data.filter((ciudad) => ciudad.ciudad == nombreCiudad)
        setLugaresCiudad(coincidencias)
        setCargando(false)
      })
      .catch((error) => console.error(error));
  }, [])

  return (
    <>
      <div className='app'>
        <div className='content' style={{ background: 'linear-gradient(#FF6347,#FF4500)' }}>
          <NavBar userName={userName} existeUsuario={existeUsuario} />
        </div>
        <div id='wrapper' style={{ marginBottom: '20vh' }}>

          {existeUsuario &&
            <Box item xs={2}
              sx={{
                textAlign: 'end'
              }}
            >
              <Button
                component={Link}
                to={`/${nombreCiudad}/reservarGuia`}
                sx={{
                  m: '1rem 2rem -0 1rem ',
                  p: '.7rem',
                  color: '#FF6347',
                  border: '1px solid #FF6347',
                  '&:hover': {
                    background: 'linear-gradient(#FF6347,#FF4500)',
                    color: 'white',
                  }
                }}
              >
                Reservar guía
              </Button>
            </Box>
          }

          <Typography
            variant='h4'
            sx={{ justifyContent: 'center', display: 'flex', py: '2rem', fontWeight: 'bold' }}
          >
            {nombreCiudad}
          </Typography>
          <Box>
            <Grid container spacing={3} rowGap={7} sx={{ width: '85vw', margin: 'auto', justifyContent: 'center' }}>
              {!cargando ? (
                lugaresCiudad.length > 0 ? (
                  lugaresCiudad.map((lugar) => (
                    <Grid item xs={12} md={6} lg={4} key={lugar.id_lugar}>
                      <div className='cardEstrella'>
                        <div className='face front'>
                          <img
                            className='imagen'
                            src={lugar.imagen}
                            alt={lugar.nombre}
                          />
                          <p>
                            {lugar.nombre}
                          </p>
                        </div>

                        <div className='face back'>
                          <h5>
                            {lugar.nombre} <br />
                          </h5>
                          <p>
                            Apertura: {lugar.hora_apertura}h
                          </p>
                          <p>
                            Cierre: {lugar.hora_cierre}h
                          </p>
                          <p>
                            Precio: {lugar.precio}€
                          </p>

                          <Link
                            className='link'
                            onClick={(e) => {
                              e.preventDefault()
                              setLugarSeleccionado(lugar)
                              removeCookie('lugar')
                              setCookie('lugar', lugar)
                              navigate(`/buscar/${nombreCiudad}/lugares/${lugar.id_lugar}`);
                            }}
                          >
                            Ver más
                          </Link>

                        </div>
                      </div>
                    </Grid>
                  ))
                ) : (
                  <Box
                    sx={{
                      minHeight: '100vh'
                    }}
                  >
                    Lo siento, no se encontraron resultados
                  </Box>
                )
              ) : (
                <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CircularProgress />
                </div>
              )}
            </Grid>
          </Box>

        </div>
        <Footer />
      </div>
    </>
  )
}
