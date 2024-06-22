import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import CircularProgress from "@mui/material/CircularProgress";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ImagenesLugares() {
    const [imagenes, setImagenes] = useState([]);
    const [cargando, setCargando] = useState(false);

    const isMediumScreen = useMediaQuery('(max-width:1090px)');
    const isSmallScreen = useMediaQuery('(max-width:750px)');

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        setCargando(true);
        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/lugares`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const imgs = result.data.map((ciudad) => {
                    return {
                        nombre: ciudad.nombre,
                        imagen: ciudad.imagen
                    };
                });
                setImagenes(imgs);
                setCargando(false);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <Box sx={{ p: '7rem' }}>
            {cargando ? (
                <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <Typography variant="h3" sx={{ fontStyle: 'italic', marginBottom: '1rem', color: 'orange', textAlign: 'center', mb: '4rem' }}>
                        Explora nuestros lugares
                    </Typography>

                    <ImageList 
                        variant="masonry" 
                        cols={isSmallScreen ? 1 : isMediumScreen ? 2 : 3} 
                        gap={8}
                    >
                        {imagenes.map((item) => (
                            <ImageListItem key={item.imagen}>
                                <img
                                    srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.imagen}?w=248&fit=crop&auto=format`}
                                    alt={item.nombre}
                                    title={item.nombre}
                                    loading="lazy"
                                    style={{
                                        borderRadius: '5px'
                                    }}
                                />
                                <ImageListItemBar position="below" 
                                    sx={{
                                        color: 'black', 
                                        textAlign: 'center',
                                    }} 
                                    title={item.nombre} 
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </>
            )}
        </Box>
    );
}
