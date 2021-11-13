import { TextField,Button } from '@mui/material';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const history = useHistory();

    const {user} = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const descriptionRef = useRef();

    function handleSubmit(e){
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const description = descriptionRef.current.value;
        

        fetch('https://mysterious-caverns-95881.herokuapp.com/review',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({name,email,description})
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            alert('Submitted');
            history.push('/dashboard');
          }
          
        })
        

        
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
       
        <TextField 
        inputRef={nameRef}
        defaultValue={user.displayName}
        disabled
        id="standard-basic" label="your Name" variant="standard"
        sx={{width:'75%',m:2}}
        />
        <TextField 
        inputRef={emailRef}
        defaultValue={user.email}
        disabled
        id="standard-basic" label="Your Email" variant="standard"
        sx={{width:'75%',m:2}}
        />
        <TextField 
        inputRef={descriptionRef}
        id="standard-basic" label="Description" variant="standard"
        sx={{width:'75%',m:2}}
        />
        
        <Button type='submit' variant='contained' sx={{width:'75%', m:2}}>Submit</Button>

        </form>
        </div>
    );
};

export default AddReview;