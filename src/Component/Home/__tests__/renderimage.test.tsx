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
  it('Should render one image', async () => {
    const image1 = render(<RenderImageOrVideo data={data} />).getByTestId(
      'image1',
    );
    fireEvent(image1, 'onPress');

    const image2 = render(<RenderImageOrVideo data={data1} />).getByTestId(
      'image2',
    );
    fireEvent(image2, 'onPress');

    const image3 = render(<RenderImageOrVideo data={data1} />).getByTestId(
      'image3',
    );
    fireEvent(image3, 'onPress');

    const image4 = render(<RenderImageOrVideo data={data1} />).getByTestId(
      'image4',
    );
    fireEvent(image4, 'onPress');

    const image5 = render(<RenderImageOrVideo data={data1} />).getByTestId(
      'image5',
    );
    fireEvent(image5, 'onPress');
  });
});
