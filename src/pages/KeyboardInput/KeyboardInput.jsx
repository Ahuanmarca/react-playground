import React from "react";
import Nav from "react-bootstrap/Nav";

function KeyboardInput() {
  const [input, setInput] = React.useState({
    key: "",
    code: "",
  });

  console.log(input);

  React.useEffect(() => {
    function handleKeyDown(e) {
      setInput((prevInput) => {
        const nextInput = { ...prevInput };
        nextInput.key = e.key;
        nextInput.code = e.code;
        return nextInput;
      });
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    if(input.code !== "") {
      const timeout = window.setTimeout(() => {
        setInput((prevInput) => {
          const nextInput = {...prevInput};
          nextInput.key = "";
          nextInput.code = "";
          return nextInput;
        })
      }, 500);
      return () => window.clearTimeout(timeout);
    }
  }, [input])

  return (
    <>
      <h1>Keyboard Input</h1>
      <p>
        This component shows the keyboard input by adding an event listener on
        the window object. We do this inside a useEffect hook, which returns a
        clean up function to remove the event listener when the component
        unmounts.
      </p>
      <p>
        <Nav.Link
          target="blank"
          href="https://github.com/Ahuanmarca/react-playground/blob/fc9533b6a3cf59bf945d94c80998b907fd2eb306/src/pages/KeyboardInput/KeyboardInput.jsx"
        >
          🔗 code
        </Nav.Link>
      </p>
      <h2>Key: {input.key}</h2>
      <h2>Code: {input.code}</h2>
    </>
  );
}

export default KeyboardInput;
