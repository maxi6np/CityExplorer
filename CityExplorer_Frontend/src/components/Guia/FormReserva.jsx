import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useCookies } from 'react-cookie';
import DoneIcon from '@mui/icons-material/Done';
import CircularProgress from "@mui/material/CircularProgress";


function FormReserva({ nombreCiudad, existeUsuario }) {
    const [guia, setGuia] = useState('');
    const [fechasDisponibles, setFechasDisponibles] = useState([]);
    const [fecha, setFecha] = useState(null);
    const [personas, setPersonas] = useState(0);
    const [cargando, setCargando] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const [reservaConfirmada, setReservaConfirmada] = useState(false)
    //
    const [errorFecha, setErrorFecha] = useState('');
    const [errorPersonas, setErrorPersonas] = useState('');

    useEffect(() => {
        setCargando(true)
        const obtenerFechasDisponibles = () => {
            const fechas = generarFechasDisponibles(8);
            setFechasDisponibles(fechas);
            setFecha(fechas[0]);
        };
        obtenerFechasDisponibles();

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${existeUsuario}`);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };


        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/ciudad/${nombreCiudad}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGuia(result.data.guia[0])
                setCargando(false)
            })
            .catch((error) => console.error(error));
    }, []);

    const generarFechasDisponibles = (cantidad) => {
        const fechas = [];
        const hoy = new Date();
        const unMesDespues = new Date();
        unMesDespues.setMonth(unMesDespues.getMonth() + 1);

        for (let i = 0; i < cantidad; i++) {
            const fechaAleatoria = new Date(hoy.getTime() + Math.random() * (unMesDespues.getTime() - hoy.getTime()));
            const fechaFormateada = formatDate(fechaAleatoria);
            const diaSemana = obtenerDiaSemana(fechaAleatoria.getDay());
            fechas.push({
                fecha: fechaFormateada,
                diaSemana: diaSemana
            });
        }

        return fechas;
    };

    const obtenerDiaSemana = (numeroDia) => {
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return dias[numeroDia];
    };

    const formatDate = (date) => {
        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const año = date.getFullYear();
        return `${dia}-${mes}-${año}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${existeUsuario}`);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "id_usuario": cookies.user.user.id_usuario,
            "id_guia": guia.id_guia,
            "fecha": fecha,
            "personas": personas,
            "importe": (guia.precio * personas)
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        if (personas == 0) {
            setErrorPersonas('Debe elegir un número mayor a 0')
            return
        } else if ((guia.capacidad - guia.reservas) - personas < 0) {
            setErrorPersonas('Límite de capacidad alcanzado')
            return
        }

        fetch(`https://` + import.meta.env.VITE_APP_PETICION_IP + `/api/reservas`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.message == 'reserva creada') {
                    setReservaConfirmada(true)
                    window.history.back()
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <Box
            sx={{
                minWidth: '90%'
            }}
        >
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
            {cargando ? (
                <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </div>
            ) : (
                <>

                    <form style={{ width: '70%', margin: 'auto', rowGap: '2rem' }} className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                        <div className="col-xs-12 col-md-9">
                            <label htmlFor="validationCustom03" className="form-label">Nombre del Guía</label>
                            <input
                                type="text"
                                className="form-control"
                                value={guia.nombre}
                                disabled
                            />
                        </div>

                        <div className="col-xs-12 col-md-3">
                            <label htmlFor="validationCustom03" className="form-label">Precio</label>
                            <input
                                type="text"
                                className="form-control"
                                value={`${guia.precio * personas} €`}
                                disabled
                            />
                        </div>

                        <div className="col-xs-12 col-md-4">
                            <label htmlFor="validationCustom05" className="form-label">Personas</label>
                            <select
                                className={`form-select ${errorPersonas ? 'is-invalid' : ''}`}
                                onChange={(e) => {
                                    setPersonas(e.target.value)
                                    setErrorPersonas('')
                                }}
                                required
                            >
                                {[...Array(11).keys()].map((i) => (
                                    <option key={i} value={i}>{i}</option>
                                ))}
                            </select>
                            <div className="invalid-feedback">
                                {errorPersonas}
                            </div>
                        </div>


                        <div className="col-xs-12 col-md-8">
                            <label htmlFor="validationCustom05" className="form-label">Fecha</label>
                            <select
                                className="form-select"
                                onChange={(e) => {
                                    setFecha(e.target.value);
                                }}
                                required
                            >
                                {fechasDisponibles.map((fecha, index) => (
                                    <option key={index} value={fecha.fecha}>{`${fecha.fecha} (${fecha.diaSemana})`}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-xs-12 col-md-6">
                            <label htmlFor="validationCustom03" className="form-label">Capacidad total</label>
                            <input
                                type="text"
                                className="form-control"
                                value={`${guia.capacidad} personas`}
                                disabled
                            />
                        </div>

                        <div className="col-xs-12 col-md-6">
                            <label htmlFor="validationCustom03" className="form-label">Reservas restantes</label>
                            <input
                                type="text"
                                className="form-control"
                                value={`${(guia.capacidad - guia.reservas) - personas} personas`}
                                disabled
                            />
                        </div>

                        <Box className="col-12 mt-4"
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <button
                                className="btn col-12"
                                disabled={reservaConfirmada ? true : false}
                                style={{
                                    background: 'linear-gradient(#FF6347,#FF4500)',
                                    marginTop: '3rem',
                                    color: 'white',
                                    width: '50%'
                                }}
                                type="submit">{
                                    reservaConfirmada
                                        ? <DoneIcon />
                                        : "Reservar"
                                }</button>
                        </Box>
                    </form>
                </>
            )
            }
        </Box>
    );
}

export default FormReserva;
