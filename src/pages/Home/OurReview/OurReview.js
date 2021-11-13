import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const OurReview = () => {

    const [review, setReview] = useState([]);

    useEffect(()=>{
        fetch('https://mysterious-caverns-95881.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])

    

    return (
        <div className='container my-5'>
            <h3 className='primary-text-color'>Happy Clint Review</h3>
            <Grid container spacing={2}>
                {
                    review.map(ref=> <Grid key={ref._id} item xs={12} md={4}>
                        <Paper elevation={10} className='primary-bg-color' sx={{p:4}}>
                            <Typography className='primary-text-color' gutterBottom variant="h5" component="div">
                            {ref.name}
                            </Typography>
                            <Typography  variant="body2" color="text.Primary">
                                {ref.description} 
                            </Typography>
                            <Typography  variant="span" className='primary-text-color'>
                                {ref.email} 
                            </Typography>
                        </Paper>
                        </Grid>)
                }
            </Grid>
        </div>
    );
};

export default OurReview;