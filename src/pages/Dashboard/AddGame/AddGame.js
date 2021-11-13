import { TextField,Button } from '@mui/material';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';

const AddGame = () => {

    const history = useHistory();

    const pictureRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const publisherRef = useRef();

    
    function handleSubmit(e){
        e.preventDefault();

        const picture = pictureRef.current.value;
        const publisher = publisherRef.current.value;
        const title = titleRef.current.value;
        const price = priceRef.current.value;

        fetch('https://mysterious-caverns-95881.herokuapp.com/games',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({picture,price,publisher,title})
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
        inputRef={titleRef}
        id="standard-basic" label="Game Name" variant="standard"
        sx={{width:'75%',m:2}}
        />
        <TextField 
        inputRef={publisherRef}
        id="standard-basic" label="Description" variant="standard"
        sx={{width:'75%',m:2}}
        />
        <TextField 
        inputRef={pictureRef}
        id="standard-basic" label="Image Url" variant="standard"
        sx={{width:'75%',m:2}}
        />
        <TextField 
        inputRef={priceRef}
        id="standard-basic" label="Game Price" variant="standard"
        sx={{width:'75%',m:2}}
        />
        
        <Button type='submit' variant='contained' sx={{width:'75%', m:2}}>Order Now</Button>

        </form>
        </div>
    );
};

export default AddGame;