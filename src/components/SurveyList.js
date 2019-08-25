import React from 'react';
import { useResource } from 'rest-hooks';
import { withRouter } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react'
import SurveyResource from './../resources/SurveyResource';

function SurveyList({ history }) {
  const surveys = useResource(SurveyResource.listShape(), {});

  return (
    <section>
      <Card.Group centered>
        {
          surveys.map(survey => {
            const surveyId = survey.pk()
            const navigateToSurvey = (history, surveyId) => {
              history.push(`/survey/${surveyId}`)
            }

            return (
              <Card key={surveyId} onClick={(e) => navigateToSurvey(history, surveyId)}>
                <Card.Content>
                  <Card.Header>{ survey.name }</Card.Header>
                  <Card.Meta>Participation: { (survey.response_rate*100).toFixed(1) }%</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Icon name='user'/>{ survey.participant_count }
                </Card.Content>
              </Card>
            )
          })
        }
      </Card.Group>
    </section>
  );
}

export default withRouter(SurveyList)
