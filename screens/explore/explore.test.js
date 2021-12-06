import React from 'react';
import { render } from '../../test-utils.js';
import ExplorePage from './explore.js'

describe('Explore page', () => {
  it('should render the home page', () => {
    const { getByTestId, getByText } = render(<ExplorePage testID="explore-page" />);

    expect(getByTestId('explore-page')).toContainElement(getByText('Explore'));
  });
});
