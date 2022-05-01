import {render} from '@testing-library/react-native';
import React from 'react';
import VirtualizedView from '../Virtualizedview';

describe('<Home>', () => {
  it('Should render comments with data', async () => {
    const component = <VirtualizedView />;
    render(component);
  });
});
