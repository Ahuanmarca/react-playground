import React from 'react';

import TextInput from './TextInput';
import SearchResult from './SearchResult';

const ENDPOINT = 'https://jor-test-api.vercel.app/api/book-search';
const STATUS = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

function BookSearch() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);
  const [status, setStatus] = React.useState(STATUS.idle);

  async function handleSubmit(e, endpoint) {
    e.preventDefault();
    setStatus(() => STATUS.loading);
    const response = await fetch(endpoint);
    const json = await response.json();

    if (json.ok) {
      setSearchResults(() => json.results);
      setStatus(() => STATUS.success);
    } else {
      setStatus(() => STATUS.error);
    }
  }

  return (
    <>
      <header
        onSubmit={(e) => {
          handleSubmit(e, `${ENDPOINT}?searchTerm=${searchTerm}`);
        }}
      >
        <form>
          <TextInput
            required={true}
            label="Search"
            placeholder="The Fifth Season"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button>Go!</button>
        </form>
      </header>

      <main>
        <div className="search-results">
          <h2>Search Results:</h2>

          {status === STATUS.loading && <p>Loading...</p>}
          {status === STATUS.error && <p>Something went wrong</p>}

          {status === STATUS.success &&
            searchResults.map((result) => (
              <SearchResult key={result.name} result={result} />
            ))}
        </div>
      </main>
    </>
  );
}

export default BookSearch;
