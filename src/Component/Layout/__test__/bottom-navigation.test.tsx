import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
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
  let instance: RenderAPI;

  it('Should render header with home click', async () => {
    const nextButton = instance.getByTestId('home');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render header with call click', async () => {
    const nextButton = instance.getByTestId('cal');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render header with post click', async () => {
    const nextButton = instance.getByTestId('post');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render header with folder click', async () => {
    const nextButton = instance.getByTestId('folder');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render header with chat click', async () => {
    const nextButton = instance.getByTestId('chat');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });
});
