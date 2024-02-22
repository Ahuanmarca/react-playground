import React from "react";
import Button from "react-bootstrap/Button";

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
