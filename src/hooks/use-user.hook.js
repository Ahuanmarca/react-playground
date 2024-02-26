import React from 'react';
import useSWR from 'swr';

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/get-current-user';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  
  if (!json.ok) {
    throw json;
  }
  
  return json;
}

function useUser() {
  const { data, error } = useSWR(ENDPOINT, fetcher);
  
  return data?.user;
}

export default useUser;