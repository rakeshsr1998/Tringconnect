import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Comments} from '../Comments';

const data = {
  id: 1,
  name: 'Kreethiraj K',
  role: 'Product Delivery Manager',
  post: 'Successfully delivered this great kitchen app to market. Kudos the entire team.',
  date: '2017-01-01',
  time: '12:34:56',
  likes: 240,
  comments: 12,
  images: [
    'https://images.unsplash.com/photo-1564758596151-c17d1590f483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  ],
};
describe('<Comments in screen page>', () => {
  const mockFunction = jest.fn();

  it('Should render comments with data', async () => {
    const component = <Comments data={data} i={0} />;
    render(component);
  });

  it('Should render header with comments like click', async () => {
    const nextButton = render(<Comments data={data} i={0} />).getByTestId(
      'like',
    );
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render header with comments like click', async () => {
    const nextButton = render(<Comments data={data} i={0} />).getByTestId(
      'showDiv',
    );
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });
});
