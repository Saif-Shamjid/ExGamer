import { Button, Container, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const passRef = useRef();
    const emailRef = useRef();

    const {saveUser,setIsLoading,setUser,signInWithGoogle,user,error,processLogin,setError} = useAuth();

    const location  = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/' ;
    

    const handleLoginSubmit =(e) =>{
        e.preventDefault();

        const pass = passRef.current.value;
        const email = emailRef.current.value;
        
        processLogin(email,pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
            history.push(redirect_uri)
            setError('')
          })
          .catch(error => {
            setError(`${error}`)
          })
        
    }

    const handleSignIn = () => {
        signInWithGoogle()
        .then(res=>{
            setUser(res.user);
            saveUser(res.user.email,res.user.displayName,'PUT')
            history.push(redirect_uri)
            console.log(res.user);
        })
        .finally(()=> setIsLoading(false))
    }

    return (
        <Container>
            <Grid container spacing={2}>
        <Grid style={{display:'flex', alignItems:'center', justifyContent:'center'}} item xs={12} md={6}>
            <div>
            <Typography style={{textAlign:'center'}} variant="body1" gutterBottom>
        Login
        </Typography>
            
            <form onSubmit={handleLoginSubmit}>
            
            <TextField
            
            inputRef={emailRef}
            id="standard-basic" label="Your Email" variant="standard"
            sx={{width:'75%',m:2,color:'white'}}
            
            />
            <TextField id="standard-basic" label="Your Pass" inputRef={passRef} variant="standard" sx={{width:'75%', m:2}} type='password' />
            <NavLink to='/register' style={{textDecoration:'none'}}>
            <Button variant='text'>New user? please Register</Button>
            </NavLink>
            <Button type='submit' variant='contained' sx={{width:'75%', m:2}}>Login</Button>
            
            </form>
            
            <Button onClick={handleSignIn} variant='contained'>Google Sign-in</Button>
            </div>
            

        </Grid>
        <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src='https://image.freepik.com/free-vector/detailed-esports-gaming-logo_52683-63633.jpg' alt="" />
        </Grid>
        
      </Grid>
        </Container>
    );
};

export default Login;