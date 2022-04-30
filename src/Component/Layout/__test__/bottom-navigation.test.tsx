import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {BottomNavigation} from '../BottomNavigation';

describe('<Header>', () => {
  const mockFunction = jest.fn();
  beforeEach(() => {
    const component = <BottomNavigation />;
    instance = render(component);
  });

  /**
   * @type {RenderAPI}
   */
  let instance: any;

  it('Should render header with home click', async () => {
    const nextButton = instance.getByTestId('home');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });
});