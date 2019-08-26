import React from 'react';
import { Message } from 'semantic-ui-react';

export default function ErrorMessage({ error }) {
  return (
    error &&
      <React.Fragment>
        <Message error data-testid="errorMessage">
          <p>Error loading survey. Please try again later.</p>
          <p><strong>{ error.status } { error.response && error.response.statusText }</strong></p>
        </Message>
      </React.Fragment>
  );
}
