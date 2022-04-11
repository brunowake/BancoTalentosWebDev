import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#556B2F" }}>
        <Container>
          <Navbar.Brand href="/">lookUp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Perfis</Nav.Link>
              <Nav.Link href="/criar">Cadastro</Nav.Link>
              <Nav.Link href="/buscarCv">Editar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
