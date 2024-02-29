// import React from 'react';
import useSWR from 'swr';
import useToggle from '../../../hooks/use-toggle';

const ENDPOINT = 'https://jor-test-api.vercel.app/api/get-temperature';
const ERROR_ENDPOINT = 'https://jor-test-api.vercel.app/api/get-temperature?simulatedError=true'

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  if (!json.ok) {
    throw json;
  }

  return json;
}

function FetchingOnMount() {
  const [simulatingError, toggleSimulatingError] = useToggle(false);
  const { data, error, isLoading } = useSWR(simulatingError ? ERROR_ENDPOINT : ENDPOINT, fetcher);

  console.log(data, error);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <p>Something went wrong</p>
        <button onClick={() => toggleSimulatingError()}>Disable simulated error</button>
      </>
    )
    
  }

  return (
    <>
      <div>
        <h1>Fetching On Mount</h1>
      </div>
      <div>
        <p>
          This page uses SWR to fetch data on mount and periodically revalidate
          the data to prevent it from becoming too stale.
        </p>
      </div>
      <div>
        <button onClick={() => {toggleSimulatingError()}}>Simulate error</button>
      </div>
      <hr />
      <h2>Current temperature</h2>
      {typeof data?.temperature === 'number' && (
        <span>{data.temperature}°C</span>
      )}
    </>
  );
}

export default FetchingOnMount;
