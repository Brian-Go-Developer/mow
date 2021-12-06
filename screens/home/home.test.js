import React from 'react';
import { render } from '../../test-utils.js';
import HomePage from './home.js';

describe('Home page', () => {
  it('should render the home page', () => {
    const { getByTestId, getByText } = render(<HomePage testID="home-page" />);

    expect(getByTestId('home-page')).toContainElement(getByText('Home'));
  });
});
