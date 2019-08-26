import React, { Suspense } from 'react';
import { MockProvider } from 'rest-hooks/test';
import { render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Component from './../Survey';
import SurveyResource from './../../resources/SurveyResource';

const history = createMemoryHistory({ initialEntries: ['/'] });

const createComponent = (surveyDetails, surveyId) => {
  const results = [
    {
      request: SurveyResource.detailShape(),
      params: { id: surveyId },
      result: surveyDetails,
    }
  ];

  return render(
    <MockProvider results={results}>
      <Router history={history}>
        <Suspense fallback={<p>loading</p>}>
          <Component id={surveyId} />
        </Suspense>
      </Router>
    </MockProvider>
  )
};

afterEach(cleanup);

describe('Survey component', () => {
  it('should be rendered on the page properly', () => {
    const surveyId = 1;
    const mockSurveyName = 'Survey 1';
    const mockSurveyParticipationRate = 0.8333;
    const survey = {
      survey_result_detail: {
        name: mockSurveyName,
        url: `/survey_results/${surveyId}`,
        response_rate: mockSurveyParticipationRate
      }
    }

    // jest.spyOn(history, 'push');

    const { queryByTestId, getByTestId } = createComponent(survey, surveyId);
    expect(getByTestId('surveyName')).toHaveTextContent(mockSurveyName);
    expect(getByTestId('surveyRate')).toHaveTextContent('83.3%');
    expect(queryByTestId('surveyTheme')).not.toBeInTheDocument();

    // fireEvent.click(getByTestId('backButton'));
    // expect(history.push).toHaveBeenCalledWith('/');
  });

  it('should be rendered with themes in tabs', () => {
    const surveyId = 2;
    const mockSurveyName = 'Survey 2';
    const mockSurveyParticipationRate = 0.20;
    const firstThemeText = 'Theme 123';
    const secondThemeText = 'Theme 456';
    const survey = {
      survey_result_detail: {
        name: mockSurveyName,
        url: `/survey_results/${surveyId}`,
        response_rate: mockSurveyParticipationRate,
        themes: [{
          name: firstThemeText,
          questions: []
        }, {
          name: secondThemeText,
          questions: [{
            description: 'Question 1'
          }]
        }]
      }
    }

    const { getByTestId, getByText } = createComponent(survey, surveyId);
    expect(getByTestId('surveyName')).toHaveTextContent(mockSurveyName);
    expect(getByTestId('surveyRate')).toHaveTextContent('20.0%');

    expect(getByText(firstThemeText)).toBeVisible();
    expect(getByText(secondThemeText)).toBeVisible();
  });
})
