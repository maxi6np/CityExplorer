import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoFinal from '../../images/logo-city-explorer.png'
import FondoRegistro from '../../images/fondoRegistro.jpg'
import FormRegistro from "./FormRegistro";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Registro() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5rem 0 5rem 0',
    }}>
      {!isSmallScreen && (
        <img
          src={FondoRegistro}
          alt="Fondo"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(4px)',
            zIndex: -1,
          }}
        />
      )}
      <Container
        sx={{
          padding: '3rem',
          height: 'auto',
          width: isSmallScreen ? '100%' : '50vw',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'column',
          backgroundColor: 'white',
          borderRadius: '10px'
        }}
      >
        <Grid
          xs={12}
        >
          <Link to="/">
            <img src={LogoFinal} alt="IES MONTE NARANCO" style={{ height: '60px' }} />
          </Link>
        </Grid>
        <Grid
          xs={12}
        >
          <Typography sx={{ paddingTop: '1rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'center' }} variant="h6">
            Vive la nueva manera de viajar
          </Typography>

          <FormRegistro></FormRegistro>

          <div style={{ margin: 'auto', width: '90%' }}>
            <Typography sx={{ paddingTop: '3rem', fontSize: '13px' }}>
              ¿Ya tienes cuenta con CityExplorer? <Link to="/login">Inicia sesión</Link>
            </Typography>
            <Typography sx={{ paddingTop: '.5rem', fontSize: '13px' }}>
              <Link to="/">Volver a la página principal</Link>
            </Typography>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default Registro;
