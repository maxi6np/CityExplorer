import * as React from 'react';
import { Inicio } from './Inicio/Inicio';
import { Buscar } from './Buscar/Buscar';
import Login from './Login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LugaresEstrella } from './LugaresEstrella/LugaresEstrella';
import CssBaseline from '@mui/material/CssBaseline';
import Registro from './Registro/Registro';
import { useEffect, useState } from 'react';
import { Lugares } from './Buscar/LugaresCiudad/Lugares';
import { Lugar } from './Buscar/LugaresCiudad/Lugar';
import { Error404 } from './Error404'
import { ReservarGuia } from './Guia/ReservarGuia';
import  Perfil  from './Perfil/Perfil';
import { useCookies } from 'react-cookie';

function App() {
  const [lugarSeleccionado, setLugarSeleccionado] = useState({})
  const [editando, setEditando] = useState(false);
  const [existeUsuario, setExisteUsuario] = useState(localStorage.getItem('session') || sessionStorage.getItem('session'))

  useEffect(() => {
    setExisteUsuario(localStorage.getItem('session') || sessionStorage.getItem('session'))
  }, [])

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="*" element={<Error404 />}></Route>
          <Route path="/404" element={<Error404 />}></Route>
          <Route path="/" element={<Inicio existeUsuario={existeUsuario} />}></Route>
          <Route path="/login" element={<Login setExisteUsuario={setExisteUsuario}/>}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/buscar" element={<Buscar existeUsuario={existeUsuario} />}></Route>
          <Route path="/lugares-estrella" element={<LugaresEstrella existeUsuario={existeUsuario} setLugarSeleccionado={setLugarSeleccionado} />}></Route>
          <Route path="/buscar/:nombreCiudad/lugares" element={<Lugares existeUsuario={existeUsuario} setLugarSeleccionado={setLugarSeleccionado} />}></Route>
          <Route path="/buscar/:nombreCiudad/lugares/:idLugar" element={<Lugar existeUsuario={existeUsuario} lugarSeleccionado={lugarSeleccionado} editando={editando} />}></Route>
          <Route path="/:nombreCiudad/reservarGuia" element={<ReservarGuia existeUsuario={existeUsuario} />}></Route>
          <Route path="/perfil" element={<Perfil existeUsuario={existeUsuario} setEditando={setEditando} editando={editando} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App
