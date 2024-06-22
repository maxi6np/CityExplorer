import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ProfileMenu from './ProfileMenu';
import NavBarResponsive from './NavBarResponsive';
import LogoCityExplorer from '../../images/logo-city-explorer.png'


export const NavBar = ({existeUsuario}) => {
    const [activeButton, setActiveButton] = useState(localStorage.getItem('activeButton'))
    const theme = useTheme();
    const isMobileContent = useMediaQuery(theme.breakpoints.down('md'));
    const isMobileTitle = useMediaQuery(theme.breakpoints.down('lg'));


    const handleActiveButton = (setting) => {
        setActiveButton(setting);
        localStorage.setItem('activeButton', setting);
    };


    return (
        <AppBar position="static"
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                width: '80vw',
                margin: 'auto',
            }}>

            <Container sx={{
                color: 'white'
            }}>
                <Toolbar disableGutters>
                    <Box sx={{
                        display: 'flex', gap: '1rem', padding: '1rem'
                    }}
                        component={Link}
                        to="/"
                    >
                        <Box sx={{ width: '50px ', height: '50px' }}>
                            <img src={LogoCityExplorer} alt='Logo City Explorer' title='Logo City Explorer' style={{ width: '100% ', height: '100%' }} />
                        </Box>
                        {!isMobileTitle && (
                            <Typography
                                onClick={() => { localStorage.removeItem('activeButton') }}
                                variant="h4"
                                noWrap
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 700,
                                    letterSpacing: '.2rem'
                                }}
                            >
                                City Explorer
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.7rem' }}>

                        {isMobileContent ? (
                            <NavBarResponsive existeUsuario={existeUsuario}/>
                        ) : (
                            <>
                                <Typography
                                    onClick={() => { handleActiveButton('Lugares Estrella') }}
                                    sx={{
                                        borderBottom: activeButton === 'Lugares Estrella' ? '2px solid white' : 'none',
                                    }}
                                    key='Lugares Estrella'
                                    className='botonNav'
                                    component={Link}
                                    to="/lugares-estrella"
                                >
                                    Lugares Estrella
                                </Typography>
                                <Typography
                                    onClick={() => { handleActiveButton('Buscar') }}
                                    sx={{
                                        borderBottom: activeButton === 'Buscar' ? '2px solid white' : 'none'
                                    }}
                                    key='Buscar'
                                    className='botonNav'
                                    component={Link}
                                    to="/buscar"
                                >
                                    Buscar
                                </Typography>
                                {!existeUsuario ? (
                                    <div style={{ display: 'flex', gap: '1.3rem' }}>
                                        <Typography
                                            onClick={() => { localStorage.removeItem('activeButton') }}
                                            key='Iniciar sesion'
                                            className='botonNav'
                                            id='inicioSesion'
                                            component={Link}
                                            to="/login"
                                        >Iniciar Sesión
                                        </Typography>

                                        <Typography
                                            onClick={() => { localStorage.removeItem('activeButton') }}
                                            key='Registro'
                                            className='botonNav'
                                            id='registro'
                                            component={Link}
                                            to="/registro"
                                        >Regístrate
                                        </Typography>
                                    </div>

                                ) : (
                                    <div>
                                        <ProfileMenu existeUsuario={existeUsuario}/>
                                    </div>
                                )
                                }
                            </>
                        )}

                    </Box>
                </Toolbar>
            </Container>

        </AppBar >
    )
}
