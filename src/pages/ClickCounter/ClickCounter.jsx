import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function ClickCounter() {
  const [clicks, setClicks] = React.useState(0);

  React.useEffect(() => {
    document.title = `${clicks} Clicks!`;
    return () => (document.title = "React Playground");
  }, [clicks]);

  return (
    <>
      <h1>Click Counter</h1>
      <p>This component counts clicks and displays the total.</p>
      <p>
        <strong>The total is also displayed on the browser tab.</strong> We
        achieve this with useEffect and useRef.
      </p>
      <p>
        <Nav.Link
          href="https://github.com/Ahuanmarca/react-playground/blob/51331f2a7d063b5a6f7b550811a04fe153369b99/src/pages/ClickCounter/ClickCounter.jsx"
          target="blank"
        >
          code
        </Nav.Link>
      </p>
      <h2>Clicks: {clicks}</h2>
      <Button onClick={() => setClicks(clicks + 1)} variant="primary">
        Click me!
      </Button>{" "}
      <Button onClick={() => setClicks(0)} variant="danger">
        Reset count
      </Button>
    </>
  );
}

export default ClickCounter;
