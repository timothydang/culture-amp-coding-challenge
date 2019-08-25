import React from 'react';
import { Table } from 'semantic-ui-react';
import Question from './Question';

export default function QuestionList({ questions }) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Question</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          questions.map((question, index) =>
            <Question
              key={index}
              description={question.description}
              responses={question.survey_responses}
              />
          )
        }
      </Table.Body>
    </Table>
  );
}
