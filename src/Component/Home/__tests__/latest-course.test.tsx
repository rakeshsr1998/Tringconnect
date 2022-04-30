import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import {LatestCourses} from '../LatestCourses';

describe('<LatestCourses>', () => {
  const mockFunction = jest.fn();

  /**
   * @type {RenderAPI}
   */
  let instance;

  it('Should render comments with data', async () => {
    const component = <LatestCourses />;
    instance = render(component);
  });

  it('Should render header with comments like click', async () => {
    const nextButton = render(<LatestCourses />).getByTestId('like-0');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });
});
