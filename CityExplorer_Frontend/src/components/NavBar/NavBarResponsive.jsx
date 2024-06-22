import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileMenu2 from './ProfileMenu';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';

export default function NavBarResponsive({ existeUsuario }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={() => setOpen(false)}
        >
            <List>
                <ListItem key='Inicio' component={Link} to='/' disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='City Explorer' />
                    </ListItemButton>
                </ListItem>
                <ListItem key='Lugares Estrella' component={Link} to='/lugares-estrella' disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary='Lugares Estrella' />
                    </ListItemButton>
                </ListItem>

                <ListItem key='Buscar' component={Link} to='/buscar' disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary='Buscar' />
                    </ListItemButton>
                </ListItem>
                <Divider
                    sx={{ my: '1rem' }}
                />

                {!existeUsuario ? (
                    <>
                        <ListItem key='Iniciar Sesión' component={Link} to='/login' disablePadding>
                            <ListItemButton LinkComponent='/login'>
                                <ListItemText primary='Iniciar Sesión' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key='Registrate' component={Link} to="/registro" disablePadding>
                            <ListItemButton>
                                <ListItemText primary='Regístrate' />
                            </ListItemButton>
                        </ListItem>
                    </>
                ) : (
                    <ListItem key='Perfil' disablePadding>
                        <ListItemButton>
                            <ProfileMenu2 existeUsuario={existeUsuario} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer}>
                <MenuIcon sx={{ color: 'white' }} />
            </Button>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
            >
                {list}
            </Drawer>
        </div>
    );
}
