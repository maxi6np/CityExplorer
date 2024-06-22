import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { format } from 'date-fns';
import TaskIcon from '@mui/icons-material/Task';
import CancelIcon from '@mui/icons-material/Cancel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const MisReservas = ({ existeUsuario, reservas }) => {
    const theme = useTheme();
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    const md = useMediaQuery(theme.breakpoints.down('md'));

    const [filtros, setFiltros] = useState({
        ciudad: '',
        estado: ''
    });

    const ordenar = (array) => {
        return array.slice().sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltros(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const ciudadesUnicas = [...new Set(reservas.map((reserva) => reserva.ciudad))];
    const estadosUnicos = [
        { value: '0', label: 'Activa' },
        { value: '1', label: 'Completada' },
        { value: '2', label: 'Anulada' }
    ];

    const filtrarReservas = (reservas) => {
        return reservas.filter((reserva) => {
            let pasaFiltros = true;
            for (const filtro in filtros) {
                if (filtros[filtro] !== '') {
                    if (filtro === 'estado') {
                        const filtroEstado = filtros[filtro];
                        if (filtroEstado === '2') {
                            if (reserva.estado === '0' || reserva.estado === '1') {
                                pasaFiltros = false;
                                break;
                            }
                        } else if (reserva.estado !== filtroEstado) {
                            pasaFiltros = false;
                            break;
                        }
                    } else {
                        if (reserva[filtro] !== filtros[filtro]) {
                            pasaFiltros = false;
                            break;
                        }
                    }
                }
            }
            return pasaFiltros;
        });
    };

    const reservasFiltradas = filtrarReservas(reservas);

    const handleComplete = (idReserva) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${existeUsuario}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/complete/${idReserva}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.message === "Reserva completada") {
                    window.location.reload();
                }
            })
            .catch((error) => console.error(error));
    }

    const handleCancel = (idReserva) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${existeUsuario}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/cancel/${idReserva}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.message === "Reserva anulada") {
                    window.location.reload();
                }
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        reservas.map(reserva => {
            console.log(typeof(reserva.estado))
        })
    }, [])

    return (
        <Grid container>
            <Grid item xs={12} sx={{ marginBottom: '3rem', display: 'flex', gap: '.5rem', flexDirection: (md ? 'column' : 'row') }}>
                {/* filtro ciudad */}
                <Box>
                    <FormControl sx={{ minWidth: '200px' }}>
                        <InputLabel id="demo-simple-select-ciudad-label">Ciudad</InputLabel>
                        <Select
                            labelId="demo-simple-select-ciudad-label"
                            id="demo-simple-select-ciudad"
                            name="ciudad"
                            value={filtros.ciudad}
                            label="Ciudad"
                            onChange={handleChange}
                        >
                            <MenuItem value="">Todas</MenuItem>
                            {ciudadesUnicas.map((ciudad, index) => (
                                <MenuItem key={index} value={ciudad}>{ciudad}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* filtro estado */}
                <Box>
                    <FormControl sx={{ minWidth: '200px' }}>
                        <InputLabel id="demo-simple-select-estado-label">Estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-estado-label"
                            id="demo-simple-select-estado"
                            name="estado"
                            value={filtros.estado}
                            label="Estado"
                            onChange={handleChange}
                        >
                            <MenuItem value="">Todos</MenuItem>
                            {estadosUnicos.map((estado, index) => (
                                <MenuItem key={index} value={estado.value}>{estado.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Grid>

            {reservasFiltradas.length > 0 ? (
                ordenar(reservasFiltradas).map((reserva, index) => {
                    const formattedDate = format(new Date(reserva.fecha), 'dd-MM-yyyy');
                    return (
                        <Grid item key={index} xs={12} md={6}
                            sx={{
                                p: '2rem',
                                borderRadius: '7px',
                                my: '2rem'
                            }
                            }>
                            <Typography sx={{ pt: '1rem', fontWeight: 'bold', textAlign: 'center' }}>{reserva.ciudad}</Typography>
                            <Typography>Precio: {reserva.importe} €</Typography>
                            <Typography>Personas: {reserva.personas}</Typography>
                            <Typography>Guía: {reserva.guia}</Typography>
                            <Typography>
                                Estado:
                                {reserva.estado === '0' ? (
                                    <span style={{ color: 'orange' }}> Activa</span>
                                ) : (
                                    reserva.estado === '1' ? (
                                        <span style={{ color: '#03af03' }}> Completada</span>
                                    ) : (
                                        <span style={{ color: 'red' }}> Anulada</span>
                                    )
                                )}
                            </Typography>
                            <Typography>Reserva para el día: {formattedDate}</Typography>

                            {reserva.estado === '0' && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '1rem',
                                        justifyContent: 'space-evenly',
                                        marginTop: '2rem',
                                        flexDirection: (lg ? 'column' : 'row')
                                    }}
                                >
                                    <Button
                                        title='Anular reserva'
                                        onClick={() => handleCancel(reserva.id_reserva)}
                                        sx={{
                                            gap: '.5rem',
                                            display: 'flex',
                                            alignItems: 'end',
                                            p: '1rem',
                                            color: 'red',
                                            '&:hover': {
                                                backgroundColor: 'red',
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <CancelIcon /> Anular reserva
                                    </Button>
                                    <Button
                                        title='Marcar como completado'
                                        onClick={() => handleComplete(reserva.id_reserva)}
                                        sx={{
                                            gap: '.5rem',
                                            display: 'flex',
                                            alignItems: 'end',
                                            p: '1rem',
                                            color: '#03af03',
                                            '&:hover': {
                                                backgroundColor: '#03af03',
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <TaskIcon /> Marcar como completado
                                    </Button>
                                </Box>
                            )}
                        </Grid>
                    )
                })
            ) : (
                <Grid item xs={12}>
                    No se encontraron reservas
                </Grid>
            )}
        </Grid>
    )
}
