import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const CosNav = () => {

    const {user,logOut} = useAuth()

    return (
        
        <>
            <Navbar className='primary-bg-color' collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand as={Link} to="/home"><h3 className='primary-text-color'>ExGamer</h3></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/allgames">All Games</Nav.Link>
                    {
                        user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    }
                    {
                        user.email ? <div className='cp text-danger mx-3' onClick={logOut}>LogOut</div>
                        : <Nav.Link as={Link} to="/login">Login</Nav.Link>

                    }

                    
                    {
                        user.email ? <Navbar.Text style={{color:'white'}}>
                        LogIn in as: {user.displayName}
                        </Navbar.Text>
                        : <p></p>
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        
    );
};

export default CosNav;