import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function Navbar() {
    return(
        <>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
            </Typography>
            <Button color="inherit"><Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>Signin</Link></Button>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;