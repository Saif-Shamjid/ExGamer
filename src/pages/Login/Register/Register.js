import { Button, Container, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const {setUserName,setError,error,createNewUser,saveUser} = useAuth()

    const history = useHistory();
    const redirect_uri = '/login';

    const passRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();

    const handleRegisterSubmit =(e) =>{
        e.preventDefault();

        const pass = passRef.current.value;
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        console.log(email);
        createNewUser(email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            //setUser(user);
            console.log(user);
            // ...
            setError('')
            setUserName({displayName: `${name}`})
            .then(() => {
                // Profile updated!
                //save to database
                saveUser(email,name,'POST');
                // ...
                history.push(redirect_uri)
                console.log("Profile updated!");
              }).catch((error) => {
                // An error occurred
                // ...
                setError(`${error}`)
              });
            
        })
        .catch(error => {
            setError(`${error}`)

        })
        
    }

    return (
        <Container>
        <Grid container spacing={2}>
    <Grid style={{display:'flex', alignItems:'center', justifyContent:'center'}} item xs={12} md={6}>
        <div>
        <Typography style={{textAlign:'center'}} variant="body1" gutterBottom>
    Register
    </Typography>
        <form onSubmit={handleRegisterSubmit}>
        <TextField 
        inputRef={nameRef}
        id="standard-basic" label="Your Name" variant="standard"
        sx={{width:'75%',m:2}}
        />
        <TextField 
        inputRef={emailRef}
        id="standard-basic" label="Your Email" variant="standard"
        sx={{width:'75%',m:2}}
        />
        
        <TextField id="standard-basic" label="Your Pass" inputRef={passRef} variant="standard" sx={{width:'75%', m:2}} type='password' />
        <NavLink to='/login' style={{textDecoration:'none'}}>
        <Button variant='text'>New Register? please Login</Button>
        </NavLink>
        <Button type='submit' variant='contained' sx={{width:'75%', m:2}}>Register</Button>

        </form>
        </div>

    </Grid>
    <Grid item xs={12} md={6}>
        <img style={{width:'100%'}} src='https://image.freepik.com/free-vector/detailed-esports-gaming-logo_52683-63633.jpg' alt="" />
    </Grid>
    
  </Grid>
    </Container>
    );
};

export default Register;