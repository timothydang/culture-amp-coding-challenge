import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Component from './../Question';

const createComponent = (description, responses) => {
  return render(
    <table>
      <tbody>
        <Component description={description} responses={responses} />
      </tbody>
    </table>
  )
};

afterEach(cleanup);

describe('Question component', () => {
  it('should be rendered on the page properly', () => {
    const mockResponse = [];
    const { getByText, getByTestId } = createComponent('Question 1', mockResponse);
    expect(getByText('Question 1')).toBeVisible();
    expect(getByTestId('rating')).toHaveTextContent('0');
  });

  describe('single questions', () => {
    it('should be rendered on the page properly with rating', () => {
      const mockResponse = [{
        response_content: '4'
      }];
      const mockQuestionText = 'Question with some rating';

      const { getByText, getByTestId } = createComponent(mockQuestionText, mockResponse);
       expect(getByText(mockQuestionText)).toBeVisible();
      expect(getByTestId('rating')).toHaveTextContent('4');
    });

    it('should be rendered on the page properly without rating', () => {
      const mockResponse = [];
      const mockQuestionText = 'Question without any rating';

      const { getByText, getByTestId } = createComponent(mockQuestionText, mockResponse);
      expect(getByText(mockQuestionText)).toBeVisible();
      expect(getByTestId('rating')).toHaveTextContent('0');
    });
  });

  describe('multiple questions', () => {
    it('should be rendered on the page properly with all rating values', () => {
      const mockResponse = [{
        response_content: '4'
      }, {
        response_content: '3'
      },{
        response_content: '5'
      },{
        response_content: '2'
      }];
      const mockQuestionText = 'Question with some rating';

      const { getByText, getByTestId } = createComponent(mockQuestionText, mockResponse);
       expect(getByText(mockQuestionText)).toBeVisible();
      expect(getByTestId('rating')).toHaveTextContent('3.5');
    });

    it('should be rendered on the page properly with some missing rating values', () => {
      const mockResponse = [{
        response_content: ''
      }, {
        response_content: '3'
      },{
        response_content: '5'
      },{
        response_content: ''
      }];
      const mockQuestionText = 'Question with some rating';

      const { getByText, getByTestId } = createComponent(mockQuestionText, mockResponse);
       expect(getByText(mockQuestionText)).toBeVisible();
      expect(getByTestId('rating')).toHaveTextContent('4');
    });
  });
})
