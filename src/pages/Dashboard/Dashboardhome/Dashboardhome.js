import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Myorders from '../Myorders/Myorders';

const Dashboardhome = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          
        <Myorders></Myorders>      
      
        
    </Box>
    );
};

export default Dashboardhome;