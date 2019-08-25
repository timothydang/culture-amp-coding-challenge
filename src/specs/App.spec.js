import React from 'react';
import App from './../App';
import { render } from '@testing-library/react';

describe('Application root', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Surveys')).toBeInTheDocument();
  });
});
