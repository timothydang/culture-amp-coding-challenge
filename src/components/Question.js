import React from 'react';
import { Table } from 'semantic-ui-react';

export default function Question({ description, responses }) {
  const validResponses = responses ? responses.filter((response) => response.response_content !== '') : [];
  const total = validResponses.reduce((acc, response) => acc + parseInt(response.response_content), 0)
  const rating = (total !== 0 && validResponses.length > 0) ? (total / validResponses.length).toFixed(1) : 0;

  return (
    <Table.Row>
      <Table.Cell data-testid="question">{ description}</Table.Cell>
      <Table.Cell data-testid="rating" singleLine  textAlign='center'>{ rating }</Table.Cell>
    </Table.Row>
  );
}
