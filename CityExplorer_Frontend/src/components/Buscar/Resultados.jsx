import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

export const Resultados = ({ ciudadesBuscadas }) => {
    return (
        <div style={{ height: 'auto', minHeight: '100vh' }}>
            <Typography
                variant='h5'
                sx={{
                    margin: '2rem'
                }}>
                Resultados de su búsqueda
            </Typography>
            {ciudadesBuscadas.length > 0 ? (
                <Grid container>
                    {ciudadesBuscadas.map((ciudad) => (
                        <Grid item xs={12} key={ciudad.nombre}
                            sx={{
                                m: '.3rem',
                                textAlign: 'center',
                                py: '1rem',
                                '&:hover': {
                                    backgroundColor: '#fff4df'
                                }
                            }}
                        >
                            <Link 
                            to={`/buscar/${ciudad.nombre}/lugares`} 
                            sx={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography>
                                    {ciudad.nombre.toUpperCase()}
                                </Typography>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography
                    variant='body1'
                    sx={{
                        textAlign: 'center',
                        py: '2rem',
                    }}>
                    No se encontraron coincidencias
                </Typography>
            )}
        </div>
    );
};
