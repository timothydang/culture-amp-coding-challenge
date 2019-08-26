import React from 'react';
import App from './../App';
import { render } from '@testing-library/react';

describe('App component', () => {
  it('should rendered without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Surveys')).toBeInTheDocument();
  });
});
