import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavigationBar.css';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link className="nav-style" to="/">React Bootstrap</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-text">
                            <Link className="nav-style" to ="/home">Home</Link>
                            <Link className="nav-style" to ="/plans">Plans</Link>
                            <Link className="nav-style" to ="/places">Places</Link>
                        </Nav>
                        {user?.email &&<Nav>
                            <Link className="nav-style" to="/myorder">My Orders</Link>
                            <Link className="nav-style" to="/manageorder">Manage Orders</Link>
                            <Link className="nav-style" to="/addspot">Add Spot</Link>
                        </Nav>}
                        {!user?.email &&<Nav className="me">
                                
                                    <Link className="nav-style" to="/login">Login</Link>
                                
                                
                                    <Link className="nav-style" to="/signup">Signin</Link>
                                
                            </Nav>}
                            
                        {user?.email && <Nav className="me">
                        
                            <Button Button className="bg-light px-4 ms-2 text-dark fw-bold border-0" onClick={logOut}>Logout</Button>
                            <Navbar.Text className="ms-2 px-1 text-primary fw-bold">
                                <span className="px-1 text-light fw-bold"> {user.displayName}</span>
                            </Navbar.Text>
                        </Nav>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;