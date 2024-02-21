import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function MyNavbar() {
  return (
    <Navbar className="sticky-top bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">React Playground</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/keyboardinput">Keyboard Input</Nav.Link>
          <Nav.Link>Mouse Position</Nav.Link>
          <Nav.Link>Sortable Table</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
