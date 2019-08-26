import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Component from './../SurveyDetails';

const history = createMemoryHistory({ initialEntries: ['/'] });
jest.mock('./../../components/Survey', () => MockSurvey);

function MockSurvey () {
  return (
    <h1 data-testid="survey">Mock Survey</h1>
  )
};

const createComponent = () => {
  return render(
    <Router history={history}>
      <Component match={history.match} />
    </Router>
  )
};

afterEach(cleanup);

describe('SurveyDetails page component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should be rendered on the page properly', () => {
    jest.spyOn(history, 'push');

    const { getByTestId } = createComponent();
    expect(getByTestId('survey')).toHaveTextContent('Mock Survey');

    fireEvent.click(getByTestId('backButton'));
    expect(history.push).toHaveBeenCalledWith('/');
  });
})
