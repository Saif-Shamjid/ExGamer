import { TextField } from '@mui/material';
import React from 'react';

const Faq = () => {
    return (
        <div className='container '>
            <h3 className='primary-text-color'> Please Subscribe to Get 20% off </h3>
            <div>
            <TextField
            
            
            id="standard-basic" label="Your Email" variant="standard"
            sx={{width:'75%',m:2}}
            
            />
            </div>
            <button className='btn btn-primary'> subscribe</button>
        </div>
    );
};

export default Faq;