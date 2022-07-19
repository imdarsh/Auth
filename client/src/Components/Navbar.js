import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { removeUserSession } from '../utils/Session';

function Navbar() {

    let navigate = useNavigate();

    const Signout = () => {
        removeUserSession();
        navigate('/');
    }

    return(
        <>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
            </Typography>
            { !localStorage.getItem("token") ? <Button color="inherit"><Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>Signin</Link></Button> : <Button color="inherit" onClick={Signout}>Signout</Button> }
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;