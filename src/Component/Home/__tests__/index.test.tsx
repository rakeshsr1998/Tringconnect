import {render} from '@testing-library/react-native';
import React from 'react';
import { Home } from '..';

describe('<Home>', () => {
  it('Should render comments with data', async () => {
    const component = <Home />;
    render(component);
  });
});
