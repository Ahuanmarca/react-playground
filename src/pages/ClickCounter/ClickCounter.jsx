import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { CODE_LINKS } from "../../data/links";

function ClickCounter() {
  const [clicks, setClicks] = React.useState(0);

  React.useEffect(() => {
    document.title = `${clicks} Clicks!`;
    return () => (document.title = "React Playground");
  }, [clicks]);

  function badAddThree() {
    setClicks(clicks + 1);
    setClicks(clicks + 1);
    setClicks(clicks + 1);
  }

  function goodAddThree() {
    setClicks((prev) => prev + 1);
    setClicks((prev) => prev + 1);
    setClicks((prev) => prev + 1);
  }

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
          href={CODE_LINKS.clickCounter}
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
      </Button>{" "}
      <Button onClick={badAddThree} variant="warning">
        Bad Add Three
      </Button>{" "}
      <Button onClick={goodAddThree} variant="success">
        Good Add Three
      </Button>
    </>
  );
}

export default ClickCounter;
