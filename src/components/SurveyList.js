import React from 'react';
import { useResource } from 'rest-hooks';
import { withRouter } from 'react-router-dom';
import { Card, Icon, Message } from 'semantic-ui-react'
import SurveyResource from './../resources/SurveyResource';

function SurveyList({ history }) {
  const surveys = useResource(SurveyResource.listShape(), {});

  return (
    <section>
      { surveys && surveys.length > 0 ?
        <Card.Group centered>
          {
            surveys.map(survey => {
              const surveyId = survey.pk()
              const navigateToSurvey = (history, surveyId) => {
                history.push(`/survey/${surveyId}`)
              }

              return (
                <Card data-testid="surveyCard" key={surveyId} onClick={(e) => navigateToSurvey(history, surveyId)}>
                  <Card.Content>
                    <Card.Header>{ survey.name }</Card.Header>
                    <Card.Meta>Participation: { (survey.response_rate*100).toFixed(1) }%</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="user"/>{ survey.participant_count }
                  </Card.Content>
                </Card>
              )
            })
          }
        </Card.Group>
        : <Message warning data-testid="errorMessage">There is no survey available.</Message>
      }
    </section>
  );
}

export default withRouter(SurveyList)
