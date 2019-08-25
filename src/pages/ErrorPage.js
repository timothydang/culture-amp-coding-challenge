import React from 'react';

export default function ErrorPage({ error }) {
  return (
    <div>
      {error.status} {error.response && error.response.statusText}
    </div>
  );
}
