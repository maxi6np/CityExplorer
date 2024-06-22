import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useCookies } from 'react-cookie';

const Opinion = ({ lugarSeleccionado, isOpen, onClose, editando, resenaEditar }) => {
  const [rating, setRating] = useState(editando ? resenaEditar.valoracion : 0);
  const [review, setReview] = useState(editando ? resenaEditar.descripcion : '');
  const [reviewError, setReviewError] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const handleEdit = (e) => {
    e.preventDefault()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");


    const raw = JSON.stringify({
      "descripcion": review,
      "valoracion": rating
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/resenas/${resenaEditar.id_resena}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.message == "Resena actualizada") {
          window.location.reload()
        } else{
          setReviewError('Formato de descripción no válido')
          console.log(result)
        }
      })
      .catch((error) => console.error(error));

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!review.trim()) {
      setReviewError('Por favor, deja algún comentario.');
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");


    const raw = JSON.stringify({
      "valoracion": rating,
      "descripcion": review,
      "id_lugar": lugarSeleccionado.id_lugar,
      "id_usuario": cookies.user.user.id_usuario,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch('https://' + import.meta.env.VITE_APP_PETICION_IP + '/resenas', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        window.location.reload()
      })
      .catch((error) => console.error(error));

    setRating(0)
    setReview('')
    onClose();
  };

  useEffect(() => {
    if (editando) {
      setRating(resenaEditar.valoracion);
      setReview(resenaEditar.descripcion);
    } else {
      setRating(0);
      setReview('');
    }
  }, [isOpen]);


  return (
    <Modal
      open={isOpen}
      onClose={() => onClose()}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          width: 500
        }}
      >
        <Typography variant="h5" sx={{ mb: 5 }}>{!editando ? 'Deja tu reseña' : 'Edita tu reseña'}</Typography>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />

        <form className="needs-validation" onSubmit={!editando ? handleSubmit : handleEdit} noValidate>
          <textarea
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
              setReviewError('');
            }}
            placeholder="Escribe tu reseña..."
            style={{ width: '100%', height: 200, fontSize: 16, padding: 8 }}
            maxLength={500}
            className={`form-control ${reviewError && 'is-invalid'}`}
            required
          />
          {reviewError && (
            <div className="invalid-feedback">
              {reviewError}
            </div>
          )}

          <Rating
            name="review-rating"
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
            sx={{ my: '2rem', fontSize: '2rem' }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#FF6347',
              m: 'auto',
              display: 'block',
              mt: '2rem',
              '&:hover': {
                backgroundColor: '#FF6347'
              }
            }}
          >
            {!editando ? 'Enviar reseña' : 'Editar reseña'}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default Opinion;
