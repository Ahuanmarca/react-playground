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
      <p>
        <a target="blank" href="https://github.com/Ahuanmarca/react-playground/blob/fc9533b6a3cf59bf945d94c80998b907fd2eb306/src/pages/KeyboardInput/KeyboardInput.jsx">
          code
        </a>
      </p>
      <h2>Key: {input.key}</h2>
      <h2>Code: {input.code}</h2>
    </>
  );
}

export default KeyboardInput;
