import React, { useState, useEffect, useRef } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Typography, Box, Modal } from '@mui/material';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

export default function ProfileMenu({ existeUsuario }) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const navigate = useNavigate();
    const usuario = useState(cookies.user.user);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const logout = () => {
        let confirm = window.confirm("¿Está seguro de cerrar sesión?")

        if (confirm) {
            fetch('https://' + import.meta.env.VITE_APP_PETICION_IP + '/logout', {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    Authorization: "Bearer " + existeUsuario,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    sessionStorage.removeItem('session')
                    localStorage.removeItem('activeButton')
                    localStorage.removeItem('session')
                    localStorage.removeItem('userName')
                    localStorage.removeItem('imagen')
                    localStorage.removeItem('selectedTab')
                    removeCookie('user')
                    removeCookie('lugar')
                    removeCookie("session")
                    navigate('/')
                    window.location.reload()
                });
        }
    };


    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                variant="contained"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
            >
                <Avatar
                    alt={usuario[0].nombre}
                    sx={{ mx: '.5rem', width: '30px', height: '30px' }}
                    src={
                        localStorage.getItem('imagen') != null
                            ? "https://" + import.meta.env.VITE_APP_PETICION_IP + "/" + localStorage.getItem('imagen')
                            : ''
                    }
                />
                <Typography sx={{ backgroundColor: 'transparent', display: 'flex' }}>{cookies.user.user.nombre}</Typography>
                <Box
                    size="small"
                    sx={{ backgroundColor: 'transparent' }}
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon sx={{ display: 'flex' }} />
                </Box>
            </Box>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    <MenuItem key='perfil' onClick={() => (navigate("/perfil"))}>Mi perfil</MenuItem>
                                    <MenuItem key='cerrar sesión' onClick={logout}>Cerrar sesión</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
