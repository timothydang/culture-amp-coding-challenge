import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import { CacheProvider } from 'rest-hooks';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should rendered without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./../index.js');
    expect(ReactDOM.render).toHaveBeenCalledWith(<CacheProvider><App /></CacheProvider>, div);
  });
});
