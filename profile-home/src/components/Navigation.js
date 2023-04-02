import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';

const BASE_URL = new URL(window.location.href).origin

function Navigation() {
  return (
    <div className="navbar-position">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={`${BASE_URL}/`}>HOME</Nav.Link>
              <Nav.Link href={`${BASE_URL}/about`}>ABOUT</Nav.Link>
              <NavDropdown title="MY WORK" id="basic-nav-dropdown">
                <NavDropdown.Item href={`${BASE_URL}/projects`}>PROJECTS</NavDropdown.Item>
                <NavDropdown.Item href={`${BASE_URL}/resume`}>RESUME</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;