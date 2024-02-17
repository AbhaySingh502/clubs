import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import '../css/team.css';
const Red = {
  color: '#C21717',
};
const Blue = {
  color: '#003f87',
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const shadowStyle = {
    backgroundColor: '#f0f8ff',
    boxShadow: '5px 5px 20px black', // Adjust the values as needed
  };
  const mobileMenuStyle = {
    position: 'absolute',
    top: '60px', // Adjust the top position based on your header height
    width: '100%',
    backgroundColor: '#f0f8ff',
    boxShadow: '5px 5px 20px black', // Adjust the values as needed
    zIndex: 1000, // Ensure it's above other elements
  };
  return (
    <div className="header" style={shadowStyle}>
      <div className="container">
        <Navbar expand="md">
          <Navbar.Brand>
            <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
              <h2>
                <span style={Red}>STUDENT LIFE</span>
                <span> @</span>
                <span style={Blue}> IIT JAMMU</span>
              </h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle}>
            <MenuIcon />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto w-50 justify-content-evenly">
              <Nav.Item>
                <Link to="/" className="nav-link fs-5 text-primary">
                  HOME
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/Clubs" className="nav-link fs-5 text-primary">
                  CLUBS
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/Sports" className="nav-link fs-5 text-primary">
                  SPORTS
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/Gallery" className="nav-link fs-5 text-primary">
                  GALLERY
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;



