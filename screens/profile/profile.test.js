import React from 'react';
import { render } from '../../test-utils.js';
import ProfilePage from './profile.js';

describe('Profile page', () => {
  it('should render the profile page', () => {
    const { getByTestId, getByText } = render(<ProfilePage testID="profile-page" />);

    expect(getByTestId('profile-page')).toContainElement(getByText('Profile'));
  });
});
