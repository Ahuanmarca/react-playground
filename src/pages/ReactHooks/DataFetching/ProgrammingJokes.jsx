import React from 'react';
import axios from 'axios';
import useToggle from '../../../hooks/use-toggle';
import { CODE_LINKS } from '../../../data/links';

const ENDPOINT =
  'https://official-joke-api.appspot.com/jokes/programming/random';
// const ERROR_ENDPOINT =
// 'https://jor-test-api.vercel.app/api/contact?simulatedError=true';

function ProgrammingJokes() {
  const [joke, setJoke] = React.useState({});
  const [showPunchline, toggleShowPunchline] = useToggle(false);

  // idle | loading | success | error
  const [status, setStatus] = React.useState('idle');

  async function getJoke() {
    setStatus(() => 'loading');
    showPunchline && toggleShowPunchline();

    const response = await axios.get(ENDPOINT);
    console.log(response.request.status);

    if (response.request.status === 200) {
      setJoke(() => ({
        setup: response.data[0].setup,
        punchline: response.data[0].punchline,
      }));
      setStatus(() => 'success');
    } else {
      setStatus('error');
      console.log('Something went wrong...');
    }
  }

  if (status === 'error') {
    return <p>Something went wrong!</p>
  }

  return (
    <>
      <h1>Programming Jokes</h1>
      <button onClick={getJoke}>Get a programming joke</button>
      <div>
        {status === 'loading' && <p>loading...</p>}
        {status === 'success' && (
          <>
            <p>{joke.setup}</p>
            <button disabled={showPunchline} onClick={toggleShowPunchline}>Reveal punchline</button>
            {showPunchline && <p>{joke.punchline}</p>}
          </>
        )}
      </div>
      <p>
        <a
          href={CODE_LINKS.programmingJokes}
          target='blank'
        >
          🔗 code
        </a>
      </p>
    </>
  );
}

export default ProgrammingJokes;
