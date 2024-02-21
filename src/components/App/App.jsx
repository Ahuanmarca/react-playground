import Navbar from "../Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import KeyboardInput from "../../pages/KeyboardInput";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keyboardinput" element={<KeyboardInput />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
