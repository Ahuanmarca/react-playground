import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import KeyboardInput from "../../pages/KeyboardInput";
import MousePosition from "../../pages/MousePosition";
import SortableTable from "../../pages/SortableTable";
import ClickCounter from "../../pages/ClickCounter";
import DriftingTimers from "../../pages/DriftingTimers";
import LoginForm from "../../pages/LoginForm";
import LanguageSelector from "../../pages/LanguageSelector";

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
          <Route path="/clickcounter" element={<ClickCounter />} />
          <Route path="/driftingtimers" element={<DriftingTimers />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/languageselector" element={<LanguageSelector />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
