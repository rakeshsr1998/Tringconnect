import {render} from '@testing-library/react-native';
import React from 'react';
import { Layout } from '..';

describe('<Layout>', () => {
  it('Should render Layout with data', async () => {
    const component = <Layout />;
    render(component);
  });
});
