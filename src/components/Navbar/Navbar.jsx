import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function MyNavbar({ showLoginModal }) {
  return (
    <Navbar className="sticky-top bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Link className="navbar-brand" to="/">Playground</Link>
        <Nav className="me-auto">
          <button className="nav-link" onClick={showLoginModal}>
            Login Modal
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
