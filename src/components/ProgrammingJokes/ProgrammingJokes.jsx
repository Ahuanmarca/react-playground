import React from "react";
import Button from "react-bootstrap/Button";

const ENDPOINT =
  "https://official-joke-api.appspot.com/jokes/programming/random";

function ProgrammingJokes() {
  const [showingPunchline, setShowingPunchline] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetcher(endpoint) {
      const response = await fetch(endpoint);
      const json = await response.json();
      setData(data);
      console.log(json);
    }
    fetcher(ENDPOINT);
  }, [data]);

  return (
    <>
      <h1>Programming Jokes</h1>
      <p>Fetching data from {ENDPOINT}</p>
    </>
  );
}

export default ProgrammingJokes;
