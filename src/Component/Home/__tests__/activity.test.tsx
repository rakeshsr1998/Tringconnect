import {render} from '@testing-library/react-native';
import React from 'react';
import {Activity} from '../Activity';

describe('<Activity>', () => {
  it('Should render Activity with data', async () => {
    const component = <Activity />;
    render(component);
  });
});
