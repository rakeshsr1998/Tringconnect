import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Header} from '../Header';

describe('<Header>', () => {
  const mockFunction = jest.fn();
  beforeEach(() => {
    const component = <Header />;
    instance = render(component);
  });

  /**
   * @type {RenderAPI}
   */
  let instance: any;

  it('Should render header with menu click', async () => {
    const nextButton = instance.getByTestId('header');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render header with bell click', async () => {
    const nextButton = instance.getByTestId('bell');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render header with notification click', async () => {
    const nextButton = instance.getByTestId('notification');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });
});
