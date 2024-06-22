import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Footer } from '../Footer';
import ImagenesLista from './ImagenesLista';

export const Main = () => {
    const isLargeScreen = useMediaQuery('(min-width:600px)');

    return (
        <>
            <Box
                sx={{
                    height: '90vh',
                    width: '100%',
                    color: 'white'
                }}
            >
                <Grid
                    container
                    spacing={4}
                    sx={{
                        height: '100%'

                    }}
                    alignContent='center'
                >
                    {isLargeScreen &&
                        <>
                            <Grid item xs={6} textAlign="end">
                                <Typography sx={{ fontSize: '2rem' }}>
                                    Explora y vive de una manera
                                </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign="start">
                                <Typography
                                    sx={{ fontStyle: 'italic', color: 'orange', fontSize: '4rem' }}>
                                    diferente
                                </Typography>
                            </Grid>
                        </>}
                </Grid>

                <ImagenesLista />
                <Footer />
            </Box>

        </>
    );
}
