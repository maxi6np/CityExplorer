import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography, Grid, Avatar, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { MisReservas } from './MisReservas';
import { MisResenas } from './MisResenas';
import { CambiarContrasena } from './CambiarContrasena';
import { CambiarFotoPerfil } from './CambiarFotoPerfil';
import { useNavigate } from 'react-router-dom';
import LogoCityExplorer from '../../images/logo-city-explorer.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Perfil({ existeUsuario, setEditando, editando }) {
    const [value, setValue] = useState(Number(localStorage.getItem('selectedTab')) || 0);
    const [cookies, setCookie, removeCookie] = useCookies(["session"]);
    const usuario = useState(cookies.user ? cookies.user.user : '');
    const navigate = useNavigate();
    const [reservas, setReservas] = useState([]);
    const [resenas, setResenas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const theme = useTheme();
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    const md = useMediaQuery(theme.breakpoints.down('md'));


    const handleChange = (event, newValue) => {
        setValue(newValue);
        localStorage.setItem('selectedTab', newValue);
    };

    useEffect(() => {
        if (!existeUsuario) {
            navigate('/404');
            return;
        }
        setCargando(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${existeUsuario}`);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/usuarios/${usuario[0].id_usuario}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // localStorage.setItem('imagen', result.imagen);
                setResenas(result.resenas);
                setReservas(result.reservas);
                setCargando(false);
            })
            .catch((error) => console.error(error));
    }, [existeUsuario]);

    const ordenar = (array) => {
        return array.slice().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    };

    return (
        <>
            <Box sx={{
                display: 'flex', gap: '.3rem', p: '2rem', paddingLeft: '5rem', alignItems: 'center',
                textDecoration: 'none', color: 'black'
            }}
                component={Link}
                to="/"
            >
                <Box sx={{ width: '20px ', height: '20px', display: 'flex' }}>
                    <img src={LogoCityExplorer} alt='Logo City Explorer' title='Logo City Explorer' style={{ width: '100% ', height: '100%' }} />
                </Box>
                <Typography
                    onClick={() => { localStorage.removeItem('activeButton') }}
                    variant="h6"
                    noWrap
                    sx={{ fontWeight: 600 }}
                >
                    City Explorer
                </Typography>
            </Box>
            <Grid container sx={{ mb: '10rem', mt: '2rem', }}>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: (md ? 'center' : 'end'), 
                        pr:(md ? '0': '2rem')
                    }}>
                    <Avatar
                        alt={usuario[0].nombre}
                        sx={{ width: '150px', height: '150px' }}
                        src={
                            localStorage.getItem('imagen') != null
                                ? "https://" + import.meta.env.VITE_APP_PETICION_IP + "/" + localStorage.getItem('imagen')
                                : ''
                        }
                    />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        pl: (md ? '0' : '2rem'),
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: (md ? 'center' : 'none'),
                        mt: (md ? '3rem' : '0')
                    }}>
                    <Typography variant='h4'>{usuario[0].nombre} {usuario[0].apellidos}</Typography>
                    <Typography color='textSecondary'>{usuario[0].email}</Typography>
                </Grid>
            </Grid>
            <Box sx={{ width: '90%', m: 'auto' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        textColor="inherit"
                        sx={{
                            '& .MuiTabs-indicator': { backgroundColor: 'orange' },
                            '& .MuiTab-root': { color: 'orange' },
                            '& .Mui-selected': { color: 'orange' }
                        }}
                    >
                        <Tab label="Mis reservas" {...a11yProps(0)} />
                        <Tab label="Mis reseñas" {...a11yProps(1)} />
                        <Tab label="Cambiar contraseña" {...a11yProps(2)} />
                        <Tab label="Cambiar foto de perfil" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {cargando ? (
                        <CircularProgress />
                    ) : (
                        <MisReservas existeUsuario={existeUsuario} reservas={reservas} />
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {cargando ? (
                        <CircularProgress />
                    ) : (
                        <MisResenas resenas={resenas} setEditando={setEditando} editando={editando} />
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <CambiarContrasena existeUsuario={existeUsuario} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <CambiarFotoPerfil existeUsuario={existeUsuario} />
                </CustomTabPanel>
            </Box>
        </>
    );
}
