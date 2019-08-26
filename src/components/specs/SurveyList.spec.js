import React, { Suspense } from 'react';
import { MockProvider } from 'rest-hooks/test';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Component from './../SurveyList';
import SurveyResource from './../../resources/SurveyResource';

const history = createMemoryHistory({ initialEntries: ['/'] });

const createComponent = (surveys) => {
  const results = [
    {
      request: SurveyResource.listShape(),
      params: {},
      result: surveys,
    }
  ];

  return render(
    <MockProvider results={results}>
      <Router history={history}>
        <Suspense fallback={<p>loading</p>}>
          <Component />
        </Suspense>
      </Router>
    </MockProvider>
  )
};

afterEach(cleanup);

describe('Survey List component', () => {
  it('should be rendered on the page properly', () => {
    const mockFirstSurveyName = 'Survey 1';
    const mockFirstSurveyId = '1';
    const mockFirstSurveyRate = 0.4433;

    const mockSecondSurveyName = 'Survey ABC';
    const mockSecondSurveyId = '123';
    const mockSecondSurveyRate = 0.85709;

    const surveys = {
      survey_results: [{
        name: mockFirstSurveyName,
        url: `/surveys/${mockFirstSurveyId}`,
        response_rate: mockFirstSurveyRate
      }, {
        name: mockSecondSurveyName,
        url: `/surveys/${mockSecondSurveyId}`,
        response_rate: mockSecondSurveyRate
      }]
    }

    jest.spyOn(history, 'push');

    const { getAllByTestId } = createComponent(surveys);
    const cards = getAllByTestId('surveyCard');

    expect(cards.length).toEqual(2);
    expect(cards[0]).toHaveTextContent(mockFirstSurveyName);
    expect(cards[0]).toHaveTextContent('44.3%');

    expect(cards[1]).toHaveTextContent(mockSecondSurveyName);
    expect(cards[1]).toHaveTextContent('85.7%');

    fireEvent.click(cards[0]);
    expect(history.push).toHaveBeenCalledWith(`/survey/${mockFirstSurveyId}`);
  });

  it('should not be rendered on the page if there is no surveys', () => {
    const surveys = {
      survey_results: []
    }
    const { getByTestId, queryByTestId } = createComponent(surveys);
    const cards = queryByTestId('surveyCard');
    expect(cards).not.toBeInTheDocument();
    expect(getByTestId('errorMessage')).toBeVisible();
  });
})
