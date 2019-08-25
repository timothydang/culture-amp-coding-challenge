import React from 'react';
import { Header, Button, Label, Tab, Grid, Divider, Segment, Loader } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { useResource } from 'rest-hooks';
import QuestionList from './QuestionList';
import SurveyResource from './../resources/SurveyResource';

function Survey({ history, id }) {
  const survey = useResource(SurveyResource.detailShape(), { id });

  const { themes } = survey;
  const tabPanes = [];

  const navigateToList = () => {
    history.push('/')
  }

  themes.forEach(theme => {
    tabPanes.push(
      {
        menuItem: theme.name,
        render: () => {
          return (
            <Tab.Pane>
              { theme.questions && <QuestionList questions={theme.questions} /> }
            </Tab.Pane>
          )
        }
      }
    )
  });

  return (
    <Grid>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column width={8}>
        <Header as="h2" content={survey.name} textAlign="center" />
        <Divider hidden />
        <Segment compact>
          <span>Participation rate:  </span>
          <Label>{ (survey.response_rate*100).toFixed(1) }%</Label>
        </Segment>
        {
          themes && tabPanes.length > 0 ? <Tab panes={tabPanes} /> : <Loader active inline='centered' />
        }
        <Divider hidden />
        <Button onClick={navigateToList}>Back to survey list</Button>
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Grid>
  );
}

export default withRouter(Survey)
