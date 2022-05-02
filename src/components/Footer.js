import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#4682B4", color: "white", width: "100vw" }}
    >
      <Container>
        <Navbar.Text>
          criado por{" "}
          <a href="https://www.linkedin.com/in/bruno-wake-moraes-go/">
            Bruno Wake
          </a>{" "}
          e{" "}
          <a href="https://www.linkedin.com/in/thais-ribeiro-machado/">
            Thaís Machado
          </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
