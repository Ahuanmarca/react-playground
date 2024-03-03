import React from "react";
import Nav from "react-bootstrap/Nav";
import { CODE_LINKS } from "../../data/links";

function MousePosition() {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <h1>Show Mouse Position</h1>
      <p>
        This component shows the mouse position by adding a
        &rsquo;mousemove&rsquo; event listener to the window object. We do this
        inside a useEffect hook, then return a clean up function to remove the
        event listener when the component unmounts.
      </p>
      <p>
        <Nav.Link
          href={CODE_LINKS.mousePosition}
          target="blank"
        >
          🔗 code
        </Nav.Link>
      </p>
      <h2>
        {mousePosition.x} / {mousePosition.y}
      </h2>
    </>
  );
}

export default MousePosition;
