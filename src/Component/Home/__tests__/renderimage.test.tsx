import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {RenderImageOrVideo} from '../RenderImageVideo';

describe('<Render image in screen page>', () => {
  it('Should render one image', async () => {
    const image1 = render(<RenderImageOrVideo selectedIndex={0} />).getByTestId(
      'image1',
    );
    fireEvent(image1, 'onPress');

    const image2 = render(<RenderImageOrVideo selectedIndex={1} />).getByTestId(
      'image2',
    );
    fireEvent(image2, 'onPress');

    const image3 = render(<RenderImageOrVideo selectedIndex={1} />).getByTestId(
      'image3',
    );
    fireEvent(image3, 'onPress');

    const image4 = render(<RenderImageOrVideo selectedIndex={1} />).getByTestId(
      'image4',
    );
    fireEvent(image4, 'onPress');

    const image5 = render(<RenderImageOrVideo selectedIndex={1} />).getByTestId(
      'image5',
    );
    fireEvent(image5, 'onPress');
  });
});
