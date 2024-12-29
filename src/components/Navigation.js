import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

function Navigation() {
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand >Home</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
       
              <LinkContainer to="/about">
              <Nav.Link >About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
              <Nav.Link >Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/information">
              <Nav.Link >Information</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/experience">
              <Nav.Link >Experience</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gallery">
              <Nav.Link >Image Gallery</Nav.Link>
              </LinkContainer>
           
              <NavDropdown title="CRUD" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <LinkContainer to="/crudlocal">
                  <Nav.Link >CRUD Local</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     );
}

export default Navigation;