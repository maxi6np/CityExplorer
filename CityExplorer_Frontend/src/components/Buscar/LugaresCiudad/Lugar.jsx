import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NavBar } from '../../NavBar/NavBar';
import { Footer } from '../../Footer';
import { Box, Typography, Grid, Button } from '@mui/material';
import { format } from 'date-fns';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { useCookies } from 'react-cookie';
import Opinion from './Opinion';
import CircularProgress from "@mui/material/CircularProgress";

export const Lugar = ({ userName, lugarSeleccionado, editando, existeUsuario }) => {
  const { idLugar } = useParams();
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [lugar, setLugar] = useState({});
  const [valoracionMedia, setValoracionMedia] = useState(0);
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(false)

  const handleOpenReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  useEffect(() => {
    setCargando(true)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Accept', "application/json")

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch('https://' + import.meta.env.VITE_APP_PETICION_IP + `/api/lugares/${idLugar}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLugar(result.data);
        setCargando(false)
      })
      .catch((error) => console.error(error));
  }, [idLugar]);

  useEffect(() => {
    if (lugar.resenas && lugar.resenas.length > 0) {
      const totalValoracion = lugar.resenas.reduce((acc, resena) => acc + resena.valoracion, 0);
      const averageValoracion = totalValoracion / lugar.resenas.length;
      setValoracionMedia(parseFloat(averageValoracion.toFixed(1)));
    } else {
      setValoracionMedia(0);
    }
  }, [lugar]);

  return (
    <>
      {cargando ? (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <Box className='app' sx={{fontSize:'.8rem'}}>
          <div className='content' style={{ background: 'linear-gradient(#FF6347,#FF4500)' }}>
            <NavBar userName={userName} existeUsuario={existeUsuario} />
          </div>

          <Typography
            variant='h4'
            sx={{ justifyContent: 'center', display: 'flex', p: '2rem', fontWeight: 'bold', my: '2rem' }}
          >
            {lugar.nombre}
          </Typography>

          <Grid container>
            <Grid item xs={12} md={6} sx={{ border: 'px solid red' }}>
              <Box sx={{ p: '2rem' }}>
                <img
                  style={{ width: '100%', maxHeight: '100vh' }}
                  src={lugar.imagen} alt={lugar.nombre} />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', flexDirection: 'column' }}>
                <Rating name="read-only" sx={{ fontSize: '3rem' }} value={valoracionMedia} readOnly precision={0.1} />
                <Typography>
                  Valoración media: {valoracionMedia}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ border: 'px solid blue', p: '2rem' }}>
              <Typography sx={{ mb: '2rem', textAlign: 'justify'}}>
                {lugar.descripcion}
              </Typography>
              <Box sx={{ textAlign: 'center'}}>
                <Typography>
                  Hora de apertura: <b>{lugar.hora_apertura}h</b>
                </Typography>
                <Typography>
                  Hora de cierre: <b>{lugar.hora_cierre}h</b>
                </Typography>
                <Typography>
                  Precio: <b>{lugar.precio} €</b>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ my: '5rem' }}>
            <Typography sx={{ textAlign: 'center', my: '5rem', color: 'orange', fontStyle: 'italic' }} variant='h5'>
              Opiniones
            </Typography>
            <Grid container>
              {lugar.resenas && lugar.resenas.length > 0 ? (
                lugar.resenas.map((resena, index) => {
                  const formattedDate = format(new Date(resena.fecha), 'dd-MM-yyyy');
                  return (
                    <React.Fragment key={resena.usuario.nombre}>
                      <Grid container item xs={12} md={5.8} sx={{ p: '2rem', mb: '3rem' }}>
                        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar
                              alt={resena.usuario.nombre}
                              sx={{
                                width: '100px', height: '100px', mb: '1rem'
                              }}
                              src={
                                "https://" +
                                import.meta.env.VITE_APP_PETICION_IP +
                                "/" +
                                resena.usuario.imagen
                              }
                            />
                          </Box>
                          <Typography>{resena.usuario.nombre} {resena.usuario.apellidos}</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ alignItems: 'center' }}>
                          <Typography>{resena.descripcion}</Typography>
                          <Rating name="read-only" value={resena.valoracion} readOnly />
                          <Typography>{formattedDate}</Typography>
                        </Grid>
                      </Grid>
                      {index !== lugar.resenas.length - 1 && <Divider orientation="vertical" variant="middle" flexItem />}
                    </React.Fragment>
                  )
                })
              ) : (
                <Typography sx={{ textAlign: 'center', width: '100%' }}>
                  No se encontraron reseñas
                </Typography>
              )}
            </Grid>
          </Box>

          {existeUsuario &&
            <Button
              onClick={handleOpenReviewModal}
              sx={{
                display: 'flex',
                width: '10rem',
                m: 'auto',
                mb: '4rem',
                p: '1rem',
                color: '#FF6347',
                border: '1px solid #FF6347',
                '&:hover': {
                  background: 'linear-gradient(#FF6347,#FF4500)',
                  color: 'white',
                }
              }}
            >
              Deja tu reseña
            </Button>}

          <Opinion editando={editando} lugarSeleccionado={lugarSeleccionado} isOpen={isReviewModalOpen} onClose={handleCloseReviewModal} />

          <Footer />
        </Box>
      )
      }
    </>
  )
}

export default Lugar;
