// import React from 'react';
import useSWR from 'swr';

const ENDPOINT = 'https://jor-test-api.vercel.app/api/get-temperature';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
}

function FetchingOnMount() {
  const { data, error } = useSWR(ENDPOINT, fetcher);

  console.log(data, error);

  return (
    <>
      <h1>Fetching On Mount</h1>
      <p>
        This page uses SWR to fetch data on mount and periodically revalidate
        the data to prevent it from becoming too stale.
      </p>
      <hr />
      <h2>Current temperature</h2>
      {typeof data?.temperature === 'number' && (
        <span>{data.temperature}°C</span>
      )}
    </>
  );
}

export default FetchingOnMount;
