import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar className="sticky-top bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">React Playground</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/keyboardinput">
            Keyboard Input
          </Link>
          <Link className="nav-link" to="/showmouseposition">
            Mouse Position
          </Link>
          <Link className="nav-link" to="/sortabletable">
            Sortable Table
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
