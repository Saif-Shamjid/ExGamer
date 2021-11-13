import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Game from '../../Shared/Game/Game';


const TopGame = () => {

    const [games, setGames] = useState([]);

    useEffect(()=>{
        fetch('https://mysterious-caverns-95881.herokuapp.com/games?size=10')
        .then(res=>res.json())
        .then(data=>setGames(data))
    },[])

    return (
        <Container sx={{marginY: 7}}>
        <h2 className='primary-text-color'>Top Games</h2>
        <Grid sx={{mt:5}} container spacing={2}>
            {
                games.map(game=><Game key={game._id} gameInfo={game}></Game>)
            }
      </Grid>
        </Container>
    );
};

export default TopGame;