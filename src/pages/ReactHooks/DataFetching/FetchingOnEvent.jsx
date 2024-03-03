import React from 'react';
const ENDPOINT = 'https://jor-test-api.vercel.app/api/contact';
// To simulate error use -> 'https://jor-test-api.vercel.app/api/contact?simulatedError=true';
import * as Form from '@radix-ui/react-form';
import { CODE_LINKS } from '../../../data/links';

function FetchingOnEvent() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  // idle | loading | success | error
  const [status, setStatus] = React.useState('idle');

  const id = React.useId();
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');

    const response = await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        email,
        message,
      }),
    });
    const json = await response.json();

    if (json.ok) {
      setStatus('success');
      setMessage('');
    } else {
      setStatus('error');
    }
  }

  return (
    <>
      <h1>Fetching on Event</h1>

      <Form.Root onSubmit={handleSubmit}>
        {/* EMAIL */}
        <Form.Field name="email">
          <div>
            <Form.Label>Email</Form.Label>
          </div>
          <div>
            <Form.Control asChild>
              <input
                type="email"
                disabled={status === 'loading'}
                id={emailId}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </Form.Control>
            {/* <Form.Message /> */}
            {/* <Form.ValidityState /> */}
          </div>
        </Form.Field>

        {/* QUESTION */}
        <Form.Field name="question">
          <div>
            <Form.Label>Question</Form.Label>
          </div>
          <div>
            <Form.Control asChild>
              <textarea
                required={true}
                disabled={status === 'loading'}
                id={messageId}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </Form.Control>
          </div>
        </Form.Field>
        {/* <Form.Message /> */}
        {/* <Form.ValidityState /> */}

        <Form.Submit asChild>
          <button disabled={status === 'loading'}>
            {status === 'loading' ? 'Submitting...' : 'Post Question'}
          </button>
        </Form.Submit>
        {status === 'success' && <p>Message sent!</p>}
        {status === 'error' && <p>Something went wrong!</p>}
      </Form.Root>
      <p>
        <a href={CODE_LINKS.fetchingOnEvent} target="blank">
          🔗 code
        </a>
      </p>
    </>
  );
}

export default FetchingOnEvent;
