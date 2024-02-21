import React from "react";
import Button from "react-bootstrap/Button";

function Home() {
  const [clicks, setClicks] = React.useState(0);

  return (
    <>
      <h1>hello, world</h1>
      <p>This page contains simple React examples to use as reference. Each one attempts to be self explanatory.</p>
      <Button onClick={() => setClicks((prev) => prev + 1)}>{clicks}</Button>
    </>
  );
}

export default Home;
