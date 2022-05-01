import {render} from '@testing-library/react-native';
import React from 'react';
import {Activity} from '../Activity';

const response = [
  {
    id: 1,
    name: 'Kreethiraj K',
    role: 'Product Delivery Manager',
    post: 'Successfully delivered this great kitchen app to market. Kudos the entire team.',
    date: '2017-01-01',
    time: '12:34:56',
    likes: 240,
    comments: 12,
  },
  {
    id: 2,
    name: 'Sridhar Rao',
    role: 'Director Marketing Sales',
    post: 'Good Marketing makes the company look smart. Great marketing makes customer feel smart',
    date: '2022-04-29',
    time: '16:42:06',
    likes: 210,
    comments: 50,
  },
];

describe('<Activity>', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('returns result if array', () => {
    fetch.mockResponseOnce(JSON.stringify(response));
    const component = <Activity />;
    render(component);
  });
});
