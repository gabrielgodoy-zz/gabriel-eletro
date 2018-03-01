import * as React from 'react';
import { shallow } from 'enzyme';

import Shelf from './Shelf';

describe('Shelf', () => {
  it('should render without throwing an error', () => {
    const products = [{
      id: '1',
      image: '',
    }];
    const wrapper = shallow(<Shelf products={products} />);
    expect(wrapper.find('.shelf').exists()).toBe(true);
  });
});
