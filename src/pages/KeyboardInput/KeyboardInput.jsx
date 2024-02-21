import React from "react";
// import './KeyboardInput.css';

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

  return (
    <>
      <h1>Keyboard Input</h1>
      <p>
        This component shows the keyboard input by adding an event listener on
        the window object.
      </p>
      <h2>Key: {input.key}</h2>
      <h2>Code: {input.code}</h2>
    </>
  );
}

export default KeyboardInput;
