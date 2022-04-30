import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {RenderImageOrVideo} from '../RenderImageVideo';

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

const data1 = {
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
    'https://images.unsplash.com/photo-1564758596151-c17d1590f483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1564758596151-c17d1590f483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1564758596151-c17d1590f483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  ],
};

describe('<Render image in screen page>', () => {
  const mockFunction = jest.fn();

  it('Should render image with data', async () => {
    const component = <RenderImageOrVideo item={data} />;
    render(component);
  });

  it('Should render one image', async () => {
    const nextButton = render(<RenderImageOrVideo item={data} />).getByTestId(
      'image1',
    );
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render 4 image', async () => {
    const nextButton = render(<RenderImageOrVideo item={data1} />).getByTestId(
      'image2',
    );
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render 4 image', async () => {
    const nextButton = render(<RenderImageOrVideo item={data1} />).getByTestId(
      'image3',
    );
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render 4 image', async () => {
    const nextButton = render(<RenderImageOrVideo item={data1} />).getByTestId(
      'image4',
    );
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });

  it('Should render 4 image', async () => {
    const nextButton = render(<RenderImageOrVideo item={data1} />).getByTestId(
      'image5',
    );
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
    render(<RenderImageOrVideo item={data1} />).getByTestId(
      'close',
    );
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });
});
