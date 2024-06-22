import React, { useEffect, useState } from 'react'
import Video from '../../video/video.mp4'
import { NavBar } from '../NavBar/NavBar';
import { Main } from './Main';

export const Inicio = ({ existeUsuario }) => {
    return (
        <div className="app">
            <div className="background-video">
                <video autoPlay loop muted>
                    <source src={Video} type="video/mp4" />
                </video>
            </div>
            <div className="gradient"></div>

            <div className="content">
                <NavBar existeUsuario={existeUsuario} />
                <Main />
            </div>

        </div>
    )
}
