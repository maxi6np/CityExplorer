import React, { useState } from 'react';
import { format } from 'date-fns';
import { Box, Typography, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import { BotonesOpinion } from '../Buscar/LugaresCiudad/BotonesOpinion';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const MisResenas = ({ resenas, setEditando, editando }) => {
    const [filtros, setFiltros] = useState({
        ciudad: '',
        valoracion: ''
    });
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('md'));
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

    const ciudadesUnicas = [...new Set(resenas.map((resena) => resena.ciudad))];
    const valoracionesUnicas = [...new Set(resenas.map((resena) => resena.valoracion))];

    const filtrarResenas = (resenas) => {
        return resenas.filter((resena) => {
            let pasaFiltros = true;
            for (const filtro in filtros) {
                if (filtros[filtro] !== '') {
                    if (filtro === 'valoracion') {
                        if (resena[filtro] !== Number(filtros[filtro])) {
                            pasaFiltros = false;
                            break;
                        }
                    } else if (filtro === 'fecha') {
                        if (filtros[filtro] !== null && !isSameDay(new Date(resena[filtro]), filtros[filtro])) {
                            pasaFiltros = false;
                            break;
                        }
                    } else {
                        if (resena[filtro] !== filtros[filtro]) {
                            pasaFiltros = false;
                            break;
                        }
                    }
                }
            }
            return pasaFiltros;
        });
    };

    const resenasFiltradas = filtrarResenas(resenas);

    return (
        <Box>
            <Box sx={{ marginBottom: '3rem', display: 'flex', gap: '.5rem', flexDirection: (md ? 'column' : 'row') }}>
                {/* filtro ciudad */}
                <Box>
                    <FormControl sx={{ minWidth: '200px' }}>
                        <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-ciudad"
                            name="ciudad"
                            value={filtros.ciudad}
                            label="Ciudad"
                            onChange={handleChange}
                        >
                            <MenuItem value="">Todos</MenuItem>
                            {ciudadesUnicas.map((ciudad, index) => (
                                <MenuItem key={index} value={ciudad}>{ciudad}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* filtro valoracion */}
                <Box>
                    <FormControl sx={{ minWidth: '200px' }}>
                        <InputLabel id="demo-simple-select-label">Valoración</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-valoracion"
                            name="valoracion"
                            value={filtros.valoracion}
                            label="Valoración"
                            onChange={handleChange}
                        >
                            <MenuItem value="">Todas</MenuItem>
                            {valoracionesUnicas.map((val, index) => (
                                <MenuItem key={index} value={val}>{val}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            {resenasFiltradas.length > 0 ? (
                ordenar(resenasFiltradas).map((resena, index) => {
                    const formattedDate = format(new Date(resena.fecha), 'dd-MM-yyyy');
                    return (
                        <Grid container key={resena.id_resena}>
                            <Grid item xs={9}>
                                <Box sx={{ p: '2rem' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>{resena.lugar} ({resena.ciudad})</Typography>
                                    <Typography>{resena.descripcion}</Typography>
                                    <Rating name="read-only" value={resena.valoracion} readOnly />
                                    <Typography>{formattedDate}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <BotonesOpinion setEditando={setEditando} editando={editando} resena={resena} />
                            </Grid>
                            {index !== resenasFiltradas.length - 1 && <Divider variant='middle' />}
                        </Grid>
                    )
                })
            ) : (
                <Typography>No se encontraron reseñas</Typography>
            )}
        </Box>
    );
};

function isSameDay(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}
