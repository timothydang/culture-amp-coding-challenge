import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Component from './../Error';

const createComponent = (error) => {
  return render(
    <Component error={error} />
  )
};

afterEach(cleanup);

describe('Error component', () => {
  it('should be rendered on the page properly', () => {
    const mockError = {
      status: 404,
      response: {
        statusText: 'Not found'
      }
    }
    const { getByTestId } = createComponent(mockError);
    expect(getByTestId('errorMessage')).toBeInTheDocument();
    expect(getByTestId('errorMessage')).toHaveTextContent('Not found');
  });
})
