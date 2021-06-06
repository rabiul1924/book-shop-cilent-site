import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userEmail = loggedInUser.email;
    return (
        <>
            <Navbar bg="dark" expand="lg" className="sticky-top">
                <Navbar.Brand as={Link} to="/" className="text-white m-2">Book Selling Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mt-2">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/orders">Orders</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/deals">Deals</Nav.Link>
                        
                        {userEmail?.length > 0 ? (
          <h4 style={{ color: "white" }}>{userEmail}</h4>
        ) : (
          <div className="ml-5">
            <Button className="m-2" as={Link} to="/login" variant="warning">
              Log In
            </Button>
            <Button className="m-2" as={Link} to="/signup" variant="info">
              Sign Up
            </Button>
          </div>
        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;