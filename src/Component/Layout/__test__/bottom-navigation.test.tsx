import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { BottomNavigation } from '../BottomNavigation';

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

    const chat = instance.getByTestId('chat');
    fireEvent(chat, 'onPress');

    const folder = instance.getByTestId('folder');
    fireEvent(folder, 'onPress');

    const cal = instance.getByTestId('cal');
    fireEvent(cal, 'onPress');

    const post = instance.getByTestId('post');
    fireEvent(post, 'onPress');

  });
});