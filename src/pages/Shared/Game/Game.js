import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Game = ({gameInfo}) => {
    const {_id,picture,price,publisher,title} = gameInfo;

    const uri = `/pleaseorder/${_id}`;

    return (
        
            <Grid item xs={12} md={4}>
                <Card className='primary-bg-color' sx={{ maxWidth: 345,borderColor: 'secondary.main',border: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={picture}
        alt="green iguana"
      />
      <CardContent >
        <Typography className='primary-text-color' gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography  variant="body2" color="text.Primary">
            {publisher } 
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents
        </Typography>
        <Typography className='primary-text-color' gutterBottom variant="h6" component="div" style={{marginBottom:'0px'}}>
          Price: {price}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center',marginBottom:'10px'}}>
        <Link to={uri}>
        <Button variant='contained' size="small">Buy Now</Button>
        </Link>
      </CardActions>
    </Card>
            </Grid>
        
    );
};

export default Game;