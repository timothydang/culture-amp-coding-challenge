import React from 'react';
import { Header, Label, Tab, Divider, Segment, Loader } from 'semantic-ui-react';
import { useResource, NetworkErrorBoundary } from 'rest-hooks';
import QuestionList from './QuestionList';
import SurveyResource from './../resources/SurveyResource';
import ErrorMessage from './Error';

export default function Survey({ id }) {
  const survey = useResource(SurveyResource.detailShape(), { id });

  const { themes } = survey;
  const tabPanes = [];

  if(themes !== '') {
    themes.forEach(theme => {
      tabPanes.push(
        {
          menuItem: theme.name,
          render: () => {
            return (
              <Tab.Pane>
                <QuestionList questions={theme.questions} />
              </Tab.Pane>
            )
          }
        }
      )
    });
  }

  const hasSurveyDetails = themes !== '';
  const hasSurveyThemes = hasSurveyDetails && tabPanes.length > 0;

  return (
    <React.Fragment>
      <NetworkErrorBoundary fallbackComponent={ErrorMessage}>
        <Header data-testid="surveyName" as="h2" content={survey.name} textAlign="center" />
        <Divider hidden />
        <Segment compact>
          <span>Participation rate:  </span>
          <Label data-testid="surveyRate">{ (survey.response_rate*100).toFixed(1) }%</Label>
        </Segment>
        {
          hasSurveyDetails ? hasSurveyThemes && <Tab panes={tabPanes} /> : <Loader active inline='centered' />
        }
        <Divider hidden />
      </NetworkErrorBoundary>
    </React.Fragment>
  );
}
