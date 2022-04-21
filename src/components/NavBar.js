import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div className="fixed-top">
      <Navbar
        variant="dark"
        expand="lg"
        style={{ backgroundColor: "#4682B4", color: "white" }}
      >
        <Container>
          <Navbar.Brand href="/">talento</Navbar.Brand>
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
