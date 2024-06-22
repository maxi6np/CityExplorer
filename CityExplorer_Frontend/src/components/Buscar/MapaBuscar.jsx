import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import MarkersRutas from "./MarkersBuscar";
import CircularProgress from "@mui/material/CircularProgress";


function MapaBuscar({ ciudadesBuscadas }) {
  const zoomLevel = 9;
  const latlong = [43.3614, -5.8593]; // Coordenadas de Asturias
  // const latlong = [40.4168, -3.7038]; // Coordenadas de Madrid, España
  const [cargando, setCargando] = useState(false)

  const ZoomReset = () => {
    const map = useMapEvents({
      contextmenu() {
        map.setView(latlong, zoomLevel);
        map.closePopup();
      },
    });
  };

  useEffect(() => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer 64686bf8a52e791a8e3fb49454b7a0cfe037429307e9724ab4e3385eb40b656e");


    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    setCargando(true)

    fetch('https://' + import.meta.env.VITE_APP_PETICION_IP + '/api/ciudades', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCargando(false)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {cargando ? (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
      ) : (

        <MapContainer
          center={latlong}
          zoom={zoomLevel}
          minZoom={zoomLevel}
          scrollWheelZoom={false}
          style={{ height: "100vh", width: "100%", zIndex: '0' }}
        >
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
          />

          <MarkersRutas ciudadesBuscadas={ciudadesBuscadas}/>
          <ZoomReset />
        </MapContainer>
      )}
    </>
  );
}

export default MapaBuscar;
