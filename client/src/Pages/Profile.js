import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Navbar from '../Components/Navbar';

function Profile() {
    return(
        <>
            <Navbar />
            <Container>
                <Typography sx={{ textAlign: 'center' }} variant="h4">Profile</Typography>
            </Container>
        </>
    )
}

export default Profile;