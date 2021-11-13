import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Myorders = () => {
    const {user} = useAuth();
    const [orders, setorders] = useState([]);

    const handledelete = id => {
      console.log(id);
      const url = `https://mysterious-caverns-95881.herokuapp.com/myorders?id=${id}`;
      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
          const neworders = orders.filter(order=>order._id!== id );
          alert('Success')
          setorders(neworders)
        }
      })
      
    }

    useEffect(()=>{
        const url = `https://mysterious-caverns-95881.herokuapp.com/myorders?email=${user.email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setorders(data));
    },[])

    return (
        <div>
            <h2>Orders {orders.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >price</TableCell>
            <TableCell >Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.gameName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.price}$
              </TableCell>
              <TableCell ><Button onClick={()=>handledelete(row._id)} variant="contained">Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Myorders;