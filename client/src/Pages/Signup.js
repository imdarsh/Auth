import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Container } from '@mui/system';
import { Button, TextField, Typography, Alert } from '@mui/material';
import { setUserSession } from '../utils/Session';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const registerUser = async (e) => {
        e.preventDefault();
        const users = {
            name,
            email,
            password
        }
        const user = await axios.post(`http://localhost:8000/api/users`, users, { mode: 'cors'})
        .then(function (response) {
            setUserSession(response.data.token, response.data.name);
        })
        .catch(function (error) {
            setError(error.response.data.message);
        })
        setName('') 
        setEmail('')
        setPassword('')
    }

    return(
        <>
            <Navbar />
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', py:2 }}>Sign Up</Typography>
                { error && <Alert severity="error">{error}</Alert>} 
                <form onSubmit={registerUser}>
                    <TextField fullWidth value={name} onChange={(e) => setName(e.target.value)} size="small" label="Name" sx={{ my:2 }} />
                    <TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} size="small" label="Email" sx={{ my:2 }} />
                    <TextField fullWidth value={password} type="password" onChange={(e) => setPassword(e.target.value)} size="small" label="Password" sx={{ my:2 }} />
                    <Button variant="contained" type="submit">Sign up</Button>
                </form>
                <Typography sx={{ my:2 }}><Link to="/signin">Already have an account? Signin</Link></Typography>
            </Container>
        </>
    )
}

export default Signup;