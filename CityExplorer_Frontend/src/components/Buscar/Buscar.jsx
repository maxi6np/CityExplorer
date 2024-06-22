import React, { useState, useEffect } from 'react'
import { NavBar } from '../NavBar/NavBar'
import MapaBuscar from './MapaBuscar';
import { Footer } from '../Footer';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery'
import { Resultados } from './Resultados';
import { useTheme } from '@mui/material/styles';
import CircularProgress from "@mui/material/CircularProgress";


export const Buscar = ({ userName, existeUsuario }) => {
    const [ciudadesBuscadas, setCiudadesBuscadas] = useState([])
    const [datos, setDatos] = useState([]);
    const theme = useTheme();

    // const isLargeScreen = useMediaQuery('(min-width:748px)')  
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))



    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch('https://' + import.meta.env.VITE_APP_PETICION_IP + '/api/ciudades', requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const ciudades = result.data.map((ciudad) => ciudad)
                setCiudadesBuscadas(ciudades)
                setDatos(ciudades)
            })
            .catch((error) => console.error(error));
    }, [])

    const busquedaCiudad = (string) => {
        const coincidencias = datos.filter((ciudad) =>
            ciudad.nombre.toLowerCase().includes(string.toLowerCase())
        );
        setCiudadesBuscadas(coincidencias);
    };

    return (
        <div className='app'>
            <div className='content' style={{ background: 'linear-gradient(#FF6347,#FF4500)' }}>
                <NavBar userName={userName} existeUsuario={existeUsuario}/>
            </div>

            {/* buscador */}
            <Paper
                component="form"
                sx={{ p: '.6rem 1.2rem', display: 'flex', alignItems: 'center', m: '1rem' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Buscar ciudad, lugar ..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(e) => busquedaCiudad(e.target.value)}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

            {isLargeScreen ? (
                <MapaBuscar ciudadesBuscadas={ciudadesBuscadas} />
            ) : (
                <Resultados ciudadesBuscadas={ciudadesBuscadas} />
            )
            }
            <Footer />
        </div>
    )

}
