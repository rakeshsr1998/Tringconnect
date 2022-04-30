import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { BottomNavigation } from '../BottomNavigation';

describe('<Header>', () => {
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
    buttonClick(nextButton);

  });

  it('Should render header with call click', async () => {
    const nextButton = instance.getByTestId('cal');
    buttonClick(nextButton);

  });

  it('Should render header with post click', async () => {
    const nextButton = instance.getByTestId('post');
    buttonClick(nextButton);

  });

  it('Should render header with folder click', async () => {
    const nextButton = instance.getByTestId('folder');
    buttonClick(nextButton);

  });

  it('Should render header with chat click', async () => {
    const nextButton = instance.getByTestId('chat');
    buttonClick(nextButton);
  });

});

const buttonClick = (nextButton: any) => {
  const mockFunction = jest.fn();
  fireEvent(nextButton, 'onPress');
  expect(mockFunction).toMatchSnapshot();
}