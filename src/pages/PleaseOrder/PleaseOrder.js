import { TextField,Button, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PleaseOrder = () => {

    const {user} = useAuth()

    const history = useHistory();
    const {id} = useParams();

    const nameRef = useRef();
    const emailRef = useRef();

    const [game,setGame] = useState({})

    useEffect(()=>{
        fetch(`https://mysterious-caverns-95881.herokuapp.com/gamesbyid?id=${id}`)
        .then(res=>res.json())
        .then(data=>{
            setGame(data)
            console.log(data);
        })
    },[])

    function handleSubmit(e){
        e.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const gameName = game.title;
        const price = game.price;

        fetch('https://mysterious-caverns-95881.herokuapp.com/order',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({id,email,name,price,gameName})
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            alert('Submitted');
            history.push('/');
          }
          
        })
        

        
    }

    return (
        <Container className='my-5'>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit}>
        <TextField 
        inputRef={nameRef}
        defaultValue={user.displayName}
        id="standard-basic" label="Your Name" variant="standard"
        sx={{width:'75%',m:2}}
        />
        <TextField 
        inputRef={emailRef}
        defaultValue={user.email}
        disabled
        id="standard-basic" label="Your Email" variant="standard"
        sx={{width:'75%',m:2}}
        />
        
        
        <Button type='submit' variant='contained' sx={{width:'75%', m:2}}>Order Now</Button>

        </form>
        </Grid>
        <Grid item xs={12} md={6}>
            <img src={game.picture} alt="" />
        </Grid>
       
      </Grid>
        </Container>
    );
};


export default PleaseOrder;