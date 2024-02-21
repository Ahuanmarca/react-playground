import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
// My components
import Navbar from "../Navbar";
// My pages
import Home from "../../pages/Home";
import KeyboardInput from "../../pages/KeyboardInput";
import MousePosition from "../../pages/MousePosition";
import SortableTable from "../../pages/SortableTable"

function App() {
  return (
    <>
      <Navbar />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keyboardinput" element={<KeyboardInput />} />
          <Route path="/showmouseposition" element={<MousePosition />} />
          <Route path="/sortabletable" element={<SortableTable />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
