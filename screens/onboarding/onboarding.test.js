import React from 'react';
import { render } from '../../test-utils.js';
import OnboardingPage from './onboarding.js';

describe('Onboarding page', () => {
  //TO-DO: See https://github.com/callstack/react-native-testing-library/issues/743
  xit('should render the Onboarding page', async () => {
    const { getByTestId, getByText } = render(<OnboardingPage testID="profile-page" />);
    await asyncOperationOnAsyncStorage();

    expect(getByTestId('onboarding-page')).toContainElement(getByText('Done with React Native Onboarding Swiper'));
  });
});
