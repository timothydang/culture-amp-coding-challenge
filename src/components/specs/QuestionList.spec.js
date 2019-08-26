import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Component from './../QuestionList';

const createComponent = (questions) => {
  return render(
    <Component questions={questions} />
  )
};

afterEach(cleanup);

describe('Question List component', () => {
  it('should be rendered on the page properly', () => {
    const mockQuestions = [{
      description: 'Question 1'
    }, {
      description: 'Question 2'
    }];
    const { getByTestId, getAllByTestId } = createComponent(mockQuestions);
    expect(getByTestId('questionList')).toBeVisible();
    expect(getAllByTestId('rating').length).toEqual(2);
  });

  it('should not display list of questions if there is none provided', () => {
    const mockQuestions = [];
    const { queryByTestId, getByTestId } = createComponent(mockQuestions);
    expect(queryByTestId('Rating')).not.toBeInTheDocument();
    expect(getByTestId('message')).toBeVisible();
    expect(getByTestId('message')).toHaveTextContent('No question available for this topic.');
  });
})
