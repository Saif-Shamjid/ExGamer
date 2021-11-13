import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const emailRef = useRef();
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleAdminSubmit = e =>{
        e.preventDefault();

        const email = emailRef.current.value;
        
        const user = {email};
        console.log(user);
        fetch('https://mysterious-caverns-95881.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount){
                emailRef.current.value = '';
                setSuccess(true);
            }
            else{
                emailRef.current.value = '';
            }
        })
    }
    return (
        <Container>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField inputRef={emailRef} id="standard-basic" label="Email" variant="standard" />
                <Button type='submit' variant='contained'>Make Admin</Button>

            </form>
            {success && <Alert severity='success'>Made Admin Successful</Alert>}
            {!success && <></>}

        </Container>
    );
};

export default MakeAdmin;