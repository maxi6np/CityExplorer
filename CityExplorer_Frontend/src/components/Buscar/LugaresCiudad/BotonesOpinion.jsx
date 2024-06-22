import React from 'react'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import Opinion from './Opinion';

export const BotonesOpinion = ({ resena, setEditando }) => {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [editandoState, setEditandoState] = useState(false);

    useEffect(() => {
        setEditando(editandoState);
    }, [editandoState]);

    const handleOpenReviewModal = () => {
        setEditandoState(true);
        setIsReviewModalOpen(true);
    };

    const handleCloseReviewModal = () => {
        setEditandoState(false);
        setIsReviewModalOpen(false);
    };

    const handleDelete = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/resenas/${resena.id_resena}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                window.location.reload()
            })
            .catch((error) => console.error(error));
    }


    return (
        <>
            <Box sx={{ width: '100%', margin: 'auto', height: '100%' }}>
                <Stack direction="row" alignItems="center" justifyContent='center' height='100%' spacing={1}>
                    <IconButton
                        onClick={handleOpenReviewModal}
                        aria-label="delete" size="big" sx={{ color: 'orange' }}>
                        <EditIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        onClick={handleDelete}
                        aria-label="delete" size="big" sx={{ color: 'red' }}>
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Stack>
            </Box>

            <Opinion resenaEditar={resena} editando={editandoState} isOpen={isReviewModalOpen} onClose={handleCloseReviewModal} />
        </>
    )
}