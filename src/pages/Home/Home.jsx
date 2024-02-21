import React from "react";
import Button from "react-bootstrap/Button";

function Home() {
  const [clicks, setClicks] = React.useState(0);

  return (
    <>
      <h1>hello, world</h1>
      <Button onClick={() => setClicks((prev) => prev + 1)}>{clicks}</Button>
    </>
  );
}

export default Home;
