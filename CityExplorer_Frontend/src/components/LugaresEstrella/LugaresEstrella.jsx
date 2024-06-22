import React, { useState, useEffect } from 'react'
import { NavBar } from '../NavBar/NavBar'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Footer } from '../Footer';
import CircularProgress from "@mui/material/CircularProgress";
import { useCookies } from 'react-cookie';

export const LugaresEstrella = ({ setLugarSeleccionado, existeUsuario }) => {
    const [lugares, setLugares] = useState([])
    const [lugaresMejorValorados, setLugaresMejorValorados] = useState([])
    const [cargando, setCargando] = useState(false)
    const { nombreCiudad } = useParams()  
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const navigate = useNavigate();


    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        setCargando(true)

        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/lugares`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setLugares(result.data)
                setCargando(false)
            })
            .catch((error) => console.error(error))
    }, [])


    useEffect(() => {
        if (lugares !== null && lugares.length > 0) {
            let indices = [];
            while (indices.length < 6) {
                let aleatorio = Math.floor(Math.random() * lugares.length)
                if (!indices.includes(aleatorio)) indices.push(aleatorio)
            }
            let lugaresSeleccionados = indices.map((indice) => lugares[indice])
            setLugaresMejorValorados(lugaresSeleccionados)
        }
    }, [lugares])

    return (
        <>
            <div className='app'>
                <div className='content' style={{ background: 'linear-gradient(#FF6347,#FF4500)' }}>
                    <NavBar existeUsuario={existeUsuario}/>
                </div>
                <div id='wrapper' style={{ marginBottom: '20vh' }}>
                    <Typography
                        variant='h4'
                        sx={{ justifyContent: 'center', display: 'flex', padding: '2rem', fontWeight: 'bold' }}
                    >
                        Destacados
                    </Typography>
                    <Typography
                        sx={{ justifyContent: 'center', display: 'flex', padding: '1rem', letterSpacing:'.08rem' }}
                    >
                        ¡Aquí te mostramos 6 de nuestros destinos más populares y mejor valorados!
                    </Typography>

                    <Box>
                        <Grid container spacing={3} rowGap={7} sx={{ width: '85vw', margin: 'auto', justifyContent: 'center' }}>
                            {!cargando ? (
                                lugaresMejorValorados.map((lugar) => (
                                    <Grid item xs={12} md={6} lg={4} key={lugar.nombre}>
                                        <div className='cardEstrella'>
                                            <div className='face front'>
                                                <img
                                                    className='imagen'
                                                    src={lugar.imagen}
                                                    alt={lugar.nombre}
                                                />
                                                <p>
                                                    {lugar.nombre} <br />({lugar.ciudad})
                                                </p>
                                            </div>

                                            <div className='face back'>
                                                <h5>
                                                    {lugar.nombre} <br />({lugar.ciudad})
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
