import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Status} from '../Status';

const mock1 = [
  {addImage: true, id:1},
  {
    image:
      'https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg',
    name: 'HR Team',
    isView: false,
    id:2
  },
];

describe('<Header>', () => {
  const mockFunction = jest.fn();

  it('Should render header with home click', async () => {
    const nextButton = render(<Status status={mock1} />).getByTestId('modal-1');
    fireEvent(nextButton, 'onPress');
    expect(mockFunction).toMatchSnapshot();
  });
});
