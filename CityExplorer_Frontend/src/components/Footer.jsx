import React from 'react'
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  return (
    <Grid id='footer' container p={3} sx={{
      width: '100vw',
      color: '#f0f0f0',
      backgroundColor: 'rgb(90,90,90)',
      textAlign: 'center'
    }}>
      <Grid item xs={12} md={4} sx={{ marginBottom: '1rem' }}>
        <p>¿Quiénes somos?</p>
        <p>Una aventura empieza por el primer paso</p>
        <p>Vivir es viajar</p>
      </Grid>

      <Grid item xs={12} md={4} sx={{ marginBottom: '1rem' }}>
        <p>Déjanos tu opinión</p>
        <p>Valorános</p>
        <p>Contáctanos</p>
      </Grid>

      <Grid item xs={12} md={4} id='socialMedia'>
        <a href="https://www.instagram.com" target='_blank' className='site'><InstagramIcon></InstagramIcon></a>
        <a href="https://www.youtube.com" target='_blank' className='site'><YouTubeIcon></YouTubeIcon></a>
        <a href="https://twitter.com" target='_blank' className='site'><XIcon></XIcon></a>
        <a href="https://www.pinterest.es" target='_blank' className='site'><PinterestIcon></PinterestIcon></a>
        <a href="https://www.facebook.com" target='_blank' className='site'><FacebookIcon></FacebookIcon></a>
      </Grid>


      <Grid item xs={12} sx={{ margin: '1rem' }}>
        City Explorer 2024 &copy; Todos los derechos reservados
      </Grid>

    </Grid>
  )
}

