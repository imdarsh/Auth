import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Container } from '@mui/system';
import { Button, TextField, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/Session';

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        const users = {
            email,
            password
        }
        const user = await axios.post(`http://localhost:8000/api/users/login`, users, { mode: 'cors'})
        .then(function (response) {
            setUserSession(response.data.token, response.data.name);
            navigate('/profile');
        })
        .catch(function (error) {
            setError(error.response.data.message);
        })
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <Navbar />
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', py:2 }}>Sign In</Typography>
                    { error && <Alert severity="error">{error}</Alert>} 
                    <form onSubmit={registerUser}>
                        <TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} size="small" label="Email" sx={{ my:2 }} />
                        <TextField fullWidth value={password} type="password" onChange={(e) => setPassword(e.target.value)} size="small" label="Password" sx={{ my:2 }} />
                        <Button variant="contained" type="submit">Sign in</Button>
                    </form>
                <Typography sx={{ my:2 }}><Link to="/signup">Do not have an account? Signup</Link></Typography>
            </Container>
        </>
    )
}

export default Signin;