import React from 'react';
import { Table } from 'semantic-ui-react';

export default function Question({ description, responses }) {
  const validResponses = responses.filter((response) => response.response_content !== '')
  const total = validResponses.reduce((acc, response) => acc + parseInt(response.response_content), 0)
  const rating = (total / validResponses.length).toFixed(1)

  return (
    <Table.Row>
      <Table.Cell>{ description}</Table.Cell>
      <Table.Cell singleLine  textAlign='center'>{ rating }</Table.Cell>
    </Table.Row>
  );
}
